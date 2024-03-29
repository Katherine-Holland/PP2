let blockLeft;
let characterTop;

document.addEventListener('keydown', function(event) {
   console.log("Keydown event detected"); // For debugging purposes
  const character = document.getElementById('character');
  if (event.key === " " && !character.classList.contains('animate')) { // Spacebar key
    character.classList.add('animate');
    setTimeout(() => character.classList.remove('animate'), 500); 
  }
});

document.getElementById("game-over-message").addEventListener('click', function() {
  this.style.display = 'none'; // Hide the message
  restartGame(); // Function you would define to reset game state and start over
});

// modified from the tutorial: https://www.youtube.com/watch?v=bG2BmmYr9NQ
let gameIsOver = false;

var checkDead = setInterval(function() {
  if(gameIsOver) return; // Stops the function if the game is over

  var characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  var blockLeft =
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));

  if(blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
    block.style.animation = "none";
    block.style.display = "none";
    gameIsOver = true;
    var gameOverMessage = document.getElementById("game-over-message");
    gameOverMessage.style.display = "block"; // Make sure this element is visible
  }
}, 10);


if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
  block.style.animation = "none";
  block.style.display = "none";
  gameIsOver = true;
  document.getElementById("game-over-message").style.display = "block"; // Show the message
}

function restartGame(){
  if (gameIsOver === false) {
    var character = document.getElementById("character");
    var block = document.getElementById("block");
    character.style.top = "150px";
    block.style.left = "96%";
    block.style.animation = "block 2s infinite linear";
    gameIsOver === false; // Reset gameIsOver flag
  }
}
