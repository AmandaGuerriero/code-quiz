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


// Start Quiz Function
var startQuiz = function () {
    
// Hide Start Screen
startScreenEl.setAttribute("class", "hide");

    // Display Questions
    showQuestions(currentQuestionIndex);
}

// Show Questions Function
var showQuestions = function() {
    questionsEl.removeAttribute ("class", "hide");
    // Start Timer
    var countdownTimer = setInterval(function(){
        if(timer <= 0){
        clearInterval(countdownTimer);
        document.getElementById("timer").innerHTML = "No Time Left";
        console.log("No Time Left");
        } else {
        document.getElementById("timer").innerHTML = timer;
        }
        timer -= 1;
        document.getElementById("timer").innerHTML = "<h1>Timer </h1>" + timer;
    }, 1000);

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
        if (currentQuestionIndex.answer) {
            score++;
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



// document.getElementById("questions").textContent = questions;


// Save Score and initials to local Storage
// function saveHighscore() {
//     // get value of input box
//     var initials = initialsEl.value.trim();
//     // make sure value wasn't empty
//     if (initials !== "") {
//       // get saved scores from localstorage, or if not any, set to empty array
//       var highscores =
//         JSON.parse(window.localStorage.getItem("highscores")) || [];
//       // format new score object for current user
//       var newScore = {
//         score: time,
//         initials: initials
//       };
//       // save to localstorage
//       highscores.push(newScore);
//       window.localStorage.setItem("highscores", JSON.stringify(highscores));
//       // redirect to next page
//       window.location.href = "highscores.html";
//     }
//   }
//   function checkForEnter(event) {
//     // "13" represents the enter key
//     if (event.key === "Enter") {
//       saveHighscore();
//     }
//   }
//   // user clicks button to submit initials
//   submitBtn.onclick = saveHighscore;
//   // user clicks button to start quiz
//   startBtn.onclick = startQuiz;
//   initialsEl.onkeyup = checkForEnter;


// Show All Scores 
// function printHighscores() {
//     // either get scores from localstorage or set to empty array
//     var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
//     // sort highscores by score property in descending order
//     highscores.sort(function (a, b) {
//       return b.score - a.score;
//     });
//     highscores.forEach(function (score) {
//       // create li tag for each high score
//       var liTag = document.createElement("li");
//       liTag.textContent = score.initials + " - " + score.score;
//       // display on page
//       var olEl = document.getElementById("highscores");
//       olEl.appendChild(liTag);
//     });
//   }
//   function clearHighscores() {
//     window.localStorage.removeItem("highscores");
//     window.location.reload();
//   }
//   document.getElementById("clear").onclick = clearHighscores;
//   // run function when page loads
//   printHighscores();


// Clear Highscores - Nice to Have
goBackButton.addEventListener("click", startQuiz);

// Go Back - Nice to Have

startButton.addEventListener("click", startQuiz);

