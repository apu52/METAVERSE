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
  } else if (!videoEl.paused) {
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
          rgba(255, 255, 255, 0.5) 0%,
          rgba(255, 255, 255, 0.5) 100%
        )`;
}

function updateTime() {
  let currentValue = Math.round(videoEl.currentTime);
  let secondValue =
    currentValue < 10 ? `0:0${currentValue}` : `0:${currentValue}`;

  timeEl.innerHTML = `${secondValue}   / 0:${Math.round(videoEl.duration)}`;
}

progressEl.addEventListener("input", (e) => {
  videoEl.currentTime = JSON.parse(progressEl.value * videoEl.duration) / 100;
});

videoEl.addEventListener("click", (e) => {
  updateVideo();
});

fullScreenEl.addEventListener("click", (e) => {
  videoEl.requestFullscreen();
});