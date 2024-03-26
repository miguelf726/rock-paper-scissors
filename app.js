let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
  let computerChoice = Math.random() * 3;
  if (computerChoice <= 1) {
    computerChoice = "Rock";
  } else if (computerChoice > 1 && computerChoice <= 2) {
    computerChoice = "Paper";
  } else if (computerChoice > 2) {
    computerChoice = "Scissors";
  }
  return computerChoice;
}

function getGameResult() {
  if (playerWins > computerWins) {
    return "You Win!";
  } else if (playerWins < computerWins) {
    return "You Lose!";
  }else{
     return "It is a tie!"
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  playerSelectionCapitalize = playerSelection.slice(0, 1).toUpperCase();
  playerSelection = playerSelectionCapitalize + playerSelection.slice(1);

  if (playerSelection === computerSelection) {
    return "It is a tie!";
  } else if (playerSelection == "Rock" && computerSelection == "Paper") {
    computerWins += 1;
    return "You lose! Paper beats Rock";
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    computerWins += 1;
    return "You lose! Scissors beats Paper";
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    computerWins += 1;
    return "You lose! Rock beats Scissors";
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    playerWins += 1;
    return "You win! Rock beats Scissors";
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    playerWins += 1;
    return "You win! Paper beats Rock";
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    playerWins += 1;
    return "You win! Scissors beats Paper";
  }
}

const computerSelection = getComputerChoice();
console.log(computerSelection);
const playerSelection = prompt("Choose Rock, Paper, or Scissors", "");
console.log(playRound(playerSelection, computerSelection));

function playGame() {
  let roundResults = "";

  roundResults = playRound(playerSelection, computerSelection);
  return roundResults;
}

console.log(playGame());
console.log(playGame());
console.log(playGame());
console.log(playGame());
console.log(playGame());

console.log(getGameResult());
