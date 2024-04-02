const character = document.getElementById('character');
const block = document.getElementById('block');
// Existing keydown event for desktop
document.addEventListener('keydown', function(event) {
    if (event.key === " " && !character.classList.contains('animate')) {
        characterJump();
    }
});
// Added touchstart event for mobile
document.addEventListener('touchstart', function() {
    if (!character.classList.contains('animate')) {
        characterJump();
    }
});
function characterJump() {
    console.log("Jump event detected"); // For debugging purposes
    character.classList.add('animate');
    setTimeout(() => character.classList.remove('animate'), 500);
    jumpCount++;
    document.getElementById("score").innerHTML = jumpCount;
}
document.getElementById("game-over-message").addEventListener('click', function() {
    console.log("click detected"); // For debugging purposes
    this.style.display = 'none';
    restartGame();
});
let gameIsOver = false;
let jumpCount = 0;
/* Modified from the youtube tutorial */
setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        gameIsOver = true;
        var gameOverMessage = document.getElementById("game-over-message");
        gameOverMessage.style.display = "block";
    }
    if (gameIsOver) return;
}, 10);
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