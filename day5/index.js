const panels = document.querySelectorAll(".panel");

function handleOpen() {
  this.classList.toggle("open");
}

function handleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

function init() {
  panels.forEach(panel => panel.addEventListener("click", handleOpen));
  panels.forEach(panel => panel.addEventListener("transitionend", handleActive));
}

init();