const keys = document.g

function handleKeyDown(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
  audio.addEventListener("ended", playend);
}

function playend(e) {
  const num = e.srcElement.dataset.key;
  const key = document.querySelector(`div[data-key="${num}"]`);
  key.classList.remove("playing");
}

function handleTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function init() {
  window.addEventListener("keydown", handleKeyDown)
  const keys = Array.from(document.querySelectorAll(".keys"));
  keys.forEach(element => {
    element.addEventListener("transitionend", handleTransition);
  });
}

init();