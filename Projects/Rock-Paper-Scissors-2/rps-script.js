let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};
updatescore();

//     if(!score){
//     score={
//         wins:'0',
//         losses:0,
//         ties:0
//     };
//  }
// let computervar ='';
function stop(){
    
    const name = document.querySelector('.js-ap');
   if(name.innerHTML === 'Auto Play'){
        name.innerHTML = 'Stop';
    }else{
        name.innerHTML = 'Auto Play';
    }
}
let interval ;
let playing= false;
function autoplay(){
    if(!playing){
        interval =setInterval( function(){
            const choice =compcall();
            playerchoice(choice);
           }, 1000); 
           playing= true; 
    }else{
        clearInterval(interval);
        playing= false;
    }
 }


 document.body.addEventListener('keydown', (event)=>{
    if(event.key =='r'){
        playerchoice('rock');
    }else if(event.key =='p'){
        playerchoice('paper');
    }else if(event.key =='s'){
        playerchoice('scissor');
    }
 });
function compcall() {
    let computervar = '';
    const randomvar = Math.random();
    if (randomvar >= 0 && randomvar < 1 / 3) {
        computervar = 'rock';
    } else if (randomvar >= 1 / 3 && randomvar < 2 / 3) {
        computervar = 'paper';
    } else if (randomvar >= 2 / 3 && randomvar <= 1) {
        computervar = 'scissor';
    }
    return computervar;
}
//updatescore();
// document.querySelector('.js-write').innerHTML= ` Wins=${score.wins}. losses= ${score.losses}. Ties=${score.ties}`;

function updatescore(){
    document.querySelector('.js-score-write')
    .innerHTML= ` Wins=${score.wins}. losses= ${score.losses}. Ties=${score.ties}`;
   } 

function playerchoice(choice) {
    const computervar = compcall();
    let result = '';

    if (choice === 'scissor') {

        if (computervar === 'rock') {
            result = 'You lose';
        } else if (computervar === 'paper') {
            result = 'You Win';
        } else if (computervar === 'scissor') {
            result = 'Tie';
        }

    } else if (choice === 'paper') {
        if (computervar === 'rock') {
            result = 'You Win';
        } else if (computervar === 'paper') {
            result = 'Tie';
        } else if (computervar === 'scissor') {
            result = 'You lose';
        }

    } else if (choice === 'rock') {
        if (computervar === 'rock') {
            result = 'Tie';
        } else if (computervar === 'paper') {
            result = 'You lose';
        } else if (computervar === 'scissor') {
            result = 'You Win';
        }

    }


    //console.log(score)
    if (result === 'You Win') {
        score.wins++;
    } else if (result === 'You lose') {
        score.losses++;
    } else if (result === 'Tie') {
        score.ties++;
    }
    //alert(`You choose ${choice}. Computer chose ${computervar}. ${result}. Wins=${score.wins}. losses= ${score.losses}. Ties=${score.ties}`);
    localStorage.setItem('score', JSON.stringify(score));
    
    updatescore();
    document.querySelector('.js-write ').innerHTML= `${result}. ` ;
   // document.querySelector('.js-you-write').innerHTML= `You choose ${choice}. ` ;
    //document.querySelector('.js-comp-write').innerHTML= `Computer chose ${computervar}.` ;
    document.querySelector('.js-move-write ').innerHTML=
     `  You
    <img class="move-icon" src="rock-paper-scissor-photos/${choice}-emoji.png">
    <img class="move-icon" src="rock-paper-scissor-photos/${computervar}-emoji.png">
    Computer` ;
    //updatescore();
   
   
   
   
}

