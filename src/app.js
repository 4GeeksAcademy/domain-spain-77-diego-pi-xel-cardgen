import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let randomNumber = generateRandomNumber();
  let randomSuit = generateRandomSuit();
  let topSuit = document.querySelector(".top-suit");
  let number = document.querySelector(".number");
  let bottomSuit = document.querySelector(".bottom-suit");

  topSuit.innerHTML = randomSuit;
  number.innerHTML = randomNumber;
  bottomSuit.innerHTML = randomSuit;

  if (randomSuit === "&hearts;" || randomSuit === "&diams;") {
    topSuit.style.color = "red";
    bottomSuit.style.color = "red";
  } else {
    topSuit.style.color = "black";
    bottomSuit.style.color = "black";
  }
};

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let generateRandomSuit = () => {
  let suits = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  let indexSuit = Math.floor(Math.random() * suits.length);
  return suits[indexSuit];
};
