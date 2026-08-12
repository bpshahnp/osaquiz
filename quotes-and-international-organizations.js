// Quiz Questions Database
        const QUIZ_QUESTIONS = {
    1: {
        id: 1,
        title: "UNO - Languages",
        round: "भनाइ, उक्ति तथा अन्तराष्ट्रिय संगठन",
        question: "UNO ले आधिकारिक रुपमा मान्यता दिएको पछिल्लो भाषा कुन हो?",
        answer: "अरबी"
    },
    2: {
        id: 2,
        title: "UNO - ICJ",
        round: "भनाइ, उक्ति तथा अन्तराष्ट्रिय संगठन",
        question: "अन्तराष्ट्रिय न्यायालय (ICJ) मा कतिजना न्यायाधीश रहने व्यवस्था छ?",
        answer: "१५ जना"
    },
    3: {
        id: 3,
        title: "International - ILO",
        round: "भनाइ, उक्ति तथा अन्तराष्ट्रिय संगठन",
        question: "अन्तराष्ट्रिय श्रम संगठन (ILO) को स्थापना कहिले भएको हो?",
        answer: "सन् १९१९"
    },
    4: {
        id: 4,
        title: "SAARC - Logo",
        round: "भनाइ, उक्ति तथा अन्तराष्ट्रिय संगठन",
        question: "सार्क (SAARC) को लोगो बनाउने नेपाली कलाकार को हुन्?",
        answer: "शैलेन्द्र महर्जन"
    },
    5: {
        id: 5,
        title: "Quotes - Mahatma Gandhi",
        round: "भनाइ, उक्ति तथा अन्तराष्ट्रिय संगठन",
        question: "“खराब मानिसलाई सुधार्ने मुख्य औषधी हो प्रेम र स्नेह” यो भनाइ कसको हो?",
        answer: "महात्मा गान्धी"
    },
    6: {
        id: 6,
        title: "International - Literacy Day",
        round: "भनाइ, उक्ति तथा अन्तराष्ट्रिय संगठन",
        question: "अन्तराष्ट्रिय साक्षरता दिवस कहिले मनाइन्छ?",
        answer: "सेप्टेम्बर ८"
    },
    7: {
        id: 7,
        title: "History - BP Koirala",
        round: "भनाइ, उक्ति तथा अन्तराष्ट्रिय संगठन",
        question: "बी.पी. कोइरालाले UNO को महासभालाई कहिले सम्बोधन गरेका थिए?",
        answer: "सन् १९६०"
    },
    8: {
        id: 8,
        title: "Quotes - King Birendra",
        round: "भनाइ, उक्ति तथा अन्तराष्ट्रिय संगठन",
        question: "“शिक्षा नै सभ्यताको मूल हो” यो भनाइ कुन राजाको हो?",
        answer: "श्री ५ वीरेन्द्र"
    },
    9: {
        id: 9,
        title: "UNO - Peacekeeping",
        round: "भनाइ, उक्ति तथा अन्तराष्ट्रिय संगठन",
        question: "हाल संयुक्त राष्ट्रसंघको शान्ति मिसनमा सबैभन्दा बढी सैनिक पठाउने देश कुन हो?",
        answer: "नेपाल"
    },
    10: {
        id: 10,
        title: "Quotes - Shakespeare",
        round: "भनाइ, उक्ति तथा अन्तराष्ट्रिय संगठन",
        question: "“चरित्र जीवनको गहना हो” यो भनाइ कुन पश्‍चिमी साहित्यकारको हो?",
        answer: "विलियम शेक्सपियर"
    },
    11: {
        id: 11,
        title: "SAARC - Environment",
        round: "भनाइ, उक्ति तथा अन्तराष्ट्रिय संगठन",
        question: "प्लास्टिक प्रयोगमा प्रतिबन्ध लगाउने सार्कको पहिलो राष्ट्र कुन हो?",
        answer: "बङ्गलादेश"
    },
    12: {
        id: 12,
        title: "UNO - Security Council",
        round: "भनाइ, उक्ति तथा अन्तराष्ट्रिय संगठन",
        question: "नेपाल हालसम्म कतिपटक UNO सुरक्षा परिषद्को अस्थायी सदस्य भएको छ?",
        answer: "२ पटक"
    }
};
        // Storage keys
        const STORAGE_KEYS = {
            VISITED_QUESTIONS: 'quiz_visited_questions_quotes_and_International_organizations',
            TIMER_STATE: 'quiz_timer_state_quotes_and_International_organizations'
        };