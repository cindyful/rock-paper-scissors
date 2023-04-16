let choices = ["rock", "paper", "scissors"];
let playerSelection;
let computerSelection = getComputerChoice();
const resultDisplay = document.getElementById('result');

const choiceButton = document.querySelectorAll('button');

choiceButton.forEach(choiceButton => choiceButton.addEventListener("click", (e) => {
    playerSelection = e.target.value
    getComputerChoice()
    resultDisplay.textContent = playRound(playerSelection, computerSelection);
}));

function getComputerChoice() {
    let random = choices[Math.floor(Math.random()*choices.length)];
    return random;
};


function playRound() {

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

playRound(playerSelection, computerSelection);
playRound(playerSelection, computerSelection);
playRound(playerSelection, computerSelection);









/*

let playerSelection = document.querySelector(.)
const choiceButton = document.querySelector('.choices');

//let playerSelection = document.querySelector(".choices").value;

choiceButton.addEventListener("click", playRound);

function chooseRock() {
    return playerSelection = "rock";
}

function choosePaper() {
    return playerSelection = "paper";
}

function chooseScissors() {
    return playerSelection = "scissors";
}

function getComputerChoice(choices) {
    return choices[Math.floor(Math.random()*choices.length)];
};

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


