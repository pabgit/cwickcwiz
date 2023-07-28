var startButton = document.getElementById('startButton');

let timerCount=90
var timerDisplay = document.getElementById('timerDisplay');
let timer;
let quizContainer = document.querySelector('.quiz-container');
let question = document.querySelector('#question')
let option1 = document.getElementById("option1")
let option2 = document.getElementById("option2")
let option3 = document.getElementById("option3")
let option4 = document.getElementById("option4")
let correct = document.getElementById("correct")
option1.addEventListener('click', checkButton)
option2.addEventListener('click', checkButton)
option3.addEventListener('click', checkButton)
option4.addEventListener('click', checkButton)

quizContainer.style.display = "none"
startButton.addEventListener('click', function() {
  console.log('Start button clicked')
  startQuizTimer()
  startButton.style.display = 'none'
  quizContainer.style.display = "block"
  displayQuestion()
})

function startQuizTimer() {

  timerCount = 20;
  timer = setInterval(function() {
    timerDisplay.innerText="Time: " + timerCount
    timerCount--;

    if (timerCount <= 0) {
  
        endQuiz()
        // "endQuiz()" Calculate and present "Your final score is 30.", enter initials and submit.
        // Highscore page with options to Go Back and ClearHighscores
        // Go Back button = return to init

    }
  }, 1000);
}
var questionsList = [
  {
    question:"What day comes after Monday?",
    option1:"1. Monday",
    option2:"2. Tuesday",
    option3:"3. Wednesday",
    option4:"4. Thursday",
    answer:"2. Tuesday"
  },
  {
    question:"What day comes before Wednesday?",
    option1:"1. Monday",
    option2:"2. Tuesday",
    option3:"3. Wednesday",
    option4:"4. Thursday",
    answer:"2. Tuesday"
  },
  {
    question:"What day comes after Sunday?",
    option1:"1. Monday",
    option2:"2. Tuesday",
    option3:"3. Wednesday",
    option4:"4. Thursday",
    answer:"1. Monday"
  },
  {
    question:"What day comes before Tuesday?",
    option1:"1. Monday",
    option2:"2. Tuesday",
    option3:"3. Wednesday",
    option4:"4. Thursday",
    answer:"1. Monday"
  },
  {
    question:"What day comes after Wednesday?",
    option1:"1. Monday",
    option2:"2. Tuesday",
    option3:"3. Wednesday",
    option4:"4. Thursday",
    answer:"4. Thursday"
  },
]
var currentQuestion = 0;
var score = 0;
function displayQuestion(){
  question.innerText = questionsList[currentQuestion].question
  option1.innerText = questionsList[currentQuestion].option1
  option2.innerText = questionsList[currentQuestion].option2
  option3.innerText = questionsList[currentQuestion].option3
  option4.innerText = questionsList[currentQuestion].option4
}

function checkButton(event){
  var userInput = event.target.innerText
  console.log(userInput)
  if (userInput === questionsList[currentQuestion].answer) {
    score++
    correct.innerText = "Correct!"
  } else{
    timerCount -= 5
    correct.innerText = "Wrong!"
  }
  if (currentQuestion < questionsList.length - 1){
    currentQuestion++ 
     displayQuestion()
  }else{
    endQuiz()
  }
}

function endQuiz () {
  clearInterval(timer);
  quizContainer.style.display = "none"
}
// 

// Attach event listener to start button to call startGame function on click
// startButton.addEventListener("click", startQuiz);

// var startQuiz = document.querySelector(".start-button");

// The startGame function is called when the start button is clicked
// 
// 
// The init function is called when the page loads 
// function init() {
//   getCorrect();
//   getWrong();
//   set in local storage
// }
// multiple choice
// 
// var timerElement = document.querySelector(".timer-count");
// 
// var correct = "";
// var wrong = "";
// 
// var timer;
// var timerCount;

// The endQuiz function is called when all questions are answered or time expires

// function endQuiz() {
// Generate score based on Correct!(true) and Wrong!(false) 
// answers stored in local storage
// present score and enter initials then press submit
// list scores in ascending order, high on top
// } 
// 
// Calls init() so that it fires when page opened
// init();
// 
// var clearHighScores = document.querySelector(".clearHighScores-button");

// function Clear Highscores() {
  // Clear stored scores
// }
// Attaches event listener to button
// resetButton.addEventListener("click", clearHighScores);
// 