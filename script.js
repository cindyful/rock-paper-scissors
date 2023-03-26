// let playerSelection = prompt("Please choose rock, paper, or scissors.");

let choices = ["Rock","Paper","Scissors"];
let getComputerChoice = choices[Math.floor(Math.random()*choices.length)];

const choiceButton = document.querySelector('.choices');

choiceButton.addEventListener("click", () => {
    console.log("button clicked");
});
