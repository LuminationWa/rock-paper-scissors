// Variables
let wins = 0;
let draws = 0;
let loses = 0;
let score = 0;

// Computer's choice
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function computerPlay() {
    const pickFrom = ["Rock", "Paper", "Scissors"];
    const computerChoice = pickFrom [getRandomInt(3)];
    displayComputerChoice.setAttribute('style', 'border: 1px solid black; background: pink');
    displayComputerChoice.textContent = `Computer chooses ${computerChoice}!`;
    return computerChoice;
}

// Round results
function playRound (playerSelection) {
    roundResult.setAttribute('style', 'border: 1px solid black; background: pink');

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
            score++;
            break;
        case 0:
            draws++;
            break;
        case -1:
            loses++;
            score--;
            break;

    }
}

// Checks if somebody reached 5 points and if so stops the game and displays match winner
function checkResult() {
    switch (score) {
        case 5:
            gameResult.setAttribute('style', 'border: 1px solid black; background: pink');
            gameResult.textContent = 'Player reaches 5 points. Player wins'
            return true;
        case -5:
            gameResult.setAttribute('style', 'border: 1px solid black; background: pink');
            gameResult.textContent = 'Computer reaches 5 points. Computer wins'
            return true;
    }
}

// Display elements
const body = document.body;

const resetButton = document.createElement ('button');
resetButton.textContent = 'Restart the game';
resetButton.onclick = () => {
    wins = 0;
    draws = 0;
    loses = 0;
    score = 0;
    // Makes all display elements invisible except for the scoreboard
    let list = document.getElementsByTagName('div');
    list.textContent = "";
    for (let i = 0; i < list.length; i++) {
        list[i].textContent = "";
        list[i].setAttribute('style', 'border: 0px;');

    }
    scoreboard.textContent = `Total wins: ${wins} Total loses: ${loses} Total draws: ${draws} Total score ${score}`;
    scoreboard.setAttribute('style', 'border: 1px solid black; background: pink');
};
body.append(resetButton);

const scoreboard = document.createElement ('div');
scoreboard.textContent = `Total wins: ${wins} Total loses: ${loses} Total draws: ${draws} Total score ${score}`;
scoreboard.setAttribute('style', 'border: 1px solid black; background: pink');
body.append(scoreboard);

const displayComputerChoice = document.createElement ('div');
body.append(displayComputerChoice);

const roundResult = document.createElement ('div');
body.append(roundResult);

const gameResult = document.createElement ('div');
body.append(gameResult);

// Button functionability
// Checks what the score is, runs the game and updates the scoreboard after.
const rock = document.createElement ('button');
body.append(rock);
rock.textContent = 'Rock';
rock.onclick = () => {
    if (checkResult() != true) {
        calculateScore("Scissors");
        scoreboard.textContent = `Total wins: ${wins} Total loses: ${loses} Total draws: ${draws} Total score ${score}`;
    }
};

const paper = document.createElement ('button');
body.append(paper);
paper.textContent = 'Paper';
paper.onclick = () =>{
    if (checkResult() != true) {
        calculateScore("Paper");
        scoreboard.textContent = `Total wins: ${wins} Total loses: ${loses} Total draws: ${draws} Total score ${score}`;
    }
};
    
const scissors = document.createElement ('button');
body.append(scissors);
scissors.textContent = 'Scissors';
scissors.onclick = () => {
    if (checkResult() != true) {
        calculateScore("Scissors");
        scoreboard.textContent = `Total wins: ${wins} Total loses: ${loses} Total draws: ${draws} Total score ${score}`;
    }
};
