// Global Variables
var body = document.body;
var score = 0;
var timer = 60;
var currentQuestionIndex = 0;
var startButton = document.getElementById("start-btn");
var questionsEl = document.getElementById("questions");
var optionsEl = document.getElementById("options");
var goBackButton = document.getElementById("go-back-btn");
var clearButton = document.getElementById("clear-btn");
var optionsEl = document.getElementById("options");


// Start Quiz Function
var startQuiz = function () {
    
    // Hide Start Screen
    var startScreenEl = document.getElementById("start-screen");
        startScreenEl.setAttribute("class", "hide");

    // Display Questions
    showQuestions(currentQuestionIndex);
}

// Show Questions Function
var showQuestions = function() {
    var currentQuestion = questions[currentQuestionIndex];

        var titleEl = document.getElementById("q-title");
            titleEl.textContent = currentQuestion.question;
        
            // Display Questions
            currentQuestion.options.forEach((option, currentQuestionIndex) => {
                var optionsButtons = document.createElement ("button")
                optionsButtons.setAttribute ("value", option)
                optionsButtons.textContent = currentQuestionIndex + 1 + "." + option;
                optionsButtons.onclick = optionsClick;
                optionsEl.appendChild(optionsButtons);
            });
}

var optionsClick = function () {
    console.log ("I was clicked")
    // for(var i = 0; i < questions.length; i++) {
        var answer = currentQuestionIndex.answer;
        if (answer === currentQuestionIndex.answer) {
            score++;
            console.log("Correct");
        }    
        else (timer = 16 || timer < 16); {
            timer -= 15;
            console.log("Wrong");
        }
    currentQuestionIndex ++;
    showQuestions ();
    }
//}


// Countdown Timer
var countdownTimer = setInterval(function(){
    if(timer <= 0){
    clearInterval(countdownTimer);
    document.getElementById("timer").innerHTML = "No Time Left";
    console.log("No Time Left");
  } else {
    document.getElementById("timer").innerHTML = timer;
    console.log(timer);
  }
  timer -= 1;
  document.getElementById("timer").innerHTML = "<h1>Timer </h1>" + timer;
}, 1000);


// document.getElementById("questions").textContent = questions;


// Show User's Score

// Save Score and initials to local Storage


// Show All Scores 


// Clear Highscores - Nice to Have
goBackButton.addEventListener("click", startQuiz);

// Go Back - Nice to Have

startButton.addEventListener("click", startQuiz);

