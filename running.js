function calculatePace() {

  let distance = parseFloat(document.getElementById("distance").value);
  let time = parseFloat(document.getElementById("time").value);

  if (distance <= 0 || time <= 0) {
    document.getElementById("result").innerHTML = "Invalid";
    return;
  }

  let pace = time / distance;

  let minutes = Math.floor(pace);
  let seconds = Math.round((pace - minutes) * 60);

  if (seconds == 60) {
    minutes++;
    seconds = 0;
  }

  document.getElementById("result").innerHTML =
    minutes + ":" + String(seconds).padStart(2, "0") + " min/km";
}