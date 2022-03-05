// Variables
let wins = 0;
let draws = 0;
let loses = 0;

// Computer's choice
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function computerPlay() {
    const pickFrom = ["Rock", "Paper", "Scissors"];
    const computerChoice = pickFrom [getRandomInt(3)];
    displayComputerChoice.textContent = `Computer chooses ${computerChoice}!`;
    return computerChoice;
}

// Round results
function playRound (playerSelection) {
    
    const computerSelection = computerPlay();
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        roundResult.textContent = "It's a draw!";
        return 0;
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Paper") {;
        roundResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        return -1;
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Scissors") {
        roundResult.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        return 1;
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Rock") {
        roundResult.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        return 1;
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Scissors") {
        roundResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        return -1;
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Rock") {
        roundResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        return -1;
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Paper") {
        roundResult.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        return 1;
    }    
}

// Updates variables
function calculateScore (playerSelection) {
    switch (playRound(playerSelection)){
        case 1:
            wins++;
            break;
        case 0:
            draws++;
            break;
        case -1:
            loses++;
            break;
    }
}

// Checks if somebody reached 5 points and if so stops the game and displays match winner
function checkResult() {
    if (wins == 5){
        gameResult.textContent = 'Player reaches 5 points. Player wins the match!';
        return true;
    }  else if (loses == 5) {
        gameResult.textContent = 'Computer reaches 5 points. Computer wins the match!';
        return true;
    }
}

// Display elements
const body = document.body;

const header = document.createElement ('div');
header.classList.add('header');
body.append(header);


const resetButton = document.createElement ('button');
resetButton.id = 'resetButton';
resetButton.textContent = 'Restart the game';
resetButton.onclick = () => {
    // Sets variables back to 0 and hides past results
    wins = 0;
    draws = 0;
    loses = 0;
    scoreboard.textContent = `Wins: ${wins} Draws: ${draws} Loses: ${loses}`;
    gameResult.textContent = "";
    roundResult.textContent = "";
    displayComputerChoice.textContent = "";
};
header.append(resetButton);

const scoreboard = document.createElement ('div');
scoreboard.id = 'scoreboard';
scoreboard.textContent = `Wins: ${wins} Draws: ${draws} Loses: ${loses}`;
header.append(scoreboard);

const gameResult = document.createElement ('div');
gameResult.id = 'gameResult';
header.append(gameResult);


const section2 = document.createElement ('div');
section2.classList.add('section2');
body.append(section2);

const displayComputerChoice = document.createElement ('div');
displayComputerChoice.id = 'displayComputerChoice';
section2.append(displayComputerChoice);

const roundResult = document.createElement ('div');
roundResult.id = 'roundResult';
section2.append(roundResult);

// Button functionability
// Checks what the score is, runs the game and updates the scoreboard after.

const footer = document.createElement ('div');
footer.classList.add('footer');
body.append(footer);

const rock = document.createElement ('button');
rock.classList.add('playButton');
footer.append(rock);
rock.textContent = 'Rock';
rock.onclick = () => {
    if (checkResult() != true) {
        calculateScore("Scissors");
        scoreboard.textContent = `Wins: ${wins} Draws: ${draws} Loses: ${loses}`;
    }
};


const paper = document.createElement ('button');
paper.classList.add('playButton');
footer.append(paper);
paper.textContent = 'Paper';
paper.onclick = () =>{
    if (checkResult() != true) {
        calculateScore("Paper");
        scoreboard.textContent = `Wins: ${wins} Draws: ${draws} Loses: ${loses}`;
        checkResult();
    }
};
    
const scissors = document.createElement ('button');
scissors.classList.add('playButton');
footer.append(scissors);
scissors.textContent = 'Scissors';
scissors.onclick = () => {
    if (checkResult() != true) {
        calculateScore("Scissors");
        scoreboard.textContent = `Wins: ${wins} Draws: ${draws} Loses: ${loses}`;
        checkResult();
    }
};
