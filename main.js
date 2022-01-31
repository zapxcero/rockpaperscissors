function playComputer() {
  return RPS[Math.floor(Math.random() * 3)];
}

function addTextNode(text) {
  const p = document.createElement("p");
  p.textContent = text;
  const result = document.getElementById("#result");
  result.appendChild(p);
}

function cleanResult() {
  const result = document.getElementById("#result");
  result.textContent = "";
}

function score() {
  scoreClean();
  const p = document.createElement("p");
  p.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
  const score = document.getElementById("#score");
  score.appendChild(p);
}

function scoreClean() {
  const score = document.getElementById("#score");
  score.textContent = "";
}

function winner() {
  winnerClean();
  let p = document.createElement("p");
  if (playerScore > computerScore) {
    p.textContent = `PLAYER WINS!`;
  } else if (computerScore > playerScore) {
    p.textContent = "COMPUTER WINS!";
  } else {
    p.textContent = `IT'S A TIE! WTF!`;
  }
  document.getElementById("#winner").appendChild(p);
}

function winnerClean() {
  const winner = document.getElementById("#winner");
  winner.textContent = "";
}

function playRound(playerPlay) {
  let player = RPS[playerPlay];
  let computer = playComputer();

  if (games > 1) {
    cleanResult();

    score();

    addTextNode(`Player: ${player}`);
    addTextNode(`Computer: ${computer}`);
    games--;
    if (player === computer) {
      addTextNode("Result: Tie!");
    } else if (player === "Rock" && computer === "Paper") {
      addTextNode("Result: Paper beats Rock! Computer Wins!");
      computerScore++;
    } else if (player === "Rock" && computer === "Scissors") {
      addTextNode("Result: Rock beats Scissors! Player Wins!");
      playerScore++;
    } else if (player === "Paper" && computer === "Rock") {
      addTextNode("Result: Paper beats Rock! Player Wins!");
      playerScore++;
    } else if (player === "Paper" && computer === "Scissors") {
      addTextNode("Result: Scissors beats Paper! Computer Wins!");
      computerScore++;
    } else if (player === "Scissors" && computer === "Rock") {
      addTextNode("Result: Rock beats Scissors! Computer Wins!");
      computerScore++;
    } else if (player === "Scissors" && computer === "Paper") {
      addTextNode("Result: Scissors beats Paper! Player Wins!");
      playerScore++;
    }
  } else {
    winner();
  }
  score();
}
RPS = ["Rock", "Paper", "Scissors"];
let computerScore = 0;
let playerScore = 0;
let games = 5;
const buttons = document.querySelectorAll("button");

buttons.forEach((button) =>
  button.addEventListener("click", function (e) {
    const rps = this.dataset.key;
    playRound(rps);
  })
);
