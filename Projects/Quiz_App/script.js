const questions = [
    {
        question: "What is the capital of Australia?",
        answers:[
            {text: "Sydney", correct:false},
            {text: "Canberra", correct: true},
            {text: "Melbourne", correct: false},
            {text: "Brisbane", correct: false}
        ]
    },
    {
        question: "Who is the CEO of Tesla?",
        answers:[
            {text: "Jeff Bezos", correct:false},
            {text: "Elon Musk", correct: true},
            {text: "Mark Zuckerberg", correct: false},
            {text: "Tim Cook", correct: false}
        ]
    },
    {
        question: "What is the capital of New Zealand?",
        answers:[
            {text: "Wellington", correct:true},
            {text: "Auckland", correct: false},
            {text: "Fiji", correct: false},
            {text: "Tokelau", correct: false}
        ]
    },
    {
        question: "What is the largest territory in the world?",
        answers:[
            {text: "India", correct:false},
            {text: "Russia", correct: true},
            {text: "USA", correct: false},
            {text: "Canada", correct: false}
        ]
    },
    {
        question: "What is the most densely populated country in the world?",
        answers:[
            {text: "Singapore", correct:false},
            {text: "Monaco", correct: true},
            {text: "Bahrain", correct: false},
            {text: "Gibraltar", correct: false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const tourModal = document.getElementById("tour-modal");
const closeModalButton = document.getElementById("close-modal");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add('btn');
        button.dataset.index = index + 1;
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === 'true';
    if(isCorrect){
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
});


document.addEventListener("keydown", (e) => {
    if(e.key >= 1 && e.key <= 4){
        const btn = document.querySelector(`[data-index='${e.key}']`);
        if(btn) btn.click();
    }
    if(e.key === "Enter") {
        if (tourModal.style.display === "block") {
            closeModalButton.click();
        } else if (nextButton.style.display === "block") {
            nextButton.click();
        }
    }
});

window.onload = () => {
    tourModal.style.display = "block";
};

closeModalButton.addEventListener("click", () => {
    tourModal.style.display = "none";
});

startQuiz();
