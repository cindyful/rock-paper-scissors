let choices = ["rock", "paper", "scissors"];

function getComputerChoice(choices) {
    return choices[Math.floor(Math.random()*choices.length)];
};

let computerSelection = getComputerChoice(choices);





/*
const choiceButton = document.querySelector('.choices');

//let playerSelection = document.querySelector(".choices").value;
let playerSelection = "rock";
const computerSelection = getComputerChoice();

choiceButton.addEventListener("click", playRound);

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors.";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock.";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats paper.";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats paper.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors.";
    }
}

playRound();

*/
    

