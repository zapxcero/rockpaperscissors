function computerPlayer() {
  return RPS[Math.floor(Math.random() * 3)];
}

function playerPlayer() {
  do {
    let choice = prompt("Rock, Paper, or Scissors?").toLowerCase();

    choice = choice.trim().charAt(0).toUpperCase() + choice.slice(1);
    if (choice === "Rock" || choice === "Scissors" || choice === "Paper") {
      return choice;
    }
    alert("Invalid input! Only accepts Rock, Paper, or Scissors.");
  } while (true);
}

function playRound(playerSelection, computerSelection) {
  let print = `Player: ${playerSelection}\nComputer: ${computerSelection}\nResult:`;
  if (playerSelection === computerSelection) {
    return `${print} Tie!`;
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    computerScore++;
    return `${print} You lose! Paper beats Rock.`;
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    playerScore++;
    return `${print} You win! Rock beats Scissors.`;
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    computerScore++;
    return `${print} You lose! Scissors beats Paper.`;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    playerScore++;
    return `${print} You win! Paper beats Rock.`;
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    computerScore++;
    return `${print} You lose! Rock beats Scissors.`;
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    playerScore++;
    return `${print} You win! Scissors beats Paper.`;
  }
}

function game() {
  console.log(playRound(playerPlayer(), computerPlayer()));
  console.log(playRound(playerPlayer(), computerPlayer()));
  console.log(playRound(playerPlayer(), computerPlayer()));
  console.log(playRound(playerPlayer(), computerPlayer()));
  console.log(playRound(playerPlayer(), computerPlayer()));
}

const RPS = ["Rock", "Paper", "Scissors"];
const rounds = 5;

let playerScore = 0;
let computerScore = 0;

game();
