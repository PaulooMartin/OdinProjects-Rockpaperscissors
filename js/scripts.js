let playerScore = 0;
let computerScore = 0;
let rounds = 0;

const pageBody = document.querySelector('body');
const displayPlayerScore = document.querySelector('.player-score');
const displayComputerScore = document.querySelector('.computer-score');
const displayRoundCount = document.querySelector('.round-count');
const resultMessage = document.querySelector ('.computer-message');
const choicesBtn = document.querySelectorAll('.choice');

// Allows each button to play one round of RPS
choicesBtn.forEach(playRound)

// Round-result messages from the perspective of the computer
const tieMessages = ["It's a tie this round :\_)", "Nobody won this round.", "New round please!"];
const compLoseMessages = ["You just got lucky this round","Alright I lost this round.","It's not yet over. New round please!"];
const compWinMessages = [":], Heh!, Ez round win", "Beat that human, let's go new round!","Thanks for the round win :]"]

// Game-result messages from the perspective of the computer
const gameEndlose = ["Congrats player! You won.","I'll get you next time around","Sigh. I get it, you won, congrats :)"];
const gameEndWin = ["Nobody saw that you lost right? :p","Destiny meets reality :))))","I guess that's it this game. Congrats on 2nd place :]"];

function playRound (buttonClicked){
    buttonClicked.addEventListener ('click', () =>{
        let roundChoice = buttonClicked.innerText.toLowerCase();
        game(roundChoice);
    })
}

// Each player will give their choice,
// For the computer: randomly chosen
function getComputerChoice(){
    const randomChoice = Math.floor(Math.random() * 3)
    let computerChoice;
    switch(true){
        case randomChoice === 0:
            computerChoice = "rock";
            break;

        case randomChoice === 1:
            computerChoice = "paper";
            break;

        case randomChoice === 2:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}
// For the user: by asking them. (LEGACY)
function getPlayerChoice(){
// Prompt user
    let userChoice = prompt("Rock, paper, or scissors?");
    if (userChoice === null){
        alert("You did not choose anything!");
        return;
    }

    userChoice = userChoice.toLowerCase();

    // Check validity of choice
    switch (true){
        case userChoice === "rock":
        case userChoice === "paper":
        case userChoice === "scissors":
            return userChoice;

        default:
            alert("You typed it wrong :(");
            return;
    }
}

function updatePlayerScore(){
    resultMessage.innerText = compLoseMessages[Math.floor(Math.random() * 3)]
    playerScore++;
    displayPlayerScore.innerText = playerScore;
    return;
}

function updateComputerScore(){
    resultMessage.innerText = compWinMessages[Math.floor(Math.random() * 3)]
    computerScore++
    displayComputerScore.innerText = computerScore;
    return;
}

function updateRoundCount(){
    rounds++;
    displayRoundCount.innerText = rounds;
}

// After each choice has been taken, compare their choices and determine the winner
function calcRoundResult(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
    resultMessage.innerText = tieMessages[Math.floor(Math.random() * 3)]
    } else{
        switch (true){
            case playerSelection === "rock":
                if (computerSelection === "paper"){
                    updateComputerScore();
                } else {
                    updatePlayerScore();
                }
                break;

            case playerSelection === "scissors":
                if (computerSelection === "rock"){
                    updateComputerScore();
                } else {
                    updatePlayerScore();
                }
                break;

            case playerSelection === "paper":
                if (computerSelection === "scissors"){
                    updateComputerScore();
                } else {
                    updatePlayerScore();
                }
                break;
    }
    }
    updateRoundCount();
    return;
}

function calcChampion(){
    const messageNumber = Math.floor(Math.random() * 3);
    let gameResult = "";
    switch (true){
        case (playerScore > computerScore):
            gameResult = gameEndlose[messageNumber];
            break;

        case (computerScore > playerScore):
            gameResult = gameEndWin[messageNumber];
            break;

        default:
            alert("Something somewhere went wrong. Function: calcChampion");
    }
    return gameResult;
}

function gameEndOverlay(){
    const overlaySection = document.createElement('section');
    const overlayDiv = document.createElement('div');
    const resultMessage = document.createElement ('p');
    const resetButton = document.createElement ('button');

    overlaySection.className = "game-end";
    resultMessage.textContent = calcChampion();
    resetButton.textContent = "Play again!"

    overlayDiv.appendChild(resultMessage);
    overlayDiv.appendChild(resetButton);

    overlaySection.appendChild(overlayDiv);
    pageBody.appendChild(overlaySection);

    resetButton.addEventListener('click', () => {
        resetGame();
        pageBody.removeChild(overlaySection);
    })
    return;
}

function resetGame () {
    displayPlayerScore.textContent = playerScore = 0;
    displayComputerScore.textContent = computerScore = 0;
    displayRoundCount.textContent = rounds = 0;
    resultMessage.textContent = "Alright new game, let's go! :]"
    return;
}

function game(playerChoice){
    let computerSelection = getComputerChoice();
    calcRoundResult(playerChoice, computerSelection);
    if (playerScore === 5 || computerScore == 5){
        gameEndOverlay();
    }
    return;
}