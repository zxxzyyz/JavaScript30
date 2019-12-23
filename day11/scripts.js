const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const screen = player.querySelector(".screen");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

function tooglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function updateButton() {
  const icon = this.paused ? "▶" : "⏸";
  toggle.textContent = icon;
}

function skipButton(e) {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

let mousedown = false;
// Update button
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
// play and pause
video.addEventListener("click", tooglePlay);
// Update progressBar
video.addEventListener("timeupdate", handleProgress);

// play and pause
toggle.addEventListener("click", tooglePlay);

// backward 10 seconds and forward 25 seconds
skipButtons.forEach(btn => btn.addEventListener("click", skipButton));

// Update volume and play speed
ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));
ranges.forEach(range => range.addEventListener("mousemove", handleRangeUpdate));

// Updating progressBar, clicking and dragging
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", e => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));

// Fullscreen
screen.addEventListener("click", () => video.webkitRequestFullScreen());
