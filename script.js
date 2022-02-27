
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices [getRandomInt(3)];
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return 0;
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Paper") {
        return -1;
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Scissors") {
        return 1;
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Rock") {
        return 1;
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Scissors") {
        return -1;
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Rock") {
        return -1;
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Paper") {
        return 1;
    }    
}

function game() {
    let wins = 0;
    let draws = 0;
    let loses = 0;
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        let playerSelection = window.prompt('Rock paper or scissors?');
        if (playRound(playerSelection, computerSelection) === 1) {
            wins++
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        } else if (playRound(playerSelection, computerSelection) === -1) {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            loses++
        } else {
            console.log(`It's a draw!`);
            draws++
        }       
        
     }
    const result = wins - loses; 
    console.log(`Total wins: ${wins} Total loses: ${loses} Total draws: ${draws}`);
    if (result > 0) {
        console.log("You win the match!");
    } else if (result < 0) {
        console.log("You lose the match");
    } else {
        console.log("The match is a draw!");
    }

}
