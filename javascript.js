//function that gets the computer to choose a random "weapon" from an array//
function getComputerChoice () {
    let choiceArray = ["Rock", "Paper", "Scissors"];
    let computerChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    return computerChoice;
}

//function that executes one round of the game//
function playRound (playerSelection,computerSelection) {

// Allows the player to choose their "weapon" via a prompt//
  playerSelection = prompt("Choose your weapon!",);
  let firstChar = playerSelection[0];
  let otherChar = playerSelection.slice(1,);
  firstChar = firstChar.toUpperCase();
  otherChar = otherChar.toLowerCase();
  playerSelection = firstChar + otherChar;
  
  //envokes the ComputerChoice function and compares it with the player choice, returning a string//
  computerSelection  = getComputerChoice();

  console.log(playerSelection);
  console.log(computerSelection);

  //executes if player chooses Rock//
  if (playerSelection === "Rock") {
    switch(computerSelection) {
      case "Rock":
        return "It's a tie!";
        break;

      case "Paper":
        return "Paper covers rock. You lose!"
        break;
        
      case "Scissors":
        return "Rock breaks scissors. You win!"  

    }    
  }

  //executes if player chooses Paper//
  if (playerSelection === "Paper") {
    switch(computerSelection) {
      case "Paper":
        return "It's a tie!";
        break;

      case "Rock":
        return "Paper covers rock. You win!"
        break;
        
      case "Scissors":
        return "Scissors cuts paper. You lose!"  

    }    
  }

  //executes if player chooses Scissors//
  if (playerSelection === "Scissors") {
    switch(computerSelection) {
      case "Scissors":
        return "It's a tie!";
        break;

      case "Rock":
        return "Rock breaks scissors. You lose!"
        break;
        
      case "Paper":
        return "Scissors cuts paper. win!"  

    }    
  }  
    
}