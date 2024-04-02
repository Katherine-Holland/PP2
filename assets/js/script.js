const character = document.getElementById('character');
const block = document.getElementById('block');
let gameIsOver = false;
let jumpCount = 0;
let scoreUpdated = false; 

document.addEventListener('keydown', function(event) {
    if (event.key === " " && !character.classList.contains('animate')) {
        characterJump();
    }
});

document.addEventListener('touchstart', function() {
    if (!character.classList.contains('animate')) {
        characterJump();
    }
});

function characterJump() {
    console.log("Jump event detected"); // debugging purposes
    character.classList.add('animate');
    scoreUpdated = false; 
    setTimeout(() => character.classList.remove('animate'), 500);
}

document.getElementById("game-over-message").addEventListener('click', function() {
    console.log("click detected"); // debugging purposes
    this.style.display = 'none';
    restartGame();
});

setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        gameIsOver = true;
        document.getElementById("game-over-message").style.display = "block";
    } else if (blockLeft < 20 && blockLeft > 0 && !scoreUpdated) {
        jumpCount++;
        document.getElementById("score").innerHTML = jumpCount;
        scoreUpdated = true; 
    }
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
