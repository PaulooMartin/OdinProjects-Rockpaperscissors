let playerScore = 0;
let computerScore = 0;
let rounds = 0;

const displayPlayerScore = document.querySelector('.player-score');
const displayComputerScore = document.querySelector('.computer-score');
const displayRoundCount = document.querySelector('.round-count');
const choicesBtn = document.querySelectorAll('.choice');

// Allows each button to play one round of RPS
choicesBtn.forEach(playRound)


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
    playerScore++;
    displayPlayerScore.innerText = playerScore;
    return;
}

function updateComputerScore(){
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
    let roundResult;
    if (playerSelection === computerSelection){
        roundResult = "This round is tied!"
    } else{
        switch (true){
            case playerSelection === "rock":
                if (computerSelection === "paper"){
                    roundResult = "You Lose! Paper beats Rock";
                    updateComputerScore();
                } else {
                    roundResult = "You Win! Rock beats Scissors"
                    updatePlayerScore();
                }
                break;

            case playerSelection === "scissors":
                if (computerSelection === "rock"){
                    roundResult = "You Lose! Rock beats Scissors";
                    updateComputerScore();
                } else {
                    roundResult = "You Win! Scissors beats Paper";
                    updatePlayerScore();
                }
                break;

            case playerSelection === "paper":
                if (computerSelection === "scissors"){
                    roundResult = "You Lose! Scissors beats Paper";
                    updateComputerScore();
                } else {
                    roundResult = "You Win! Paper beats Rock"
                    updatePlayerScore();
                }
                break;

            default:
                roundResult = "Something somewhere is wrong. Must have been your answer T_T"
    }
    }
    updateRoundCount();
    return roundResult;
}

function calcChampion(){
    switch (true){
        case (playerScore === computerScore):
            console.log("Nobody won the game");
            break;

        case (playerScore > computerScore):
            console.log("%cYou won! Beat that, piece of machine!", "color: green; font-weight: bold;");
            break;

        case (computerScore > playerScore):
            console.log("%cYou lost. Nobody saw that right?", "color: red; font-weight: bold;");
            break;

        default:
            alert("Something somewhere went wrong. Function: calcChampion");
    }
    playerScore = 0;
    computerScore = 0;
    return;
}

function game(playerChoice){
    let computerSelection = getComputerChoice();
    let finalResult  = calcRoundResult(playerChoice, computerSelection);
    console.log(finalResult);
    console.log ("%c-----Game End-----", "color: darkblue; font-weight: bolder");
    return;
}

// Update roundcount
// Show computer choice