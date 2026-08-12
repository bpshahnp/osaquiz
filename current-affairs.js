// Quiz Questions Database
const QUIZ_QUESTIONS = {
    1: {
        id: 1,
        title: "Current Affairs - Social Media",
        round: "नेपाल र विश्वको समसामयिक",
        question: "नेपालका GEN Z युवाहरूले छलफल गर्न र प्रधानमन्त्री छनौट गर्न प्रयोग गरेको सामाजिक संजाल कुन हो?",
        answer: "DISCORD"
    },
    2: {
        id: 2,
        title: "Current Affairs - Madhesh Province",
        round: "नेपाल र विश्वको समसामयिक",
        question: "मधेश प्रदेशका नवनियुक्त प्रदेश प्रमुख को हुन्?",
        answer: "सुरेन्द्र लाभ कर्ण (२०८२ कार्तिक २५)"
    },
    3: {
        id: 3,
        title: "Current Affairs - Hydropower",
        round: "नेपाल र विश्वको समसामयिक",
        question: "उर्जा मन्त्रालयको तथ्याङ्क अनुसार आ. व. २०८१/८२ सम्म नेपालको कुल विद्युत उत्पादन कति रहेको छ?",
        answer: "३८७८ मेगावाट"
    },
    4: {
        id: 4,
        title: "Current Affairs - UNESCO",
        round: "नेपाल र विश्वको समसामयिक",
        question: "नेपालको कुन स्थानीय तहलाई UNESCO द्वारा संगीतको सिर्जनात्मक सहरका रूपमा मान्यता प्रदान गरिएको छ?",
        answer: "ललितपुर महानगरपालिका"
    },
    5: {
        id: 5,
        title: "Current Affairs - Global Hero",
        round: "नेपाल र विश्वको समसामयिक",
        question: "ग्लोबल हिरो अवार्ड २०२५ बाट सम्मानित हुने नेपाली व्यक्ती को हुन्?",
        answer: "कुलमान घिसिङ"
    },
    6: {
        id: 6,
        title: "Current Affairs - International",
        round: "नेपाल र विश्वको समसामयिक",
        question: "अमेरिकी सेनाले नियन्त्रणमा लिएका भेनेजुएलाका राष्ट्रपतिको नाम के हो?",
        answer: "निकोलस माद्रो"
    },
    7: {
        id: 7,
        title: "Current Affairs - Pageant",
        round: "नेपाल र विश्वको समसामयिक",
        question: "मिस नेपाल नर्थ अमेरिका २०२५ को विजेता सुन्दरी को हुन्?",
        answer: "दिया श्रेष्ठ"
    },
    8: {
        id: 8,
        title: "Current Affairs - Tech",
        round: "नेपाल र विश्वको समसामयिक",
        question: "Data Centre र Cloud सेवा प्रदायकका रूपमा दर्ता हुने पहिलो नेपाली संस्था कुन हो?",
        answer: "Ncell"
    },
    9: {
        id: 9,
        title: "Current Affairs - HDI",
        round: "नेपाल र विश्वको समसामयिक",
        question: "मानव विकास सूचकांक २०२५ अनुसार नेपाल कतिऔं स्थानमा छ?",
        answer: "१४५ औं स्थान"
    },
    10: {
        id: 10,
        title: "Current Affairs - National Parks",
        round: "नेपाल र विश्वको समसामयिक",
        question: "नेपालको १३ औं राष्ट्रिय निकुन्ज कुन हो?",
        answer: "छायाञनाथ राष्ट्रिय निकुन्ज"
    },
    11: {
        id: 11,
        title: "Current Affairs - Corruption Index",
        round: "नेपाल र विश्वको समसामयिक",
        question: "भ्रष्टाचार अवधारणा सूचकांक २०२५ अनुसार नेपाल कतिऔं स्थानमा छ?",
        answer: "१०७ औं स्थान"
    },
    12: {
        id: 12,
        title: "Current Affairs - Politics",
        round: "नेपाल र विश्वको समसामयिक",
        question: "रास्वपा र बालेन शाह बिच समझौता भएको मिति कुन हो?",
        answer: "वि. सं. २०८२ पुस १३ गते"
    }
};

// Storage keys
const STORAGE_KEYS = {
    VISITED_QUESTIONS: 'quiz_visited_questions_current_affairs',
    TIMER_STATE: 'quiz_timer_state_current_affairs'
};