function computerPlay() {
    result = ["Rock", "Paper", "Scissors"];
    index = Math.floor(Math.random() * 3);
    return result[index];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    if (playerSelection === computerSelection) {
        return "Tie!";
    }
    else if (playerSelection === "ROCK") {
        if (computerSelection === "SCISSORS") {
            return "You Win! Rock beats Scissors."
        } else return "You Lose! Paper beats Rock."
    }
    else if (playerSelection === "PAPER") {
        if (computerSelection === "ROCK") {
            return "You Win! Paper beats Rock."
        } else return "You Lose! Scissors beats Paper."
    }
    else if (playerSelection === "SCISSORS") {
        if (computerSelection === "PAPER") {
            return "You Win! Scissors beats Paper."
        } else return "You Lose! Rock beats Scissors."
    }
    
}