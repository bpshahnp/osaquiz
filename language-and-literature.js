// Quiz Questions Database
        const QUIZ_QUESTIONS = {
    1: {
        id: 1,
        title: "Literature - Poets",
        round: "भाषा, साहित्य, कला, धर्म र संस्कृति",
        question: "आधुनिक कवि भनेर कुन कविलाई चिनिन्छ?",
        answer: "गोपालप्रसाद रिमाल"
    },
    2: {
        id: 2,
        title: "Mythology - Mahabharat",
        round: "भाषा, साहित्य, कला, धर्म र संस्कृति",
        question: "व्यासको आशीर्वादले अम्बिका र अम्बालिकाबाट ककसको जन्म भएको थियो?",
        answer: "धृतराष्ट्र र पाण्डु"
    },
    3: {
        id: 3,
        title: "Culture - Festivals",
        round: "भाषा, साहित्य, कला, धर्म र संस्कृति",
        question: "इन्द्रजात्रा भाद्र शुक्ल चतुर्दशीमा पर्छ भने चण्डिपूर्णिमा कहिले पर्छ?",
        answer: "वैशाख शुक्ल पूर्णिमा"
    },
    4: {
        id: 4,
        title: "Literature - Dictionary",
        round: "भाषा, साहित्य, कला, धर्म र संस्कृति",
        question: "हालसम्मको नेपाली भाषाको सबभन्दा ठुलो शब्दकोश कुन हो?",
        answer: "नेपाली शब्दसागर"
    },
    5: {
        id: 5,
        title: "Literature - Ranking",
        round: "भाषा, साहित्य, कला, धर्म र संस्कृति",
        question: "साहित्य लेखनका हिसाबले नेपाली साहित्यपछि दोस्रो स्थानमा पर्ने नेपालको कुन साहित्य हो?",
        answer: "नेवारी साहित्य"
    },
    6: {
        id: 6,
        title: "Culture - Religion",
        round: "भाषा, साहित्य, कला, धर्म र संस्कृति",
        question: "साधु सन्तले बाल्ने पवित्र अग्निलाई के भनिन्छ?",
        answer: "धुनी"
    },
    7: {
        id: 7,
        title: "History - Art",
        round: "भाषा, साहित्य, कला, धर्म र संस्कृति",
        question: "नेपालमा युरोपेली कलाको सूत्रपात गर्ने व्यक्ति को हुन्?",
        answer: "भीमसेन थापा"
    },
    8: {
        id: 8,
        title: "Culture - Painting",
        round: "भाषा, साहित्य, कला, धर्म र संस्कृति",
        question: "माथि र तल काठ राखेर झुण्ड्याउन र बेर्न मिल्ने गरी कपडामा कोरिएको चित्रलाई के भनिन्छ?",
        answer: "पौभा चित्र"
    },
    9: {
        id: 9,
        title: "Mythology - Kings",
        round: "भाषा, साहित्य, कला, धर्म र संस्कृति",
        question: "सत्ययुगका चक्रवर्ती राजा ययाती हुन् भने त्रेतायुगका चक्रवर्ती राजा को हुन्?",
        answer: "रामचन्द्र"
    },
    10: {
        id: 10,
        title: "Grammar - Gender",
        round: "भाषा, साहित्य, कला, धर्म र संस्कृति",
        question: "बाघको स्त्रीलिङ्गी शब्द बघिनी भएजस्तै मृगको स्त्रीलिङ्गी शब्द के हुन्छ?",
        answer: "मुडुली वा झाँझ"
    },
    11: {
        id: 11,
        title: "Culture - Wedding",
        round: "भाषा, साहित्य, कला, धर्म र संस्कृति",
        question: "बिहेका बेला दुलहा दुलहीले एक अर्कालाई खुवाउने घिउ, चिनी र मह मिसाइएको खानेकुरा के हो?",
        answer: "माहुर"
    },
    12: {
        id: 12,
        title: "Literature - Awards",
        round: "भाषा, साहित्य, कला, धर्म र संस्कृति",
        question: "तीनपटकसम्म मदन पुरस्कार प्राप्त गर्ने व्यक्ति को हुन्?",
        answer: "सत्यमोहन जोशी"
    }
};

        // Storage keys
        const STORAGE_KEYS = {
            VISITED_QUESTIONS: 'quiz_visited_questions_language_and_literature',
            TIMER_STATE: 'quiz_timer_state_language_and_literature'
        };