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
                } else {
                    roundResult = "You Win! Rock beats Scissors"
                }
                break;

            case playerSelection === "scissors":
                if (computerSelection === "rock"){
                    roundResult = "You Lose! Rock beats Scissors";
                } else {
                    roundResult = "You Win! Scissors beats Paper"
                }
                break;

            case playerSelection === "paper":
                if (computerSelection === "scissors"){
                    roundResult = "You Lose! Scissors beats Paper";
                } else {
                    roundResult = "You Win! Paper beats Rock"
                }
                break;

            default:
                roundResult = "Something somewhere is wrong."
    }
}
    return roundResult;
}