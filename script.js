// Global variables
let score = 0;
let timer;

// DOM elements
const target = document.getElementById("target");
const scoreBoard = document.getElementById("scoreBoard");
const scoreSpan = document.getElementById("score");
const timerSpan = document.getElementById("timer");
const startButton = document.getElementById("startButton");
const playAgainButton = document.getElementById("playAgainButton");
const highScoresTable = document.getElementById("highScoreList");
const highScoresDiv = document.getElementById("highScores");

// Event listeners
target.addEventListener("click", increaseScore);
startButton.addEventListener("click", startGame);
playAgainButton.addEventListener("click", playAgain);

// Start game function
function startGame() {
  score = 0;
  scoreSpan.innerText = score;
  startButton.style.display = "none";
  playAgainButton.style.display = "none";
  target.style.display = "block";
  scoreBoard.style.display = "block";
  highScoresDiv.style.display = "none";
  startTimer(30);
}

// Increase score function
function increaseScore() {
  score++;
  scoreSpan.innerText = score;
  moveTarget();
}

// Move target function
function moveTarget() {
  const restrictedArea = document.getElementById("restrictedArea");
  const maxWidth = restrictedArea.offsetWidth - target.offsetWidth;
  const maxHeight = restrictedArea.offsetHeight - target.offsetHeight;
  const newLeft = Math.floor(Math.random() * maxWidth);
  const newTop = Math.floor(Math.random() * maxHeight);
  target.style.left = `${newLeft}px`;
  target.style.top = `${newTop}px`;
}

// Start timer function
function startTimer(seconds) {
  timerSpan.innerText = seconds;
  timer = setInterval(() => {
    seconds--;
    timerSpan.innerText = seconds;
    if (seconds === 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}

// End game function
function endGame() {
  target.style.display = "none";
  startButton.style.display = "none";
  scoreBoard.style.display = "none";
  playAgainButton.style.display = "block";
  highScoresDiv.style.display = "block";
  saveScore();
  displayScores();
}

// Play again function
function playAgain() {
  startButton.style.display = "block";
  playAgainButton.style.display = "none";
  highScoresDiv.style.display = "none";
}

// Save score function
function saveScore() {
  const name = prompt("Enter your name:");
  const scores = JSON.parse(localStorage.getItem("highScores")) || [];
  scores.push({ name, score });
  localStorage.setItem("highScores", JSON.stringify(scores));
}

// Display scores function
function displayScores() {
  const scores = JSON.parse(localStorage.getItem("highScores")) || [];
  scores.sort((a, b) => b.score - a.score);
  let html = "";
  for (let i = 0; i < 10 && i < scores.length; i++) {
    html += `<tr><td>${i + 1}</td><td>${scores[i].name}</td><td>${scores[i].score}</td></tr>`;
  }
  highScoresTable.innerHTML = html;
}
