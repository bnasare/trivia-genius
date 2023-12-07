const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Paris",
        c: "Madrid",
        d: "Rome",
        correct: "b",
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Mars",
        b: "Venus",
        c: "Jupiter",
        d: "Saturn",
        correct: "a",
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        a: "Charles Dickens",
        b: "William Shakespeare",
        c: "Jane Austen",
        d: "Mark Twain",
        correct: "b",
    },
    {
        question: "What is the largest mammal in the world?",
        a: "Elephant",
        b: "Blue Whale",
        c: "Giraffe",
        d: "Hippopotamus",
        correct: "b",
    },
    {
        question: "In which year did World War II end?",
        a: "1943",
        b: "1945",
        c: "1950",
        d: "1939",
        correct: "b",
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        a: "Oxygen",
        b: "Gold",
        c: "Iron",
        d: "Silver",
        correct: "a",
    },
    {
        question: "What is the currency of Japan?",
        a: "Yuan",
        b: "Won",
        c: "Yen",
        d: "Ringgit",
        correct: "c",
    },
    {
        question: "Who painted the Mona Lisa?",
        a: "Vincent van Gogh",
        b: "Leonardo da Vinci",
        c: "Pablo Picasso",
        d: "Claude Monet",
        correct: "b",
    },
    {
        question: "What is the largest ocean on Earth?",
        a: "Atlantic Ocean",
        b: "Indian Ocean",
        c: "Southern Ocean",
        d: "Pacific Ocean",
        correct: "d",
    },
    {
        question: "Which programming language is known for its use in web development?",
        a: "Java",
        b: "C++",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const questionAnswered = document.getElementById('question-answered')

let currentQuiz = 0
let score = 0

shuffleArray(quizData);
loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

    questionAnswered.innerText = `${currentQuiz + 1}/${quizData.length}`;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            questionAnswered.style.display = 'none';
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
})

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

