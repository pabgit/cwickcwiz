var score = localStorage.getItem("score");
var scoreEl = document.querySelector(".score");
scoreEl.textContent = score
resetButton.addEventListener("click", clearHighScores);
