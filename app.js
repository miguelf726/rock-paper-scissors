let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
  let computerChoice = Math.random() * 3;
  console.log(computerChoice)
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
  } else {
    return "It is a tie!";
  }
}

function playRound(player, computer) {
  player = player.toLowerCase();
  playerCapitalize = player.slice(0, 1).toUpperCase();
  player = playerCapitalize + player.slice(1);

  if (player === computer) {
    return "It is a tie!";
  } else if (player == "Rock" && computer == "Paper") {
    computerWins += 1;
    return "You lose! Paper beats Rock";
  } else if (player == "Paper" && computer == "Scissors") {
    computerWins += 1;
    return "You lose! Scissors beats Paper";
  } else if (player == "Scissors" && computer == "Rock") {
    computerWins += 1;
    return "You lose! Rock beats Scissors";
  } else if (player == "Rock" && computer == "Scissors") {
    playerWins += 1;
    return "You win! Rock beats Scissors";
  } else if (player == "Paper" && computer == "Rock") {
    playerWins += 1;
    return "You win! Paper beats Rock";
  } else if (player == "Scissors" && computer == "Paper") {
    playerWins += 1;
    return "You win! Scissors beats Paper";
  }
}

function playGame() {
  playerSelection = prompt("Choose Rock, Paper, or Scissors", "");
  computerSelection = getComputerChoice();
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
