// Global Variables
var body = document.body;
var score = 0;
var timer = 60;


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

// Store our li elements in a variable to style them
var listItems = document.getElementsByTagName('li');


// Append the items


// Can append things to exampleEl to list inside


// Set Score
var scoreEl = document.querySelector("#score");
var score = 0

var setScore = function () {
    scoreEl.textContent = score;
}
