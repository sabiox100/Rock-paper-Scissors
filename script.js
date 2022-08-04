var choices = ['rock', 'paper','scissors'];
let playerCount = 0;
let computerCount = 0;
let tieCount = 0;
let Winner;
let champion;


function getComputerChoice() {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}
function getPlayerChoice() {
    playerChoice = prompt("rock, paper or scissors?");
    return playerChoice;
}


function playRound() {
    var computerChoice = getComputerChoice();
    var playerChoice = getPlayerChoice();

    if (computerChoice === playerChoice) {
        Winner = 'This round was tie';
        tieCount++;
    } else if (computerChoice == 'rock' ) {
        if (playerChoice == 'paper') {
            Winner = 'You won this round!';
            playerCount++
        } else {
            Winner = 'You lost this round!';
            computerCount++
        }
    } else if (computerChoice == 'paper') {
        if (playerChoice == 'scissors') {
            Winner = 'You won this round!';
            playerCount ++
        } else {
            Winner = 'You lost this round!';
            computerCount++
        }
    } else if (computerChoice == 'scissors') {
        if (playerChoice == 'rock') {
            Winner = 'You won this round!';
            playerCount++
        } else {
            Winner = 'You lost this round!';
            computerCount++
        }   
    }
    return Winner;

}
function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
        alert( Winner + " play another round")
    }
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

game();
alert(getChampion());


console.log("The computer count is " + computerCount);
console.log("The player count is " + playerCount);
console.log("the tie count is " + tieCount);
console.log("The champion is " + champion);
/*

function game(computerChoice,playerChoice){
    for (let i = 0; i < 5; i++) {
        playRound(computerChoice,playerChoice);
        return Winner;
    }    
    var champion = Math.max(playerCount, computerCount, tieCount);
    return champion;   
    
}
var computerChoice = getComputerChoice();
var playerChoice = prompt("rock, paper or scissors?");

console.log("Computer choice is " + computerChoice);
console.log("Player choice is " + playerChoice);

console.log(game(computerChoice,playerChoice));

*/