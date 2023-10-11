let userScore=0;
let compScore= 0;
const userScore_span=document.getElementById("user_score");
const compScore_span=document.getElementById("comp_score");
const scoreBoard_div=document.querySelector(".score_board");
const result_p=document.querySelector(".result>p");
const rock_div=document.getElementById("rock")
const paper_div=document.getElementById("paper")
const scissors_div=document.getElementById("scissors")

function getComputerChoice(){
    const choices=['rock', 'paper', 'scissors'];
    const randomNumber=(Math.floor(Math.random()* 3));
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter =="rock") return "Rock";
    if(letter =="paper") return "Paper";
    return "Scissors";
}

//here we are making a function where the user wins
function win(userChoice, compChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(compChoice)}. You WIN! :)`;

}

//here we are making a fuction where the user loses
function lose(userChoice,compChoice){
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(compChoice)}. You LOST! :(`;
    
}

//here we are making a function where the user and the computer ties
function tie(userChoice,compChoice){
    result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(compChoice)}. It's a DRAW!`;
    
}

function game(userChoice){
    const compChoice= getComputerChoice();

    //here we are putting the winning conditions
    switch(userChoice + compChoice){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, compChoice);
            break;
            
    //here we are putting the losing conditions
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, compChoice);
            break;

    //here we are putting the conditions for a draw
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            tie(userChoice, compChoice);
            break;
    }

}




function main(){


    rock_div.addEventListener('click', function(){
        game("rock");
    })
    paper_div.addEventListener('click', function(){
        game("paper");
    })
    scissors_div.addEventListener('click', function(){
        game("scissors");
    })

}

main();