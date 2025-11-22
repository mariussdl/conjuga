document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const verbDisplay = document.getElementById('verb-display');
    const translationDisplay = document.getElementById('translation-display');
    const tenseDisplay = document.getElementById('tense-display');
    const personDisplay = document.getElementById('person-display');
    const answerInput = document.getElementById('answer-input');
    const submitBtn = document.getElementById('submit-btn');
    const nextBtn = document.getElementById('next-btn');
    const feedbackArea = document.getElementById('feedback-area');
    const resultMessage = document.getElementById('result-message');
    const correctionContainer = document.getElementById('correction-container');
    const conjugationTable = document.getElementById('conjugation-table');
    const keyboardButtons = document.querySelectorAll('.key-btn');
    const tenseSelect = document.getElementById('tense-select');
    const verbSelect = document.getElementById('verb-select');

    // State
    let currentQuestion = null;
    let currentTenseFilter = 'all';
    let currentVerbFilter = 'all';

    // Constants
    const PERSONS = ['yo', 'tú', 'él/ella/usted', 'nosotros', 'vosotros', 'ellos/ellas/ustedes'];

    const TENSE_TRANSLATIONS = {
        'presente': 'Présent',
        'preterito_perfecto': 'Passé composé',
        'preterito_imperfecto': 'Imparfait',
        'preterito_indefinido': 'Passé simple',
        'futuro_simple': 'Futur simple'
    };

    const PERSON_TRANSLATIONS = {
        'yo': 'je',
        'tú': 'tu',
        'él/ella/usted': 'il / elle / vous (formel)',
        'nosotros': 'nous',
        'vosotros': 'vous',
        'ellos/ellas/ustedes': 'ils / elles / vous (pluriel)'
    };

    // Use global verbsData from verbs.js
    const verbs = typeof verbsData !== 'undefined' ? verbsData : [];

    init();

    function init() {
        if (verbs.length === 0) {
            console.error("Verbs data not loaded.");
            return;
        }
        populateVerbSelect();
        setupEventListeners();
        generateQuestion();
    }

    function populateVerbSelect() {
        // Sort verbs alphabetically by infinitive
        const sortedVerbs = [...verbs].sort((a, b) => a.infinitive.localeCompare(b.infinitive));

        sortedVerbs.forEach(verb => {
            const option = document.createElement('option');
            option.value = verb.infinitive;
            option.textContent = verb.infinitive;
            verbSelect.appendChild(option);
        });
    }

    function setupEventListeners() {
        // Submit answer
        submitBtn.addEventListener('click', checkAnswer);
        answerInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') checkAnswer();
        });

        // Next question
        nextBtn.addEventListener('click', () => {
            resetUI();
            generateQuestion();
        });

        // Virtual Keyboard
        keyboardButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const char = btn.getAttribute('data-char');
                insertAtCursor(answerInput, char);
                answerInput.focus();
            });
        });

        // Tense Selector
        tenseSelect.addEventListener('change', (e) => {
            currentTenseFilter = e.target.value;
            resetUI();
            generateQuestion();
        });

        // Verb Selector
        verbSelect.addEventListener('change', (e) => {
            currentVerbFilter = e.target.value;
            resetUI();
            generateQuestion();
        });
    }

    function generateQuestion() {
        if (verbs.length === 0) return;

        let filteredVerbs = verbs;

        // Filter by verb if a specific verb is selected
        if (currentVerbFilter !== 'all') {
            filteredVerbs = verbs.filter(v => v.infinitive === currentVerbFilter);
        }

        if (filteredVerbs.length === 0) return;

        const randomVerb = filteredVerbs[Math.floor(Math.random() * filteredVerbs.length)];

        // Filter tenses based on selection
        let availableTenses = Object.keys(randomVerb.conjugations);
        if (currentTenseFilter !== 'all') {
            if (availableTenses.includes(currentTenseFilter)) {
                availableTenses = [currentTenseFilter];
            } else {
                availableTenses = Object.keys(randomVerb.conjugations);
            }
        }

        const randomTense = availableTenses[Math.floor(Math.random() * availableTenses.length)];
        const randomPersonIndex = Math.floor(Math.random() * PERSONS.length);
        const randomPerson = PERSONS[randomPersonIndex];

        currentQuestion = {
            verb: randomVerb,
            tense: randomTense,
            person: randomPerson,
            personKey: randomPerson,
            answer: randomVerb.conjugations[randomTense][randomPerson]
        };

        renderQuestion();
    }

    function renderQuestion() {
        verbDisplay.textContent = currentQuestion.verb.infinitive;
        translationDisplay.textContent = `(${currentQuestion.verb.translation})`;
        tenseDisplay.textContent = TENSE_TRANSLATIONS[currentQuestion.tense];
        personDisplay.textContent = PERSON_TRANSLATIONS[currentQuestion.person];

        // Focus input
        answerInput.focus();
    }

    function checkAnswer() {
        if (!currentQuestion) return;

        const userAnswer = answerInput.value.trim().toLowerCase();
        const correctAnswer = currentQuestion.answer.toLowerCase();

        if (userAnswer === '') return;

        const isCorrect = userAnswer === correctAnswer;

        showResult(isCorrect, correctAnswer);
    }

    function showResult(isCorrect, correctAnswer) {
        feedbackArea.classList.remove('hidden');
        submitBtn.disabled = true;
        answerInput.disabled = true;

        if (isCorrect) {
            resultMessage.textContent = "Correct ! Bravo 🎉";
            resultMessage.className = "result-message success";
            correctionContainer.classList.add('hidden');
        } else {
            resultMessage.textContent = `Incorrect. La bonne réponse était : ${correctAnswer}`;
            resultMessage.className = "result-message error";
            renderConjugationTable();
            correctionContainer.classList.remove('hidden');
        }

        nextBtn.classList.remove('hidden');
        nextBtn.focus();
    }

    function renderConjugationTable() {
        conjugationTable.innerHTML = '';
        const tenseData = currentQuestion.verb.conjugations[currentQuestion.tense];

        PERSONS.forEach(person => {
            const row = document.createElement('div');
            row.className = 'conjugation-row';

            // Highlight the requested person
            if (person === currentQuestion.person) {
                row.classList.add('highlight');
            }

            const personLabel = document.createElement('span');
            personLabel.textContent = PERSON_TRANSLATIONS[person];

            const verbForm = document.createElement('span');
            verbForm.textContent = tenseData[person];

            row.appendChild(personLabel);
            row.appendChild(verbForm);
            conjugationTable.appendChild(row);
        });
    }

    function resetUI() {
        feedbackArea.classList.add('hidden');
        nextBtn.classList.add('hidden');
        correctionContainer.classList.add('hidden');

        answerInput.value = '';
        answerInput.disabled = false;
        submitBtn.disabled = false;

        resultMessage.textContent = '';
        resultMessage.className = 'result-message';
    }

    function insertAtCursor(input, text) {
        const start = input.selectionStart;
        const end = input.selectionEnd;
        const value = input.value;

        input.value = value.substring(0, start) + text + value.substring(end);
        input.selectionStart = input.selectionEnd = start + text.length;
    }
});
