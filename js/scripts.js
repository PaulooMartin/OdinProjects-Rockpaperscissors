// Each player will give their choice,
//    For the computer: randomly chosen
function getComputerChoice(){
    const randomChoice = Math.floor(Math.random() * 3)
    let computerChoice;
    switch(true){
        case randomChoice === 0:
            computerChoice = "Rock";
            break;

        case randomChoice === 1:
            computerChoice = "Paper";
            break;

        case randomChoice === 2:
            computerChoice = "Scissors";
            break;
    }
    return computerChoice;
}
//    For the user: by asking them.
function getPlayerChoice(){
// Prompt user
    let userChoice = prompt("Rock, paper, or scissors?");
    userChoice = userChoice.toLowerCase();
// Check validity of choice
    switch (true){
        case userChoice === "rock":
        case userChoice === "paper":
        case userChoice === "scissors":
            return userChoice;

        default:
            alert("You did not choose anything!");
            return;
    }
}