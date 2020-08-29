// Global Variables
var body = document.body;
var score = 0;
var timer = 60;
var currentQuestionIndex = 0;
var startButton = document.getElementById("start-btn");
var questionsEl = document.getElementById("questions");
var optionsEl = document.getElementById("options");


// Start Quiz Function
var startQuiz = function () {
    
// Hide Start Screen
var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");

// Display Questions
showQuestions();
}

// Show Questions Function
var showQuestions = function() {
    var currentQuestion = questions[currentQuestionIndex];
    
    // var optionsEl = document.getElementById("options")
    // optionsEl.innerHTML = "";

    questions.forEach((titleEl, optionsEl) => {
        var titleEl = document.getElementById("q-title");
        titleEl.textContent = currentQuestion.question;
        var optionsEl = document.getElementById("options")
        optionsEl.innerHTML = currentQuestion.options;
    });

    for(var i = 0; i < questions.length; i++) {
        var answer = (questions[i].question);
        if (answer === questions[i].answer) {
            score++;
            console.log("Correct");
        }    
        else {
            timer -= 15;
            console.log("Wrong");
        }
    }
}



// Countdown Timer
var countdownTimer = setInterval(function(){
    if(timer <= 1){
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

// Set Question & Answer Text
const questions = [
    {
        question: "Commonly used data types DO NOT include_______.",
        options: ["strings", "booleans", "numbers", "alerts"],
        answer: "alerts"
    },
    
    {
        question: "The condition in an if / else statement is enclosed within_______.",
        options: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: ""
    },

    {
        question: "Arrays in Javascript can be used to store_______.",
        options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "Numbers"
    },

    {
        question: "Sting values must be enclosed within ________ when being assigned to variables",
        options: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "1"
    },

    {
        question: "A very useful tool used during development",
        options: ["1", "2", "3", "4"],
        answer: "1"
    }
]

// document.getElementById("questions").textContent = questions;


// Show User's Score
console.log("You Scored" + score + " points.");

// Save Score and initials to local Storage


// Show All Scores 


// Clear Highscores - Nice to Have

// Go Back - Nice to Have

startButton.addEventListener("click", startQuiz);

