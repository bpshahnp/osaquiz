// gamesandsportsdatabase.js

const QUIZ_QUESTIONS = {
    1: {
        id: 1,
        title: "Sports - History",
        round: "नेपाल / विश्वको खेलकुद",
        question: "नेपालको सबैभन्दा पुरानो राष्ट्रिय खेलकुद संघ कुन हो?",
        answer: "नेपाल क्रिकेट संघ"
    },
    2: {
        id: 2,
        title: "Sports - Stadiums",
        round: "नेपाल / विश्वको खेलकुद",
        question: "गौरीतार रंगशाला हेटौंडामा पर्छ भने नारायणी रंगशाला कहाँ पर्छ?",
        answer: "वीरगंज"
    },
    3: {
        id: 3,
        title: "Sports - Cricket World Cup",
        round: "नेपाल / विश्वको खेलकुद",
        question: "पहिलो विश्वकप क्रिकेट प्रतियोगिता कहिले र कहाँ भएको थियो?",
        answer: "सन् १९७५, इङ्ग्ल्यान्ड"
    },
    4: {
        id: 4,
        title: "Sports - Chess",
        round: "नेपाल / विश्वको खेलकुद",
        question: "चेस खेलको सुरुवात कुन देशबाट भएको हो?",
        answer: "भारत"
    },
    5: {
        id: 5,
        title: "Sports - Football World Cup",
        round: "नेपाल / विश्वको खेलकुद",
        question: "पहिलो विश्वकप फुटबल प्रतियोगिता कहाँ भएको थियो?",
        answer: "उरुग्वे"
    },
    6: {
        id: 6,
        title: "Sports - Basketball",
        round: "नेपाल / विश्वको खेलकुद",
        question: "बास्केटबल खेलमा एउटा टिमबाट मैदानमा कति खेलाडी खेल्ने गरिन्छ?",
        answer: "५ जना"
    },
    7: {
        id: 7,
        title: "Sports - Space",
        round: "नेपाल / विश्वको खेलकुद",
        question: "चन्द्रमामा सबैभन्दा पहिले खेलिएको खेल कुन थियो?",
        answer: "गल्फ"
    },
    8: {
        id: 8,
        title: "Sports - Players",
        round: "नेपाल / विश्वको खेलकुद",
        question: "चर्चित फुटबल खेलाडी David Beckham कुन देशका खेलाडी हुन्?",
        answer: "इङ्ग्ल्यान्ड"
    },
    9: {
        id: 9,
        title: "Sports - Nepal Cricket",
        round: "नेपाल / विश्वको खेलकुद",
        question: "हाल नेपाली क्रिकेट टिमको कप्तान को हुन्?",
        answer: "रोहित कुमार पौडेल"
    },
    10: {
        id: 10,
        title: "Sports - Elephant Polo",
        round: "नेपाल / विश्वको खेलकुद",
        question: "नेपालमा प्रत्येक वर्ष आयोजना हुने अन्तराष्ट्रिय खेलकुद प्रतियोगिता कुन हो?",
        answer: "हात्तिपोलो"
    },
    11: {
        id: 11,
        title: "Sports - FIFA 2026",
        round: "नेपाल / विश्वको खेलकुद",
        question: "फिफा विश्वकप २०२६ आयोजना गर्ने तीनओटा राष्ट्रहरू कुन कुन हुन्?",
        answer: "अमेरिका, क्यानडा र मेक्सिको"
    },
    12: {
        id: 12,
        title: "Sports - Wrestling",
        round: "नेपाल / विश्वको खेलकुद",
        question: "नेपालको पहिलो महिला रेस्लर को हुन्?",
        answer: "भगवती खड्का"
    }
};

const STORAGE_KEYS = {
    VISITED_QUESTIONS: 'quiz_visited_questions_games_and_sports',
    TIMER_STATE: 'quiz_timer_state_games_and_sports'
};