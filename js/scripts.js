const gameRounds = 5;
let playerScore = 0;
let computerScore = 0;

game(gameRounds);

// Each player will give their choice,
//    For the computer: randomly chosen
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
//    For the user: by asking them.
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

// After each choice has been taken, compare their choices and determine the winner
function gameOn(playerSelection, computerSelection){
    let roundResult;
    if (playerSelection === computerSelection){
        roundResult = "This round is tied!"
    } else{
        switch (true){
            case playerSelection === "rock":
                if (computerSelection === "paper"){
                    roundResult = "You Lose! Paper beats Rock";
                    computerScore++
                } else {
                    roundResult = "You Win! Rock beats Scissors"
                    playerScore++
                }
                break;

            case playerSelection === "scissors":
                if (computerSelection === "rock"){
                    roundResult = "You Lose! Rock beats Scissors";
                    computerScore++
                } else {
                    roundResult = "You Win! Scissors beats Paper";
                    playerScore++
                }
                break;

            case playerSelection === "paper":
                if (computerSelection === "scissors"){
                    roundResult = "You Lose! Scissors beats Paper";
                    computerScore++
                } else {
                    roundResult = "You Win! Paper beats Rock"
                    playerScore++
                }
                break;

            default:
                roundResult = "Something somewhere is wrong. Must have been your answer T_T"
    }
}
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

// The game will have x number of rounds.
function game(roundCount){
    for (i = 1; i <= roundCount; i++){
        console.log (`%cRound ${i}`, "color: darkblue; font-weight: bold;");
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();
        let finalResult  = gameOn(playerSelection, computerSelection);
        console.log(finalResult);
    }
    calcChampion();
    console.log ("%c-----Game End-----", "color: darkblue; font-weight: bolder");
    return;
}