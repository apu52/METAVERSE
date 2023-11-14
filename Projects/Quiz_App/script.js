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
        question: "What is the most poplate density country in the world?",
        answers:[
            {text: "Singapur", correct:false},
            {text: "Monaco", correct: true},
            {text: "Baharin", correct: false},
            {text: "Zibratal", correct: false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

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
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",SelecAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function SelecAnswer(e){
    const selectedBin = e.target;
    const isCorrect = selectedBin.dataset.correct === 'true';
    if(isCorrect){
        selectedBin.classList.add("correct");
        score++;
    }
    else{
        selectedBin.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
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
    currentQuestionIndex++ ;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

startQuiz();


