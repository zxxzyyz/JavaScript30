const hourHand = document.querySelector(".clock__face--hour");
const minHand = document.querySelector(".clock__face--min");
const secHand = document.querySelector(".clock__face--sec");

function setClock() {
  const now = new Date();
  const hour = now.getHours();
  const mins = now.getMinutes();
  const secs = now.getSeconds();

  const secDegree = ((secs / 60) * 360) + 90;
  secHand.style.transform = `rotate(${secDegree}deg)`;

  const minsDegrees = ((mins / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hourDegrees = ((hour / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

function init() {
  setInterval(setClock, 1000);
}

init();