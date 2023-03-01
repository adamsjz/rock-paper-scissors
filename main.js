let userScore = 0;
let computerScore = 0;
let tieScore = 0;
let choices = ['Rock', 'Paper', 'Scissors'];
let winners = [];

function resetGame() {
    //reset game
}

function startGame(){
    //play the game until someone wins 5 times
    playRound();
    setWins();
}

function playRound(round) {
    const computerChoice = getComputerChoice();
    const winner = checkWinner(playerChoice, computerChoice);
}

function getComputerChoice() {
    //todo - update the dom with the computer selection
    return choices[Math.floor(Math.random() * choices.length)];
}

function checkWinner(choice1, computerSelection) {
    if (
        (choice1 == 'rock' && computerSelection == 'scissors') ||
        (choice1 == 'paper' && computerSelection == 'rock') ||
        (choice1 == 'scissors' && computerSelection == 'paper')) {
        userScore ++;
    } else if (choice1 == computerSelection) {
        tieScore ++;
    } else {
        computerScore ++;
    }
}

function setWins() {
    const pWinCount = winners.filter((item) => item =="Player").length;
    const cWinCount = winners.filter((item) => item =="Computer").length;
    const ties = winners.filter((item) => item =="Tie").length;
}

startGame();