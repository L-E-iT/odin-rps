buttons = document.querySelectorAll(".choice");
restartButton = document.querySelector(".restart")
playerScore = document.querySelector(".player-score");
computerScore = document.querySelector(".computer-score");
statusText = document.querySelector(".status-text");
statusRounds = document.querySelector(".status-rounds");
resultWinner = document.querySelector(".result-winner");

let playerWins = 0;
let computerWins = 0;

function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * 3);
    return options[random];
}

function comparePlayer(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
 
    if (playerChoice == computerChoice) {
        return "It's a tie!";
    } else if (playerChoice == "rock") {
        if (computerChoice == "paper") {
            return "You lose! Paper beats Rock";
        } else {
            return "You win! Rock beats Scissors";
        }
    } else if (playerChoice == "scissors") {
        if (computerChoice == "rock") {
            return "You lose! Rock beats Scissors";
        } else {
            return "You win! Scissors beats Paper";
        }
    } else {
        if (computerChoice == "scissors") {
            return "You lose! Scissors beats Paper";
        } else {
            return "You win! Paper beats Rock";
        }   
    }
}

function game(playerChoice) {
    let computerChoice = computerPlay();
    let result = comparePlayer(playerChoice, computerChoice);
    
    if (result.includes("win")) {
        playerWins++;
        playerScore.textContent = playerWins;
        statusText.innerText = "You win this round!";
    } else if (result.includes("lose")) {
        computerWins++;
        computerScore.textContent = computerWins;
        statusText.innerText = "You lost this round!";
    } else {
        statusText.innerText = "It's a tie! Let's try again";
    }

    if (playerWins >= 5) {
        statusText.innerText = "You won the game!";
        resetGame();
    } else if (computerWins >= 5) {
        statusText.innerText = "You lost the game!";
        resetGame();
    }

    statusRounds.textContent = "Rounds Played: " + (playerWins + computerWins);
}

function resetGame() {
    buttons.forEach((button) => {
        button.classList.add("hidden");
        restartButton.classList.remove("hidden");
    })
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        game(button.id);
    });
});

restartButton.addEventListener("click", () => {
    window.location.reload();
});
