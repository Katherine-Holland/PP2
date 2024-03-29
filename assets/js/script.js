document.addEventListener('keydown', function(event) {
   console.log("Keydown event detected"); // For debugging purposes
  const character = document.getElementById('character');
  if (event.key === " " && !character.classList.contains('animate')) { // Spacebar key
    character.classList.add('animate');
    setTimeout(() => character.classList.remove('animate'), 500); 
  }
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
    gameIsOver = true; // Set the flag to true to prevent further alerts
    alert("You lose!");
  }
}, 10);
