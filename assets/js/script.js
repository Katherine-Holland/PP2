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
/**
 * This event listener allows the spacebar to trigger a character jump on desktop computers.
 * It also prevents the default action of the spacebar from scrolling the page down.
 */
document.addEventListener('keydown', function(event) {
    if (event.key === " " && !character.classList.contains('animate')) {
        event.preventDefault(); 
        characterJump();
    }
});
/**
 * This event listener allows the user to tap the mobile screen
 * to trigger a character jump on mobile devices.
 */
document.addEventListener('touchstart', function() {
    if (!character.classList.contains('animate')) {
        characterJump();
    }
});
/**
 * This function allows the score to remain the same if the character jumps without
 * passing over the block. It is checked every 500ms. 
 */
function characterJump() {
    character.classList.add('animate');
    scoreUpdated = false; 
    setTimeout(() => character.classList.remove('animate'), 500);
}
/**
 * This event listener allows the option for game restart if the game over message
 * is displayed.
 */
document.getElementById("game-over-message").addEventListener('click', function() {
    this.style.display = 'none';
    restartGame();
});
/**
 * This function checks for collision between the character and the block (set to every 10 ms).
 * This function checks if the block has been successfully jumped. If so, the score is updated.
 * This is triggered if the character and the block overlap.
 * This function also stops the game if a collision in true. The function also calls the event listener 'game over message'.
 * The function checks to see if the final score is a high score and if true displays the new highscore.
 * The function also checks and displays the users score for that game.//
 */
setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        gameIsOver = true;
        document.getElementById("game-over-message").style.display = "block";
        //Code: https://www.w3schools.com/jsref/prop_win_localstorage.asp//
        if (jumpCount > highScore) {
            highScore = jumpCount;
            localStorage.setItem("highScore", highScore);
            document.getElementById("highScore").innerHTML = `High Score: ${highScore}`;
        }
    } else if (blockLeft < 20 && blockLeft > 0 && !scoreUpdated) {
        jumpCount++;
        document.getElementById("score").innerHTML = jumpCount;
        scoreUpdated = true; 
    }
}, 10);
/**
 * This function resets the game blocks to their starting points and resets the
 * jump counter to zero. The highscore remains the same.
 */
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

restartGame();
