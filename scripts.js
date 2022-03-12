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

function game() {
    playerWins = 0;
    computerWins = 0;

    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Rock, Paper, or Scissors?");
        let computerChoice = computerPlay();
        let result = comparePlayer(playerChoice, computerChoice);
        console.log(result);
        
        if (result.includes("win")) {
            playerWins++;
        } else if (result.includes("lose")) {
            computerWins++;
        } else {
            console.log("It's a tie! Let's try again");
            i--;
        }
    }

    if (playerWins > computerWins) {
        console.log(`You won ${playerWins} times and the computer won ${computerWins} times. You are the winner!`);
    } else {
        console.log(`You won ${playerWins} times and the computer won ${computerWins} times. The computer is the winner!`);
    }

}

game();
