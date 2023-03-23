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
    console.log(computerChoice);
    return computerChoice;
}
//    For the user: by asking them.