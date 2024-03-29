document.addEventListener('keydown', function(event) {
  const character = document.getElementById('character');
  if (event.key === " " && !character.classList.contains('animate')) { // Spacebar key and not already jumping
    character.classList.add('animate');
    setTimeout(() => character.classList.remove('animate'), 500); // Animation duration
  }
});


//var character = document.getElementById("character");
/*var block = document.getElementById("block");
function jump() {
  if(character.classList != "animate"){
  character.classList.add("animate");
  }
  setTimeout(function(){
    character.classList.remove("animate");
  }, 500);
}