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
            return "You Win! Rock beats Scissors.";
        } else return "You Lose! Paper beats Rock.";
    }
    else if (playerSelection === "PAPER") {
        if (computerSelection === "ROCK") {
            return "You Win! Paper beats Rock.";
        } else return "You Lose! Scissors beats Paper.";
    }
    else if (playerSelection === "SCISSORS") {
        if (computerSelection === "PAPER") {
            return "You Win! Scissors beats Paper.";
        } else return "You Lose! Rock beats Scissors.";
    }
}

function getPlayerInput() {
    let result = "BLANK";
    while (result.toUpperCase() != "ROCK" && result.toUpperCase() != "PAPER" && result.toUpperCase() != "SCISSORS") {
        result = prompt("Please enter either Rock, Paper or Scissors");
    }
    return result;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay()
        let playerSelection = getPlayerInput()
        let result = playRound(playerSelection, computerSelection)
        console.log(result);
        if (result.startsWith("You Win")) { playerScore += 1; }
        if (result.startsWith("You Lose")) { computerScore += 1; }
    }

    if (playerScore > computerScore) {
        console.log("You won the best of 5 rounds of Rock, Paper, Scissors")
    }
    else if (computerScore > playerScore) {
        console.log("The computer won the best of 5 rounds of Rock, Paper, Scissors")
    } else {
        console.log("These 5 rounds of Rock, Paper, Scissors ended in a tie.")
    }
}
game()