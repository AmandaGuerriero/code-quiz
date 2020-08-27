// Global Variables
var body = document.body;
var score = 0;
var timer = 60;

// Set Timer
var countdownTimer = setInterval(function(){
  if(timer <= 0){
    clearInterval(countdownTimer);
    document.getElementById("timer").innerHTML = "No Time Left";
    console.log ("No Time Left")
  } else {
    document.getElementById("timer").innerHTML = timer;
    console.log (timer)
  }
  timer -= 1;
}, 1000);


// Set Question & Answer Text
var questions = [
    {
        question: "Commonly used data types do not include_______.",
        options: ["strings", "booleans", "numbers", "alerts"],
        answer: "alerts"
    },
    
    {
        question: "Arrays in Javascript can be used to store_______.",
        options: ["1", "2", "3", "4"],
        answer: "1"
    },

    {
        question: "Arrays in Javascript can be used to store_______.",
        options: ["1", "2", "3", "4"],
        answer: "1"
    },

    {
        question: "Arrays in Javascript can be used to store_______.",
        options: ["1", "2", "3", "4"],
        answer: "1"
    },

    {
        question: "Arrays in Javascript can be used to store_______.",
        options: ["1", "2", "3", "4"],
        answer: "1"
    }
]

var cycleQuestions = function () {
    if (questions === questions.length)
    console.log ("I'm over");
    else {

    }
};

// Store our li elements in a variable to style them
var listItems = document.getElementsByTagName('li');


// Set Score
var scoreEl = document.querySelector("#score");
var score = 0

var setScore = function () {
    scoreEl.textContent = score;
}

