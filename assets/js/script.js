// Global Variables
var body = document.body;
var score = 0;
var timer = 75;
var currentQuestionIndex = 0;
var startButton = document.getElementById("start-btn");
var questionsEl = document.getElementById("questions");
var goBackButton = document.getElementById("go-back-btn");
var clearButton = document.getElementById("clear-btn");
var optionsEl = document.getElementById("options");
var startScreenEl = document.getElementById("start-screen");
var secondsRemaining = questions.length * 15
var scoreScreenEl = document.getElementById("score-screen");
var initialsEl = document.getElementById("initials");
var submitBtn = document.getElementById("submit-btn");
var timerEl = document.getElementById("timer");

// Start Quiz Function
var startQuiz = function () {
    startTimer ();

    // Hide Start Screen
    startScreenEl.setAttribute("class", "hide");
    
    // Display Questions
    showQuestions(currentQuestionIndex);
}

// Display Questions Function
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

// Answer Selection Function
var optionsClick = function () {
    // Get correct answer
    var currentAnswer = questions[currentQuestionIndex];
    var answer = currentAnswer.answer;
    console.log(answer);
    
    // If correct
    if (answer === this.value) {
        score += 10;
        document.getElementById("answer-select").innerHTML = "Last answer was correct!";
        console.log (score)
        console.log ("This is correct")
    // If incorrect  
    } else {
        secondsRemaining -= 15;
        document.getElementById("answer-select").innerHTML = "Last answer was wrong!";
        console.log ("This is wrong")
    }

    // Increment Question Number by 1
    currentQuestionIndex ++; 

    // Go to next question
    if (currentQuestionIndex < questions.length) {
        showQuestions();
    }
    // End Quiz
    else {
        endQuiz();
        console.log("This is the end");
    }
}

// Timer Countdown Function
function startTimer() {
    timer = setInterval(function() {
        secondsRemaining -= 1;
        console.log(secondsRemaining);

        //Display Timer
        var timerDisplay = document.getElementById("timer");
        timerDisplay.textContent = "Time: " + secondsRemaining;

        // When time runs out - Remove Timer and End Quiz 
        if (secondsRemaining === 0) {
            clearInterval(timer);
            console.log("this is the end");
            endQuiz ();
        }
    }, 1000);
}

// End Quiz Function
function endQuiz() {
    timerEl.setAttribute ("class", "hide"); 
    clearInterval(timer);
    questionsEl.setAttribute ("class", "hide");
    scoreScreenEl.removeAttribute ("class", "hide");
    document.getElementById("score").innerHTML = "Your final score is " + score;
}

// Save Score and Initials to local Storage
function saveHighscore() {
    var initials = initialsEl.value.trim();
    // If initials are empty
    if (initials !== "") {
        var highscores =
        JSON.parse(window.localStorage.getItem("highscores")) || [];
        
        // Get the score and initial info
        var newScore = {
            score: score,
            initials: initials
        };

        // Save to Local Storage
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));
        
        // Redirect to High Scores Page
        window.location.href = "highscore.html";
    }
}

// Submit with enter function
function checkForEnter(event) {
    if (event.key === "Enter") {
      saveHighscore();
    }
  }
  
// Submit Initials
submitBtn.onclick = saveHighscore;

// Go Back - Nice to Have
startButton.addEventListener("click", startQuiz);

initialsEl.onkeyup = checkForEnter;