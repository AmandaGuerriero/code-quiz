// Global Variables
var body = document.body;
var score = 0;
var timer = 60;
var currentQuestionIndex = 0;
var startButton = document.getElementById("start-btn");
var questionsEl = document.getElementById("questions");
var goBackButton = document.getElementById("go-back-btn");
var clearButton = document.getElementById("clear-btn");
var optionsEl = document.getElementById("options");
var startScreenEl = document.getElementById("start-screen");
var secondsRemaining = questions.length * 15


// Start Quiz Function
var startQuiz = function () {
    
    // Start Timer
    startTimer ();
    
    // Hide Start Screen
    startScreenEl.setAttribute("class", "hide");

    // Display Questions
    showQuestions(currentQuestionIndex);
}

// Show Questions Function
var showQuestions = function() {
    questionsEl.removeAttribute ("class", "hide");


    var currentQuestion = questions[currentQuestionIndex];

    // Display Questions
    var titleEl = document.getElementById("q-title");
        titleEl.textContent = currentQuestion.question;
        optionsEl.innerHTML = "";
        
    // Display Options
    currentQuestion.options.forEach((option, currentQuestionIndex) => {
        var optionsButtons = document.createElement ("button")
        optionsButtons.setAttribute ("value", option)
        optionsButtons.textContent = currentQuestionIndex + 1 + "." + option;
        optionsButtons.setAttribute ("class", "optionsButtons")
        optionsButtons.onclick = optionsClick;
        optionsEl.appendChild(optionsButtons);
    });
        
}

var optionsClick = function () {
    console.log ("I was clicked")
    // for(var i = 0; i < questions.length; i++) {
    var answer = questions.answer
        if (answer === currentQuestionIndex.answer) {
            score + 10;
            console.log("Correct");
        }  {
            timer -= 10;
            console.log("Wrong");
        }
        currentQuestionIndex ++; {
            if (currentQuestionIndex < questions.length) {
                showQuestions();
            }
        }
    }
//}

// Countdown
function startTimer() {
    timer = setInterval(function() {
        secondsRemaining -= 1;
        console.log(secondsRemaining);

        var timerDisplay = document.getElementById("timer");
        timerDisplay.textContent = "Time: " + secondsRemaining;

        if (secondsRemaining === 0) {
            clearInterval(timer);
            window.location.href = "highscore.html";
        }
    }, 1000);
}


// Clear Highscores - Nice to Have
clearButton.addEventListener("click", startQuiz);

// Go Back - Nice to Have
startButton.addEventListener("click", startQuiz);

