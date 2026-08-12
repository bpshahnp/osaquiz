// Quiz Questions Database
       const QUIZ_QUESTIONS = {
    1: {
        id: 1,
        title: "Health - Handwashing",
        round: "स्वास्थ्य, विज्ञान, जनसंख्या तथा वातावरण",
        question: "WHO अनुसार साबुन पानीले हात धुँदा कम्तिमा कति समय लगाउनुपर्छ?",
        answer: "४० देखि ६० सेकेण्ड"
    },
    2: {
        id: 2,
        title: "Science - Special Days",
        round: "स्वास्थ्य, विज्ञान, जनसंख्या तथा वातावरण",
        question: "नेपाल विज्ञान दिवस कहिले मनाइन्छ?",
        answer: "असोज १"
    },
    3: {
        id: 3,
        title: "Health - Helpline",
        round: "स्वास्थ्य, विज्ञान, जनसंख्या तथा वातावरण",
        question: "स्वास्थ्यसम्बन्धी जानकारीका लागि नेपाल सरकारको निःशुल्क फोन नम्बर कति हो?",
        answer: "११११"
    },
    4: {
        id: 4,
        title: "Science - Immunity",
        round: "स्वास्थ्य, विज्ञान, जनसंख्या तथा वातावरण",
        question: "खोप लगाउँदा शरीरमा के बन्छ, जसले रोगबाट बचाउँछ?",
        answer: "एन्टिबडी (Antibodies)"
    },
    5: {
        id: 5,
        title: "Health - Life Expectancy",
        round: "स्वास्थ्य, विज्ञान, जनसंख्या तथा वातावरण",
        question: "२०७८ को जनगणना अनुसार नेपालीहरूको औसत आयु कति छ?",
        answer: "७१.३ वर्ष"
    },
    6: {
        id: 6,
        title: "Science - Astronomy",
        round: "स्वास्थ्य, विज्ञान, जनसंख्या तथा वातावरण",
        question: "चन्द्रमाले पृथ्वीको वरिपरि एक पटक परिक्रमा गर्न कति समय लगाउँछ?",
        answer: "२७ दिन ७ घण्टा ४३ मिनेट ११ सेकेन्ड"
    },
    7: {
        id: 7,
        title: "Tech - Internet",
        round: "स्वास्थ्य, विज्ञान, जनसंख्या तथा वातावरण",
        question: "नेपालमा पहिलो पटक इन्टरनेट सेवा कहिले सुरु भयो?",
        answer: "वि. सं. २०५२ साल"
    },
    8: {
        id: 8,
        title: "Tech - Wireless",
        round: "स्वास्थ्य, विज्ञान, जनसंख्या तथा वातावरण",
        question: "डाटा प्रसारण गर्न प्रकाश (Light) प्रयोग गर्ने वायरलेस सञ्‍चार (Wireless Communication) प्रविधि कुन हो?",
        answer: "Li-Fi (लाई‍-फाई) (Light Fidelity)"
    },
    9: {
        id: 9,
        title: "Science - Demography",
        round: "स्वास्थ्य, विज्ञान, जनसंख्या तथा वातावरण",
        question: "विश्व जनसंख्या प्रतिवेदन प्रकाशित गर्ने संस्था कुन हो?",
        answer: "संयुक्त राष्ट्रसंघ (UN)"
    },
    10: {
        id: 10,
        title: "Science - Anatomy",
        round: "स्वास्थ्य, विज्ञान, जनसंख्या तथा वातावरण",
        question: "शरीरको कुन भागमा रगतको आपूर्ति हुँदैन र सिधै हावाबाट अक्सिजन लिन्छ?",
        answer: "कर्निया (Cornea)"
    },
    11: {
        id: 11,
        title: "Science - Scientists",
        round: "स्वास्थ्य, विज्ञान, जनसंख्या तथा वातावरण",
        question: "विज्ञानमा “प्रयोगका पिता” (Father of Experiments) भनेर चिनिने वैज्ञानिक को हुन्?",
        answer: "आर्किमिडिज"
    },
    12: {
        id: 12,
        title: "Science - Psychology",
        round: "स्वास्थ्य, विज्ञान, जनसंख्या तथा वातावरण",
        question: "बारम्बार झुट बोल्ने मानसिक बानीलाई के भनिन्छ?",
        answer: "मिथोमेनिया (Mythomania)"
    }
};
        // Storage keys
        const STORAGE_KEYS = {
            VISITED_QUESTIONS: 'quiz_visited_questions_science_and_technology',
            TIMER_STATE: 'quiz_timer_state_science_and_technology'
        };