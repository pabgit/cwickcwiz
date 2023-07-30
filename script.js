var startButton = document.getElementById('startButton');
// const hiddenElement = document.getElementById("hiddenElement");
var box = document.querySelector('.box')
var submitBtn = document.querySelector('#submitBtn')
var user = document.querySelector('#user')
let timerCount=5
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

function endQuiz(){
  clearInterval(timer)
  box.style.display = "none"
  quizContainer.style.display = "none"
  var hiddenElement = document.querySelector(".hiddenElement")
  hiddenElement.style.display = "block"
}
function startQuizTimer() {

  // timerCount = 5;
  timer = setInterval(function() {
    timerCount--;
    
    timerDisplay.innerText="Time: " + timerCount
    if (timerCount <= 0) {
      // setTime();
        endQuiz()

        // "endQuiz()" h5 All done! h5 
        // <p/> "Your final score is 30." enter initials: </p> and submitButton.
        // Calculate and present 
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

function submit () {
  var initials = user.value
  var score = initials + " : " + timerCount
  localStorage.setItem("score", score);
  // redirect here!
}
submitBtn.addEventListener("click", submit)
// function endQuiz () {
//   let score = document.getElementById('score');
//   function showHiddenElement() {
//     const hiddenElement = document.getElementById('hiddenElement');
//     hiddenElement.style.display = 'inline'
//   }  
//   clearInterval(timer);
//   hiddenElement.style.display = "none"
// }
// Attach event listener to start button to call startGame function on click
// startButton.addEventListener("click", startQuiz);
// 
// The startGame function is called when the start button is clicked
//
// var clearHighScores = document.querySelector(".clearHighScores-button");

// function Clear Highscores() {
  // Clear stored scores
// }
// Attaches event listener to button
// resetButton.addEventListener("click", clearHighScores);
// 