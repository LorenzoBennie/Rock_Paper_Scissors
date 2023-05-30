//function that gets the computer to choose a random "weapon" from an array//
function getComputerChoice () {
    let choiceArray = ["Rock", "Paper", "Scissors"];
    let computerChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    return computerChoice;
}

//function that executes one round of the game//
function playRound (playerSelection,computerSelection) {
  
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
        return "Scissors cuts paper. You win!"  

    }    
  }  
    
}

//This function loops the game 5 times and declares a winner//
function game() {
  
  let round = 0;
  let playerScore = 0;
  let computerScore = 0;

  while (round < 5) {
    //envokes the ComputerChoice function// 
    computerWeapon = getComputerChoice();
    // Allows the player to choose their "weapon" via a prompt//
    playerWeapon = prompt("Choose your weapon!",);
    let firstChar = playerWeapon[0];
    let otherChar = playerWeapon.slice(1,);
    firstChar = firstChar.toUpperCase();
    otherChar = otherChar.toLowerCase();
    playerWeapon = firstChar + otherChar;

    //records the outcome of one round and counts the number of rounds played//
    let roundOutcome = playRound(playerWeapon,computerWeapon);
    alert(roundOutcome);
    round = round + 1;

    //Checks for a loss or a win and applies a score for the player or computer//
    if (roundOutcome.includes("win")) {
      playerScore = playerScore + 1;
    }
    else if (roundOutcome.includes("lose")) {
      computerScore = computerScore + 1;
    }
  }
  
  console.log(round);
  console.log(playerScore);
  console.log(computerScore);

  //compares scores and declares a winner//
  if (playerScore > computerScore) {
    alert("Congratulations, you win!");
  }

  else if (playerScore < computerScore) {
    alert("Unlucky, you lose!")
  }
}
