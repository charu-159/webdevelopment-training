let is24Hour = false;

function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = String(now.getMinutes()).padStart(2, '0');
  let seconds = String(now.getSeconds()).padStart(2, '0');
  let ampm = hours >= 12 ? 'PM' : 'AM';

  if (!is24Hour) {
    hours = hours % 12 || 12;
  }

  document.getElementById("clock").innerText =
    `${String(hours).padStart(2, '0')}:${minutes}:${seconds}` + (is24Hour ? '' : ` ${ampm}`);

  let dateStr = now.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  document.getElementById("date").innerText = dateStr;

  let greeting = hours < 12 ? "Good Morning!" :
                 hours < 18 ? "Good Afternoon!" : "Good Evening!";
  document.getElementById("greeting").innerText = greeting;
}

function toggleFormat() {
  is24Hour = !is24Hour;
  updateClock();
}

function setAlarm() {
  let time = prompt("Enter alarm time (HH:MM):");
  alert(`Alarm set for ${time}`);
}

setInterval(updateClock, 1000);
updateClock();
