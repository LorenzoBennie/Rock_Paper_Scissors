//function that gets the computer to choose a random "weapon" from an array//
function getComputerChoice () {
    let choiceArray = ["Rock", "Paper", "Scissors"];
    let computerChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    return computerChoice;
}

