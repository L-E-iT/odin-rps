let buttons = document.querySelectorAll(".choice");
let restartButton = document.querySelector(".restart")
let playerScore = document.querySelector(".player-score");
let computerScore = document.querySelector(".computer-score");
let statusText = document.querySelector(".status-text");
let statusRounds = document.querySelector(".status-rounds");
let resultWinner = document.querySelector(".result-winner");
let roundResults = document.querySelector(".round-results");

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

    removeAllChildElements(roundResults);
    generateRoundResult(playerChoice, computerChoice, roundResults);
    
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

function removeAllChildElements(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function generateRoundResult(playerChoice, computerChoice, element) {
    let playerImage = document.createElement("img");
    let computerImage = document.createElement("img");
    let playerText = document.createElement("p");
    let computerText = document.createElement("p");
    let playerDiv = document.createElement("div");
    let computerDiv = document.createElement("div");
    let vsText = document.createElement("p");

    playerImage.src = getImage(playerChoice.toLowerCase());
    computerImage.src = getImage(computerChoice.toLowerCase());
    playerText.textContent = "You chose: ";
    computerText.textContent = "Computer chose: ";

    computerDiv.classList.add("col");
    playerDiv.classList.add("col");
    element.classList.add("row");

    element.style.justifyContent = "center";
    element.style.gap = "32px";
    element.style.margin="32px";
    playerImage.style.width = "100px";
    computerImage.style.width = "100px";
    vsText.innerHTML = "VS";

    element.appendChild(playerDiv);
    element.appendChild(vsText);
    element.appendChild(computerDiv);
    playerDiv.appendChild(playerText);
    computerDiv.appendChild(computerText);
    playerDiv.appendChild(playerImage);
    computerDiv.appendChild(computerImage);
}

function getImage(choice) {
    let scissorsImage = "./images/scissors.png";
    let rockImage = "./images/rock.png";
    let paperImage = "./images/paper.png";

    if (choice == "rock") {
        return rockImage;
    } else if (choice == "paper") {
        return paperImage;
    } else {
        return scissorsImage;
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        game(button.id);
    });
});

restartButton.addEventListener("click", () => {
    window.location.reload();
});
