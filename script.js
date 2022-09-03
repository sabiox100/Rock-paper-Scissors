var choices = ['rock', 'paper','scissors'];
let roundCount = 0;
let playerCount = 0;
let computerCount = 0;
let tieCount = 0;
let Winner;
let champion;



function getComputerChoice() {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}


function playRound(playerChoice) {
    var computerChoice = getComputerChoice();

    if (computerChoice === playerChoice) {
        Winner = 'This round was tie';
        tieCount++;
    } else if (computerChoice == 'rock' ) {
        if (playerChoice == 'paper') {
            Winner = 'You won this round!';
            playerCount++;
        } else {
            Winner = 'You lost this round!';
            computerCount++;
        }
    } else if (computerChoice == 'paper') {
        if (playerChoice == 'scissors') {
            Winner = 'You won this round!';
            playerCount ++;
        } else {
            Winner = 'You lost this round!';
            computerCount++;
        }
    } else if (computerChoice == 'scissors') {
        if (playerChoice == 'rock') {
            Winner = 'You won this round!';
            playerCount++;
        } else {
            Winner = 'You lost this round!';
            computerCount++;
        }   
    }
    return Winner;

}


function getChampion() {
    if (computerCount > playerCount) {
        champion = 'Having a bad day? You lost! Maybe next time'

    } else if (playerCount > computerCount) {
        champion = 'Fantastic play! Congratulations! You won! '
    } else { 
        champion = 'Good game, It was a Tie!'
    }
    return champion;
}

function game(playerChoice){
    if (roundCount > 5){
        reset();
    } else if (roundCount < 5) {
        playRound(playerChoice);
        displayScores();
    }  else if (roundCount = 5){
        playRound(playerChoice);
        getChampion();
        document.getElementById('champion').innerHTML = champion;
        displayScores();
        document.getElementById('playAgain').innerHTML = "Press any button to play again";
    } 

}

function reset () {
    document.getElementById('champion').innerHTML = "";
    document.getElementById('playAgain').innerHTML = "";
    playerCount = 0;
    computerCount = 0;
    tieCount = 0;
    roundCount = 0;
    displayScores();
}


const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', () => {
    let playerChoice = 'rock';
    roundCount++;
    game(playerChoice);
    //playRound(playerChoice);
 
});

const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', () => {
    let playerChoice = 'paper';
    roundCount++;
    game(playerChoice);

});

const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', () => {
    let playerChoice = 'scissors';
    roundCount++;
    game(playerChoice);
 
});
function displayScores() {

    console.log("The round count is " + roundCount);
    document.getElementById('winner').innerHTML = Winner;
    document.getElementById('playerScore').innerHTML = "The player Score is: " + playerCount;
    document.getElementById('computerScore').innerHTML = "The computer Score is: " + computerCount;
    document.getElementById('tieScore').innerHTML = "The Tie Score is: " + tieCount;
}
