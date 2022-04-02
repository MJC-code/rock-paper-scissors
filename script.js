
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

const rockBtn = document.querySelector('#rock')
rockBtn.addEventListener('click', () => {
    let result = playRound('Rock', computerPlay())
    console.log(result);
    keepScore(result);
    result = '';
});

const paperBtn = document.querySelector('#paper')
paperBtn.addEventListener('click', () => {
    let result = playRound('Paper', computerPlay())
    console.log(result);
    keepScore(result);
    result = '';
});

const scissorsBtn = document.querySelector('#scissors')
scissorsBtn.addEventListener('click', () => {
    let result = playRound('Scissors', computerPlay())
    console.log(result);
    keepScore(result);
    result = '';
});




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

function keepScore(result) {
    if (result.startsWith("You Win")) { playerScore += 1; }
    if (result.startsWith("You Lose")) { computerScore += 1; }
    roundsPlayed += 1;
    if (roundsPlayed === 5) {
        endGame()
    }
}


function endGame() {
    if (playerScore > computerScore) {
        console.log("You won the best of 5 rounds of Rock, Paper, Scissors")
    }
    else if (computerScore > playerScore) {
        console.log("The computer won the best of 5 rounds of Rock, Paper, Scissors")
    } else {
        console.log("These 5 rounds of Rock, Paper, Scissors ended in a tie.")

    }

    location.reload()
}


