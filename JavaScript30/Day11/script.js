//TODO:
/*
 - play video on clicking the start button ✔️
 - change volume when sliding the volume slider (1st one);  ✔️
 - change the speed of the video by sliding 2nd player__slider
 - using the last two buttons to go back 10s or forwards 25 s.
 - when clicking anywhere on the player window start playing/stop playing ✔️
*/

// get elements:
const playButton = document.querySelector('.player__button');
const video = document.querySelector('.player__video');
const volume = document.querySelector('#volumeSlider');
const playBack = document.querySelector('#playBackSlider');
const rewind = document.querySelector('#rewind');
const skipForward = document.querySelector('#skipForward');

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

function changeVolume() {
  video.volume = `${volume.value}`;
}

function changePlayBackRate() {
  video.playbackRate = `${playBack.value}`;
}
function goBackTime() {
  video.currentTime = `${video.currentTime -10}`;
}
function goForwardInTime() {
  video.currentTime = `${video.currentTime + 25}`;
}

// Hooking event listeners
playButton.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
volume.addEventListener('change', changeVolume);
volume.addEventListener('mousemove', changeVolume);
playBack.addEventListener('change', changePlayBackRate);
playBack.addEventListener('mousemove', changePlayBackRate);
rewind.addEventListener('click', goBackTime);
skipForward.addEventListener('click', goForwardInTime);
