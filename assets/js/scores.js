
// Show All Scores Funtion
function printHighscores() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
     // Sort High Scores
    highscores.sort(function (a, b) {
       return b.score - a.score;
    });
    highscores.forEach(function (highscores) {
        // Create each list item
        var liTag = document.createElement("li");
        liTag.textContent = highscores.initials + " - " + highscores.score;
        // Display on page
        var olEl = document.getElementById("high-score-list");
        olEl.appendChild(liTag);
    });
}

// Clear Highscores
function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}

// Print Highscores
printHighscores();

// Click to clear Highscores
document.getElementById("clear-btn").onclick = clearHighscores;