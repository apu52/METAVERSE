var randomnumber1=Math.floor(Math.random()*6+1);
var randomnumber2=Math.floor(Math.random()*6+1);

var images1= "images/dice" + randomnumber1 + ".png";
var images2= "images/dice" + randomnumber2 + ".png";

document.querySelector(".dice .img1").setAttribute("src",images1);
document.querySelector(".dice  .img2").setAttribute("src",images2);
if (randomnumber1 === randomnumber2) {
    document.querySelector("h1").innerHTML = "Draw, Roll Dice Again"
} 

else if (randomnumber1 < randomnumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins"
} 

else {
    document.querySelector("h1").innerHTML = "Player 1 wins"
}