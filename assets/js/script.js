const character = document.getElementById('character');
const block = document.getElementById('block');

document.addEventListener('keydown', function(event) {
    console.log("Keydown event detected"); // For debugging purposes
    if (event.key === " " && !character.classList.contains('animate')) { // Spacebar key
        character.classList.add('animate');
        setTimeout(() => character.classList.remove('animate'), 500);
        jumpCount++; 
        document.getElementById("score").innerHTML = jumpCount;
    }
});

document.getElementById("game-over-message").addEventListener('click', function() {
   console.log("click detected"); // For debugging purposes
    this.style.display = 'none'; // Hide the message
    restartGame(); // Restart the game
});

let gameIsOver = false;
let jumpCount = 0; // Initialize jump count variable

setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none";  
        block.style.display = "none";
        gameIsOver = true;
        var gameOverMessage = document.getElementById("game-over-message");
        gameOverMessage.style.display = "block"; // Display game over message
    }
   if (gameIsOver) return; // Stops the function if the game is over
}, 10);

function restartGame() {
    gameIsOver = false;
    character.style.display = "block";
    block.style.display = "block";
    block.style.animation = "block 2s infinite linear";
    block.style.left = "100%";
    jumpCount = 0; // Reset jump count
    document.getElementById("score").innerHTML = 0; // Reset score on the HTML element
    character.style.top = "150px";
}
