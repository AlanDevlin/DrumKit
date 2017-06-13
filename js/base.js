//Play the sound when each button is selected
function playSound(e) {
  //Only looking for one code so use query selector and use data-key attribute
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //Get the key that was pressed so we can add an animation
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return; //this just stops function from running
  //rewind the sound to the start - allows the button to be pressed numerous times in succession
  audio.currentTime = 0;
  //Play the sound
  audio.play();
  //Add the .playing class to our key to change it (add style when pressed)
  key.classList.add('playing');
}

//Create a transition end event to stop the animation
function removeTransition(e) {
  if(e.propertyName !== 'transform') return; //skip if its not a transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//Make something happen when you press a key
window.addEventListener('keydown', playSound);
