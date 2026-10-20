document.getElementById('calcBtn').addEventListener('click', function(){
  var age = parseInt(document.getElementById('age').value);
  var method = document.getElementById('method').value;
  
  if(!age || age <=0 || age > 120){
    alert("Lagay ka ng tamang age! 1-120 lang.");
    return;
  }

  var maxHR = 0;
  if(method == "220"){
    maxHR = 220 - age;
  } else {
    maxHR = Math.round(208 - (0.7 * age));
  }

  document.getElementById('maxHR').innerText = maxHR + " bpm";
  document.getElementById('zone1').innerText = Math.round(maxHR*0.5) + " - " + Math.round(maxHR*0.6);
  document.getElementById('zone2').innerText = Math.round(maxHR*0.6) + " - " + Math.round(maxHR*0.7);
  document.getElementById('zone3').innerText = Math.round(maxHR*0.7) + " - " + Math.round(maxHR*0.8);
  document.getElementById('zone4').innerText = Math.round(maxHR*0.8) + " - " + Math.round(maxHR*0.9);

  var note = "";
  if(age < 20) note = "Bata ka pa, mataas pa max HR mo.";
  else if(age < 40) note = "Ideal age for fat burn and cardio.";
  else note = "Focus sa warm-up at fat burn zone para safe.";

  document.getElementById('note').innerText = note;
  document.getElementById('result').style.display = "block";
});