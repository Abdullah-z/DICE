var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1= "dice" + randomNumber1 + ".png";
var randomDiceImage2= "dice" + randomNumber2 + ".png";

var randomImageSource1 = "img/" + randomDiceImage1;
var randomImageSource2 = "img/" + randomDiceImage2;

var diceImage1= document.querySelectorAll("img")[0];
var diceImage2= document.querySelectorAll("img")[1];

diceImage1.setAttribute("src", randomImageSource1);
diceImage2.setAttribute("src", randomImageSource2);
