let score = 0;
function increaseScore(){
    score += 10;
    document.querySelector('#scoreVal').textContent= score;
} 



function makeBubble(){
    let clutter = "";

    for(let i = 1; i <= 105; i++){
        let rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector("#pbtm").innerHTML = clutter;
}

let timer = 60;
function runTimer(){
    let inter = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector('#timerVal').textContent = timer;
        }
        else{
            clearInterval(inter);
            document.querySelector("#pbtm").innerHTML = `<button onclick="window.location.reload();">Start Again</button>` ;
        }
    }, 1000);
}

let rdn = 0;
function getNewHit(){
    rdn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = rdn;
}

document.querySelector("#pbtm").addEventListener("click", (det)=>{
    // alert("chal raha hai..");
    let clickedNum = Number(det.target.textContent);
    if(clickedNum === rdn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

runTimer();
makeBubble();
getNewHit();
increaseScore();