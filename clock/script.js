const Hour = document.querySelector(".hours");
const Minute = document.querySelector(".minute");
const Second = document.querySelector(".seconds");

function setDate() {
  const date = new Date();

  const sec = date.getSeconds();
  const secDegrees = (sec / 60) * 360 + 360;
  Second.style.transform = `rotate(${secDegrees}deg)`;

  const minute = date.getMinutes();
  const minDegrees = (minute / 60) * 360;
  Minute.style.transform = `rotate(${minDegrees}deg)`;

  const hour = date.getHours();
  const hourDegrees = (hour / 12) * 360;
  Hour.style.transform = `rotate(${hourDegrees}deg)`;
}

setDate();
setInterval(setDate, 1000);
