document.addEventListener('keydown', function(event) {
   console.log("Keydown event detected"); // For debugging purposes
  const character = document.getElementById('character');
  if (event.key === " " && !character.classList.contains('animate')) { // Spacebar key
    character.classList.add('animate');
    setTimeout(() => character.classList.remove('animate'), 500); 
  }
});

var checkDead = setInterval(function() {
  var characterTop = 
    parseInt (window.getComputedStyle(character) .getPropertyValue("Top"));
  var blockLeft =
    parseInt (window.getComputedStyle(block) .getPropertyValue("Left"))
    if(blockLeft<20 && blockLeft>0 && characterTop>=130)
      block.style.animation = "none";
      block.style.display = "none";
      alert("You lose!");
     
  }, 10);
