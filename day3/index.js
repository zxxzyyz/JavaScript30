function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

function init() {
  const controls = document.querySelectorAll(".controls input");
  controls.forEach(element => element.addEventListener("input", handleUpdate));
}

init();