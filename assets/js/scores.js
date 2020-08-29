// Save Score and Initials to local Storage
function saveHighscore() {
    var initials = initialsEl.value.trim();
    // If initials are empty
    if (initials !== "") {
        var highscores =
        JSON.parse(window.localStorage.getItem("highscores")) || [];

        var newScore = {
            score: score,
            initials: initials
        };
       // Save to Local Storage
       highscores.push(newScore);
       window.localStorage.setItem("highscores", JSON.stringify(highscores));
       // Redirect to High Scores Page
       window.location.href = "highscores.html";
    }
}

// Submit Initials
submitBtn.onclick = saveHighscore;

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
   function clearHighscores() {
     window.localStorage.removeItem("highscores");
     window.location.reload();
}

printHighscores();