const dice = document.getElementById('dice-btn');

function diceGame(){
//dice 1 
let randomDice = Math.floor((Math.random()*6)+1);
let diceLocation = "./assetts/img/" + "number" + randomDice+ ".png";
let img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",diceLocation);

let randomDice2 = Math.floor((Math.random()*6)+1);
let diceLocation2 = "./assetts/img/" + "number" + randomDice2+ ".png";
let img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",diceLocation2);


}