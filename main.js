// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

// nction playRound(playerSelection, computerSelection) {
//     // your code here!
//   }

//   const playerSelection = "rock";
//   const computerSelection = computerPlay();
//   return (playRound(playerSelection, computerSelection));

//   Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
// You have not officially learned how to “loop” over code to repeat function calls… if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
// At this point you should be using return () to display the results of each round and the winner at the end.
// Use prompt() to get input from the user. Read the docs here if you need to.
// Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
// Feel free to create more “helper” functions if you think it would be useful.
const RPS = ["Rock", "Paper", "Scissors"];

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
    return `${print} You lose! Paper beats Rock.`;
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return `${print} You win! Rock beats Scissors.`;
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return `${print} You lose! Scissors beats Paper.`;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return `${print} You win! Paper beats Rock.`;
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return `${print} You lose! Rock beats Scissors.`;
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return `${print} You win! Scissors beats Paper.`;
  }
}

const computerSelection = computerPlayer();
const playerSelection = playerPlayer();

console.log(playRound(playerSelection, computerSelection));

function game() {
  //code to play 5 round game. returns score and winner and loser.
}
