let food =document.querySelector(".food");
let snake=document.querySelector(".snake");
let move=document.querySelector("input");
let h1=document.querySelector("h1");
let mh=0;
let mv=0;
let fh=0;
let fv=0;
let count =-1;
move.addEventListener("keydown",function(event){
    if(mv==fv&&mh==fh){
        fv=Math.floor(Math.random()*19)*30;
        fh=Math.floor(Math.random()*29)*30;
        food.style.marginTop=`${fv}px`;
        food.style.marginLeft=`${fh}px`;
        count++;
        h1.innerText=`SCORE : ${count}`;
    }
    if(event.code=="ArrowUp"&&mv>0){
        mv-=30;
    }
    if(event.code=="ArrowDown"&&mv<560){
        mv+=30;
    }
    if(event.code=="ArrowLeft"&&mh>0){
        mh-=30;
    }
    if(event.code=="ArrowRight"&&mh<860){
        mh+=30;
    }
    snake.style.marginTop=`${mv}px`;
    snake.style.marginLeft=`${mh}px`;
});