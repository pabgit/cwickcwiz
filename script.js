// The startGame function is called when the start button is clicked
// function startGame() {
//   isWin = false;
//   timerCount = 10;
//   startTimer()
// }

// Array of correct answers
// var Correct = ["variable","array", "modulus", "object", "function", "string", "boolean"];

// The init function is called when the page loads 
// function init() {
//   getCorrect();
//   getWrong();
// }
// multiple choice
// maintain wrong & correct via local storage

// var wordBlank = document.querySelector(".word-blanks");
// var win = document.querySelector(".win");
// var lose = document.querySelector(".lose");
// var timerElement = document.querySelector(".timer-count");
// var startButton = document.querySelector(".start-button");

// var chosenWord = "";
// var numBlanks = 0;
// var winCounter = 0;
// var loseCounter = 0;
// var isWin = false;
// var timer;
// var timerCount;

// The answer function is called when the win condition is met
// function answer() {
//   wordBlank.textContent = "YOU WON!!!🏆 ";
//   winCounter++
//   startButton.disabled = false;
//   setWins()
// }

// The timeout function is called when timer reaches 0
// function endGame() {
//   present score and enter initials then press submit
//   list scores in ascending order, high on top
// }

// // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
// function startTimer() {
//   // Sets timer
//   timer = setInterval(function() {
//     timerCount--;
//     timerElement.textContent = timerCount;
//     if (timerCount >= 0) {
//       // Tests if win condition is met
//       if (isWin && timerCount > 0) {
//         // Clears interval and stops timer
//         clearInterval(timer);
//         winGame();
//       }
//     }
//     // Tests if time has run out
//     if (timerCount === 0) {
//       // Clears interval
//       clearInterval(timer);
//       loseGame();
//     }
//   }, 1000);
// }

// Attach event listener to start button to call startGame function on click
// startButton.addEventListener("click", startQuiz);

// Calls init() so that it fires when page opened
// init();

// Bonus: Add reset button
// var clearHighScores = document.querySelector(".clearHighScores-button");

// function Clear Highscores() {
  // Clear stored scores
// }
// Attaches event listener to button
// resetButton.addEventListener("click", clearHighScores);
