function getComputerChoice() {
  let computerChoice = Math.random() * 3;
  console.log(computerChoice);
  if (computerChoice <= 1) {
    computerChoice = "Rock";
  } else if (computerChoice > 1 && computerChoice <= 2) {
    computerChoice = "Paper";
  } else if (computerChoice > 2) {
    computerChoice = "Scissors";
  }
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  playerSelectionCapitalize = playerSelection.slice(0, 1).toUpperCase();
  playerSelection = playerSelectionCapitalize + playerSelection.slice(1);

  let result;
  if (playerSelection === computerSelection) {
    result = "It is a tie!";
  } else if (playerSelection == "Rock" && computerSelection == "Paper") {
    result = "You lose! Paper beats Rock";
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    result = "You lose! Scissors beats Paper";
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    result = "You lose! Rock beats Scissors";
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    result = "You win! Rock beats Scissors";
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    result = "You win! Paper beats Rock";
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    result = "You win! Scissors beats Paper";
  }
  return result;
}
const computerSelection = getComputerChoice();
const playerSelection = "rock";

console.log(playRound(playerSelection, computerSelection));
