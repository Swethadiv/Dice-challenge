var rNum1 = Math.floor(Math.random() * 6) + 1;

document.querySelectorAll("img")[0].src = "images/dice" + rNum1 + ".png";

var rNum2 = Math.floor(Math.random() * 6) + 1;

document.querySelectorAll("img")[1].src = "images/dice" + rNum2 + ".png";

if(rNum1 > rNum2){

    document.querySelector("h1").innerHTML = "Player 1 wins"

} else if(rNum2 > rNum1){

  document.querySelector("h1").innerHTML = "Player 2 wins"

}
else{

document.querySelector("h1").innerHTML = "Draw!"

}
