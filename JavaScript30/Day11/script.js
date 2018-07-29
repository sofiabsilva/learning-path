//TODO:
/*
 - play/pause video on clicking the start button;
 - change volume when sliding the volume slider (1st one);
 - change the speed of the video by sliding 2nd player__slider;
 - using the last two buttons to go back 10s or forwards 25s;
 - when clicking anywhere on the player window start playing/stop playing;
*/

// get elements:
const playButton = document.querySelector('.player__button');
const video = document.querySelector('.player__video');

//initializing variables
let playing = false;


// functions
function togglePlay() {
  playing = !playing;
  if (playing) {
    video.play();
  } else {
    video.pause();
  }
}

// Hooking event listeners
playButton.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
