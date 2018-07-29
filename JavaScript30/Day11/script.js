//TODO:
/*
 - play video on clicking the start button ✔️
 - change volume when sliding the volume slider (1st one);  ✔️
 - change the speed of the video by sliding 2nd player__slider ✔️
 - using the last two buttons to go back 10s or forwards 25 s ✔️
 - when clicking anywhere on the player window start playing/stop playing ✔️
 - progress updates in real time ✔️
 - using the video progress slider to change the current Time
*/

// get elements:
const playButton = document.querySelector('.player__button');
const video = document.querySelector('.player__video');
const volume = document.querySelector('#volumeSlider');
const playBack = document.querySelector('#playBackSlider');
const rewind = document.querySelector('#rewind');
const skipForward = document.querySelector('#skipForward');
const progressBar = document.querySelector('.progress__filled');
const progress = document.querySelector('.progress');

//initializing variables
let playing = false;
let mousedown = false;
// functions
function togglePlay() {
  playing = !playing;
  if (playing) {
    video.play();
    playButton.innerHTML = "⏸️";
  } else {
    video.pause();
    playButton.innerHTML = "►";
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
// for progress bar:
// get the flex-basis percentage: 0% when currentTime= 0, 100% at video.duration...

function showProgress() {
  const percent = (video.currentTime / video.duration) *100;
  progressBar.style.flexBasis = `${percent}%`;
}

function changeProgressTime(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth)* video.duration;
  video.currentTime = scrubTime;
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
video.ontimeupdate= showProgress; //to keep updating the progress bar
progress.addEventListener('click',changeProgressTime);
progress.addEventListener('mousemove', (e) => mousedown && changeProgressTime(e)); // instead of if statement that will run the function when it's true we can do this, if mousedwon is false it will just stop running.
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
