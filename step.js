function calculateDistance() {
  let steps = Number(document.getElementById("steps").value);
  let heightCm = Number(document.getElementById("height").value);
  let factor = Number(document.getElementById("gender").value);

  if (!steps) {
    document.getElementById("result").textContent = "Enter steps first";
    return;
  }

  
  let stride;
  if (heightCm) {
    
    stride = (heightCm / 100) * factor;
  } else {
    stride = 0.76;
  }

  let distanceMeters = steps * stride;
  let distanceKm = distanceMeters / 1000;
  let distanceMiles = distanceKm * 0.621371;

  document.getElementById("result").textContent = distanceKm.toFixed(2) + " km";
  document.getElementById("details").textContent = 
    `${distanceMeters.toFixed(0)} meters | ${distanceMiles.toFixed(2)} miles | Stride: ${stride.toFixed(2)}m`;
}