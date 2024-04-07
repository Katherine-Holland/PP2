//JS Code modified from tutorial: https://www.youtube.com/watch?v=bG2BmmYr9NQ//
const character = document.getElementById('character');
const block = document.getElementById('block');
let gameIsOver = false;
let jumpCount = 0;
let scoreUpdated = false; 
let highScore = 0; 
// Check for an existing high score in localStorage code taken from W3Schools: https://www.w3schools.com/jsref/prop_win_localstorage.asp //
    if (localStorage.getItem("highScore")) {
    highScore = parseInt(localStorage.getItem("highScore"));
    document.getElementById("highScore").innerHTML = `High Score: ${highScore}`; 
}
//Broke up the code into smaller functions to make it easier to read and understand. Event listener to make the character jump using spacebar for desktop//
document.addEventListener('keydown', function(event) {
    if (event.key === " " && !character.classList.contains('animate')) {
        characterJump();
    }
});
//Event listener to allow character to jump using a tap on mobile//
document.addEventListener('touchstart', function() {
    if (!character.classList.contains('animate')) {
        characterJump();
    }
});
//Function to make the character jump//
function characterJump() {
    console.log("Jump event detected"); // debugging purposes//
    character.classList.add('animate');
    scoreUpdated = false; 
    setTimeout(() => character.classList.remove('animate'), 500);
}
//Function to allow game to be restarted//
document.getElementById("game-over-message").addEventListener('click', function() {
    console.log("click detected"); // debugging purposes//
    this.style.display = 'none';
    restartGame();
});
//Function to to check for collision between the character and the block (set to every 10 ms), plus stop the game and check scores//
setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        gameIsOver = true;
        document.getElementById("game-over-message").style.display = "block";
        // Check if the current score is higher than the high score. Code: https://www.w3schools.com/jsref/prop_win_localstorage.asp//
        if (jumpCount > highScore) {
            highScore = jumpCount;
            localStorage.setItem("highScore", highScore);
            document.getElementById("highScore").innerHTML = `High Score: ${highScore}`;
        }
      //to check if the block has been jumped to allow the jump to count as a point//
    } else if (blockLeft < 20 && blockLeft > 0 && !scoreUpdated) {
        jumpCount++;
        document.getElementById("score").innerHTML = jumpCount;
        scoreUpdated = true; 
    }
}, 10);
//starts and restarts the game//
function restartGame() {
    gameIsOver = false;
    character.style.display = "block";
    block.style.display = "block";
    block.style.animation = "block 2s infinite linear";
    block.style.left = "100%";
    jumpCount = 0;
    document.getElementById("score").innerHTML = 0;
    character.style.top = "150px";
}
//added this to allow game to start with characters in the correct position on initial load of page//
restartGame();
