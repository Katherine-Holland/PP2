document.addEventListener('keydown', function(event) {
   console.log("Keydown event detected"); // For debugging purposes
  const character = document.getElementById('character');
  if (event.key === " " && !character.classList.contains('animate')) { // Spacebar key
    character.classList.add('animate');
    setTimeout(() => character.classList.remove('animate'), 500); 
  }
});


