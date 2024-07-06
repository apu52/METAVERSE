const videoEl = document.getElementById("video");
const playBtn = document.getElementById("play");
const stopBtn = document.getElementById("stop");
const progressEl = document.getElementById("progress");
const timeEl = document.getElementById("time");
const fullScreenEl = document.getElementById("fullScreen");

function updateVideo() {
  if (videoEl.paused) {
    videoEl.play();
    playBtn.innerHTML = `<ion-icon name="pause"><ion-icon>`;
  } else  {
    videoEl.pause();
    playBtn.innerHTML = `<ion-icon name="play"><ion-icon>`;
  }
}
playBtn.addEventListener("click", (e) => {
  updateVideo();
});

stopBtn.addEventListener("click", (e) => {
  videoEl.currentTime = 0;
  videoEl.pause();
  playBtn.innerHTML = `<ion-icon name="play"><ion-icon>`;
  e.stopPropagation();
  e.preventDefault()
});

videoEl.addEventListener("timeupdate", (e) => {
  updateProgress();
  updateTime();
  if (Math.round(videoEl.currentTime) === Math.round(videoEl.duration)) {
    videoEl.currentTime = 0;
    videoEl.pause();
    playBtn.innerHTML = `<ion-icon name="play"><ion-icon>`;
  }
});

function updateProgress() {
  let currentValue = (videoEl.currentTime / videoEl.duration) * 100;
  progressEl.value = currentValue;
  progressEl.style.background = `linear-gradient(
          to right,
          #f00 0%,
          #f00 ${Math.round(currentValue)}%,
          rgba(255, 255, 255, 0.5) ${Math.round(currentValue)}%,
          rgba(255, 255, 255, 0.5) 100%
        )`;
}

function updateTime() {
  let currentMinutes = Math.floor(videoEl.currentTime / 60);
  let currentSeconds = Math.floor(videoEl.currentTime % 60);
  let durationMinutes = Math.floor(videoEl.duration / 60);
  let durationSeconds = Math.floor(videoEl.duration % 60);
  
  if (currentSeconds < 10) currentSeconds = `0${currentSeconds}`;
  if (durationSeconds < 10) durationSeconds = `0${durationSeconds}`;
  
  timeEl.innerHTML = `${currentMinutes}:${currentSeconds} / ${durationMinutes}:${durationSeconds}`;
}

progressEl.addEventListener("input", (e) => {
  videoEl.currentTime = (progressEl.value * videoEl.duration) / 100;
});

videoEl.addEventListener("click", (e) => {
  updateVideo();
});

fullScreenEl.addEventListener("click", (e) => {
  if (videoEl.requestFullscreen) {
    videoEl.requestFullscreen();
  } else if (videoEl.webkitRequestFullscreen) { /* Safari */
    videoEl.webkitRequestFullscreen();
  } else if (videoEl.msRequestFullscreen) { /* IE11 */
    videoEl.msRequestFullscreen();
  }
});