let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let dice1 = document.getElementsByClassName("dice").item(0).querySelector("img");
let dice2 = document.getElementsByClassName("dice").item(1).querySelector("img");
dice1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
dice2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player1 win!";
}else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player2 win!";
}else{
    document.querySelector("h1").textContent = "Draw! Refresh me!"
}