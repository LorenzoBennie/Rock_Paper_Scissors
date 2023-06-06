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

//This function loops the game until a player reaches 5 and declares a winner//
let round = 0;
let playerScore = 0;
let computerScore = 0;

const playerScoreCounter = document.querySelector(".player_score");
const computerScoreCounter = document.querySelector(".comp_score");

//This function adds 1 point to each players score depending on the outcome
function game () {
  if (outcome.includes("win")) {
    playerScore += 1;
  }
  
  else if (outcome.includes("lose")) {
    computerScore += 1;
  }
}

//This function checks for a winner
function endGame() {
  if (computerScore == 5 || playerScore == 5) {
    if (playerScore > computerScore) {
      result.textContent = "Congratulations, you win!";
      playerScore = 0;
      computerScore = 0;
    }
    else if (playerScore < computerScore) {
      result.textContent = "Unlucky, you lose!";
      playerScore = 0;
      computerScore = 0;
    }
  }
}  

//Adds an event listener to the buttons and invokes the above functions//
const btns = document.querySelectorAll('button');
const result = document.querySelector(".outcome");
const playerChoice = document.querySelector(".player");
const compChoice = document.querySelector(".comp");
let computerWeapon = "";
let outcome = "";

btns.forEach((button) => {
  button.addEventListener('click', () => {
    computerWeapon = getComputerChoice();
    outcome = playRound(button.classList.value,computerWeapon);
    result.textContent = outcome;
    playerChoice.textContent = "Your choice: " + button.classList.value;
    compChoice.textContent = "Computer choice: " + computerWeapon;
    game();
    playerScoreCounter.textContent = "Player score: " + playerScore;
    computerScoreCounter.textContent = "Computer score: " + computerScore;
    endGame ();
  });
})
