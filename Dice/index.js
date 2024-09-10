var randomNumber1 = Math.floor(Math.random()*6);
var randomNumber2 = Math.floor(Math.random()*6);

var img1 = document.querySelector(".img1");

var imgarray = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];

img1.setAttribute('src', imgarray[randomNumber1]);

var img2 = document.querySelector(".img2");

img2.setAttribute('src', imgarray[randomNumber2]);

var h1Winner = document.querySelector("h1")

if(randomNumber1 > randomNumber2)
{
    h1Winner.innerHTML = "Player 1 Wins!"
}
else if(randomNumber1 == randomNumber2)
{
    h1Winner.innerHTML = "Draw!";
}
else
{
    h1Winner.innerHTML = "Player 2 Wins!";
}
