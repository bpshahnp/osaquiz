class MultiQuestionTimerGame {
    constructor() {
        this.timers = [
            { id: 1, duration: 30, label: 'Timer 1' },
            { id: 2, duration: 15, label: 'Timer 2' },
            { id: 3, duration: 15, label: 'Timer 3' },
            { id: 4, duration: 15, label: 'Timer 4' },
            { id: 5, duration: 15, label: 'Timer 5' },
            { id: 6, duration: 15, label: 'Timer 6' },
            { id: 7, duration: 15, label: 'Timer 7' },
            { id: 8, duration: 15, label: 'Timer 8' }
        ];
        this.currentTimer = null;
        this.intervals = {};
        this.audioContext = null;
        this.completedTimers = new Set();
        this.currentQuestionId = null;
        this.visitedQuestions = new Set();
        this.init();
    }

    init() {
        this.loadVisitedQuestions();
        this.createQuestionNavigation();
        this.createTimers();
        this.setupEventListeners();
        this.initAudio();
        this.handleUrlRouting();
        this.updateQuestionStatus();
    }

    // Storage Management
    loadVisitedQuestions() {
        try {
            const stored = JSON.parse(window.sessionStorage.getItem(STORAGE_KEYS.VISITED_QUESTIONS) || '[]');
            this.visitedQuestions = new Set(stored);
        } catch (e) {
            this.visitedQuestions = new Set();
        }
    }

    saveVisitedQuestions() {
        try {
            window.sessionStorage.setItem(STORAGE_KEYS.VISITED_QUESTIONS, JSON.stringify([...this.visitedQuestions]));
        } catch (e) {
            console.log('Could not save visited questions');
        }
    }

    markQuestionAsVisited(questionId) {
        this.visitedQuestions.add(questionId);
        this.saveVisitedQuestions();
        this.updateQuestionStatus();
    }

    resetProgress() {
        if (confirm('Are you sure you want to reset all progress? This will mark all questions as unvisited and cannot be undone.')) {
            this.visitedQuestions.clear();
            this.resetTimers();
            this.resetAnswerState();
            try {
                window.sessionStorage.removeItem(STORAGE_KEYS.VISITED_QUESTIONS);
                window.sessionStorage.removeItem(STORAGE_KEYS.TIMER_STATE);
            } catch (e) {
                console.log('Could not clear storage');
            }
            this.updateQuestionStatus();
            
            // Show success message
            const resetBtn = document.getElementById('resetBtn');
            const originalText = resetBtn.textContent;
            resetBtn.textContent = '✅ Reset Complete';
            resetBtn.style.background = '#48bb78';
            setTimeout(() => {
                resetBtn.textContent = originalText;
                resetBtn.style.background = '';
            }, 2000);
        }
    }

    updateQuestionStatus() {
        // Update navigation links
        document.querySelectorAll('.question-link').forEach(link => {
            const questionId = parseInt(link.dataset.questionId);
            if (this.visitedQuestions.has(questionId)) {
                link.classList.add('visited');
            } else {
                link.classList.remove('visited');
            }
        });
    }

    createQuestionNavigation() {
        const nav = document.getElementById('questionNav');
        
        Object.values(QUIZ_QUESTIONS).forEach(question => {
            const link = document.createElement('a');
            link.href = `#question-${question.id}`;
            link.className = 'question-link';
            link.textContent = `Q${question.id}`;
            link.dataset.questionId = question.id;
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.loadQuestion(question.id);
                this.updateUrl(question.id);
            });
            
            // Insert before the controls
            const controls = nav.querySelector('.nav-controls');
            nav.insertBefore(link, controls);
        });
    }

    handleUrlRouting() {
        const hash = window.location.hash;
        if (hash.startsWith('#question-')) {
            const questionId = parseInt(hash.replace('#question-', ''));
            if (QUIZ_QUESTIONS[questionId]) {
                this.loadQuestion(questionId);
            }
        }

        window.addEventListener('hashchange', () => {
            const hash = window.location.hash;
            if (hash.startsWith('#question-')) {
                const questionId = parseInt(hash.replace('#question-', ''));
                if (QUIZ_QUESTIONS[questionId]) {
                    this.loadQuestion(questionId);
                }
            } else if (hash === '') {
                this.showNoQuestionState();
            }
        });
    }

    updateUrl(questionId) {
        window.history.pushState(null, '', `#question-${questionId}`);
    }

    loadQuestion(questionId) {
        const question = QUIZ_QUESTIONS[questionId];
        if (!question) return;

        this.currentQuestionId = questionId;
        this.markQuestionAsVisited(questionId);
        this.resetTimers();
        this.resetAnswerState();

        // Update navigation
        document.querySelectorAll('.question-link').forEach(link => {
            link.classList.toggle('active', link.dataset.questionId == questionId);
        });

        // Update question content
        document.getElementById('questionRound').textContent = question.round;
        document.getElementById('questionText').textContent = question.question;
        document.getElementById('answerLabel').textContent = `Answer: ${question.answer}`;

        // Show question display and hide no-question state
        document.getElementById('noQuestionState').style.display = 'none';
        document.getElementById('questionDisplay').style.display = 'block';
    }

    showNoQuestionState() {
        this.currentQuestionId = null;
        this.resetTimers();
        
        // Update navigation
        document.querySelectorAll('.question-link').forEach(link => {
            link.classList.remove('active');
        });

        // Show no-question state and hide question display
        document.getElementById('noQuestionState').style.display = 'block';
        document.getElementById('questionDisplay').style.display = 'none';
    }

    resetTimers() {
        // Stop all timers
        Object.keys(this.intervals).forEach(id => {
            clearInterval(this.intervals[id]);
            delete this.intervals[id];
        });
        
        this.currentTimer = null;
        this.completedTimers.clear();
        
        // Reset timer displays
        this.timers.forEach(timer => {
            const element = document.querySelector(`[data-id="${timer.id}"]`);
            if (element) {
                element.className = 'timer';
                element.querySelector('.timer-time').textContent = this.formatTime(timer.duration);
                element.querySelector('.timer-status').textContent = 'Click to start';
            }
        });
    }

    resetAnswerState() {
        const answerSection = document.getElementById('answerSection');
        const revealAnswerBtn = document.getElementById('revealAnswerBtn');
        
        answerSection.style.display = 'none';
        revealAnswerBtn.style.display = 'flex';
    }

    createTimers() {
        const container = document.getElementById('timersContainer');
        container.innerHTML = '';
        this.timers.forEach(timer => {
            const timerElement = document.createElement('div');
            timerElement.className = 'timer';
            timerElement.dataset.id = timer.id;
            timerElement.innerHTML = `
                <div class="timer-label">${timer.label}</div>
                <div class="timer-time">${this.formatTime(timer.duration)}</div>
                <div class="timer-status">Click to start</div>
            `;
            timerElement.addEventListener('click', () => this.startTimer(timer.id));
            container.appendChild(timerElement);
        });
    }

    setupEventListeners() {
        document.getElementById('revealAnswerBtn').addEventListener('click', () => this.revealAnswer());
        document.getElementById('resetBtn').addEventListener('click', () => this.resetProgress());
    }

    initAudio() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.log('Audio context not available');
        }
    }

    playBeep() {
        if (!this.audioContext) return;
        
        try {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);

            oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
            oscillator.type = 'sine';

            gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);

            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + 0.1);
        } catch (e) {
            console.log('Could not play beep');
        }
    }

    startTimer(id) {
        if (!this.currentQuestionId) {
            alert('Please select a question first!');
            return;
        }

        if (this.audioContext && this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }
        if (this.currentTimer) {
            this.stopTimer(this.currentTimer);
        }
        if (this.completedTimers.has(id)) {
            return;
        }
        this.currentTimer = id;
        const timer = this.timers.find(t => t.id === id);
        const element = document.querySelector(`[data-id="${id}"]`);
        
        element.classList.add('active');
        element.classList.remove('warning', 'finished');
        
        let timeLeft = timer.duration;
        
        const updateDisplay = () => {
            element.querySelector('.timer-time').textContent = this.formatTime(timeLeft);
            element.querySelector('.timer-status').textContent = 'Running...';

            if (timeLeft <= 5 && timeLeft > 0) {
                element.classList.add('warning');
                this.playBeep();
            }

            if (timeLeft <= 0) {
                this.finishTimer(id);
            }

            timeLeft--;
        };
        
        updateDisplay();
        this.intervals[id] = setInterval(updateDisplay, 1000);
    }

    stopTimer(id) {
        if (this.intervals[id]) {
            clearInterval(this.intervals[id]);
            delete this.intervals[id];
        }
        
        const element = document.querySelector(`[data-id="${id}"]`);
        element.classList.remove('active', 'warning');
        
        if (!this.completedTimers.has(id)) {
            element.querySelector('.timer-status').textContent = 'Stopped';
        }
    }

    finishTimer(id) {
        this.stopTimer(id);
        this.completedTimers.add(id);
        
        const element = document.querySelector(`[data-id="${id}"]`);
        element.classList.add('finished');
        element.querySelector('.timer-status').textContent = 'Finished';
        element.querySelector('.timer-time').textContent = '00:00';
        
        this.currentTimer = null;
        
        for (let i = 0; i < 3; i++) {
            setTimeout(() => this.playBeep(), i * 200);
        }
    }
    
    revealAnswer() {
        if (!this.currentQuestionId) return;

        const answerSection = document.getElementById('answerSection');
        const revealAnswerBtn = document.getElementById('revealAnswerBtn');
        
        // Show answer and hide button
        answerSection.style.display = 'block';
        revealAnswerBtn.style.display = 'none';
    }

    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new MultiQuestionTimerGame();
});