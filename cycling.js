function calculateSpeed() {
  let distance = Number(document.getElementById("distance").value);
  let hours = Number(document.getElementById("hours").value) || 0;
  let minutes = Number(document.getElementById("minutes").value) || 0;

  if (!distance) {
    document.getElementById("result").textContent = "Enter distance";
    return;
  }

  let totalHours = hours + (minutes / 60);
  
  if (totalHours <= 0) {
    document.getElementById("result").textContent = "Enter time";
    return;
  }


  let speedKmh = distance / totalHours;
  let speedMph = speedKmh * 0.621371;

  document.getElementById("result").textContent = speedKmh.toFixed(2) + " km/h";
  document.getElementById("details").textContent = 
    `${speedMph.toFixed(2)} mph | Pace: ${(60 / speedKmh).toFixed(1)} min/km`;
}