"use strict";
const gameBody = document.getElementById("game-main");
const resetBtn = document.getElementById("reset-btn");
const header = document.getElementById("header");
const randomNo = document.getElementById("random-no");
const gameInput = document.getElementById("game-input");
const checkBtn = document.getElementById("check-btn");
const feedback = document.getElementById("feedback");
let score = document.getElementById("score");
const highScore = document.getElementById("highscore");
const gameBottom = document.querySelector(".game-bottom");
let secretNo = Math.trunc(Math.random() * 20) + 1;
// randomNo.textContent = secretNo;
let number = 20;
let highscore = 0;
score.textContent = number;
highScore.textContent = highscore;
const displayMessage = function (message) {
  feedback.textContent = message;
};
checkBtn.addEventListener("click", function () {
  if (!gameInput.value) {
    // feedback.textContent = "⛔ Input a Number!";
    displayMessage("⛔ No Number!");
    feedback.style.color = "red";
    gameInput.style.border = "4px solid red";
    if (number > 1) {
      number--;
      score.textContent = number;
    } else {
      // feedback.textContent = "you have lost the game";
      displayMessage("💣 you have lost the game");
      feedback.style.color = "red";
      score.textContent = 0;
      gameInput.style.display = "none";
      checkBtn.style.display = "none";
      gameBottom.style.justifyContent = "center";
    }
  } else if (gameInput.value == secretNo) {
    randomNo.textContent = secretNo;
    // feedback.textContent = "🥳 Correct Number";
    displayMessage("🥳 Correct");
    feedback.style.color = "white";
    gameInput.style.border = "4px solid white";
    header.textContent = "Congratulations 🥳";
    gameBody.style.backgroundColor = "saddlebrown";
    if (number > highscore) {
      highscore = number;
      highScore.textContent = highscore;
    }
  } else if (gameInput.value !== secretNo) {
    if (number > 1) {
      // feedback.textContent =
      //   gameInput.value > secretNo ? "📈 Too high" : "📉 Too low";
      displayMessage(gameInput.value > secretNo ? "📈 Too high" : "📉 Too low");
      feedback.style.color = "red";
      number--;
      score.textContent = number;
    } else {
      // feedback.textContent = "you have lost the game";
      displayMessage("💣 you have lost the game");
      feedback.style.color = "red";
      score.textContent = 0;
      gameInput.style.display = "none";
      checkBtn.style.display = "none";
    }
  }
  // else if (gameInput.value > secretNo) {
  //     if (number > 1) {
  //       feedback.textContent = "📈 Too high";
  //       feedback.style.color = "red";
  //       number--;
  //       score.textContent = number;
  //     } else {
  //       feedback.textContent = "you have lost the game";
  //       feedback.style.color = "red";
  //       score.textContent = 0;
  //       gameInput.style.display = "none";
  //       checkBtn.style.display = "none";
  //       gameBottom.style.justifyContent = "center";
  //     }
  //   } else if (gameInput.value < secretNo) {
  //     if (number > 1) {
  //       feedback.textContent = "📉 Too low";
  //       feedback.style.color = "red";
  //       number--;
  //       score.textContent = number;
  //     } else {
  //       feedback.textContent = "you have lost the game";
  //       feedback.style.color = "red";
  //       score.textContent = 0;
  //       gameInput.style.display = "none";
  //       checkBtn.style.display = "none";
  //       gameBottom.style.justifyContent = "center";
  //     }
  //   }
});

resetBtn.addEventListener("click", function () {
  gameBody.style.backgroundColor = "black";
  header.textContent = "Guess My Number";
  secretNo = Math.trunc(Math.random() * 20) + 1;
  randomNo.textContent = "?";
  gameInput.style.border = "4px solid white";
  gameInput.value = "";
  feedback.style.color = "white";
  // feedback.textContent = "Start guessing...";
  displayMessage("Start guessing...");
  number = 20;
  score.textContent = number;
  gameInput.style.display = "block";
  checkBtn.style.display = "block";
  gameBottom.style.gap = "20px";
});
