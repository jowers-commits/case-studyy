var calculateType = document.getElementById("calculateType");

var label1 = document.getElementById("label1");
var label2 = document.getElementById("label2");

var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");

var unit1 = document.getElementById("unit1");
var unit2 = document.getElementById("unit2");

var calculateButton =
document.getElementById("calculateButton");

var result =
document.getElementById("result");

var formula =
document.getElementById("formula");

var note =
document.getElementById("note");


// ================================
// CHANGE CALCULATOR
// ================================

calculateType.addEventListener("change", function () {

var type = calculateType.value;

input1.value = "";
input2.value = "";

result.innerHTML = "—";

note.innerHTML =
"Enter the values and click Calculate.";


// SPEED
if (type === "speed") {

label1.innerHTML = "Distance";
label2.innerHTML = "Time";

input1.placeholder = "Enter distance";
input2.placeholder = "Enter time";

unit1.innerHTML =
'<option value="km">Kilometers (km)</option>' +
'<option value="m">Meters (m)</option>' +
'<option value="mi">Miles (mi)</option>';

unit2.innerHTML =
'<option value="h">Hours</option>' +
'<option value="min">Minutes</option>' +
'<option value="sec">Seconds</option>';

formula.innerHTML =
"Speed = Distance ÷ Time";
}


// DISTANCE
if (type === "distance") {

label1.innerHTML = "Speed";
label2.innerHTML = "Time";

input1.placeholder = "Enter speed";
input2.placeholder = "Enter time";

unit1.innerHTML =
'<option value="kmh">Kilometers/hour (km/h)</option>' +
'<option value="ms">Meters/second (m/s)</option>' +
'<option value="mph">Miles/hour (mph)</option>';

unit2.innerHTML =
'<option value="h">Hours</option>' +
'<option value="min">Minutes</option>' +
'<option value="sec">Seconds</option>';

formula.innerHTML =
"Distance = Speed × Time";
}


// TIME
if (type === "time") {

label1.innerHTML = "Distance";
label2.innerHTML = "Speed";

input1.placeholder = "Enter distance";
input2.placeholder = "Enter speed";

unit1.innerHTML =
'<option value="km">Kilometers (km)</option>' +
'<option value="m">Meters (m)</option>' +
'<option value="mi">Miles (mi)</option>';

unit2.innerHTML =
'<option value="kmh">Kilometers/hour (km/h)</option>' +
'<option value="ms">Meters/second (m/s)</option>' +
'<option value="mph">Miles/hour (mph)</option>';

formula.innerHTML =
"Time = Distance ÷ Speed";
}

});


// ================================
// CALCULATE BUTTON
// ================================

calculateButton.addEventListener("click", function () {

var type = calculateType.value;

var value1 = parseFloat(input1.value);
var value2 = parseFloat(input2.value);

var u1 = unit1.value;
var u2 = unit2.value;


// CHECK EMPTY INPUT

if (isNaN(value1) || isNaN(value2)) {

result.innerHTML = "Invalid";

note.innerHTML =
"Please enter both values.";

return;
}


// CHECK NEGATIVE VALUES

if (value1 < 0 || value2 < 0) {

result.innerHTML = "Invalid";

note.innerHTML =
"Please enter positive values.";

return;
}


// ================================
// SPEED
// ================================

if (type === "speed") {

var distanceKm = 0;
var timeHours = 0;


// DISTANCE TO KM

if (u1 === "km") {
distanceKm = value1;
}

if (u1 === "m") {
distanceKm = value1 / 1000;
}

if (u1 === "mi") {
distanceKm = value1 * 1.609344;
}


// TIME TO HOURS

if (u2 === "h") {
timeHours = value2;
}

if (u2 === "min") {
timeHours = value2 / 60;
}

if (u2 === "sec") {
timeHours = value2 / 3600;
}


if (timeHours === 0) {

result.innerHTML = "Invalid";

note.innerHTML =
"Time cannot be zero.";

return;
}


var speed = distanceKm / timeHours;


result.innerHTML =
speed.toFixed(2) + " km/h";

note.innerHTML =
"Speed = Distance ÷ Time";
}


// ================================
// DISTANCE
// ================================

if (type === "distance") {

var speedKmh = 0;
var timeHours2 = 0;


// SPEED TO KM/H

if (u1 === "kmh") {
speedKmh = value1;
}

if (u1 === "ms") {
speedKmh = value1 * 3.6;
}

if (u1 === "mph") {
speedKmh = value1 * 1.609344;
}


// TIME TO HOURS

if (u2 === "h") {
timeHours2 = value2;
}

if (u2 === "min") {
timeHours2 = value2 / 60;
}

if (u2 === "sec") {
timeHours2 = value2 / 3600;
}


var distance =
speedKmh * timeHours2;


result.innerHTML =
distance.toFixed(2) + " km";

note.innerHTML =
"Distance = Speed × Time";
}


// ================================
// TIME
// ================================

if (type === "time") {

var distanceKm2 = 0;
var speedKmh2 = 0;


// DISTANCE TO KM

if (u1 === "km") {
distanceKm2 = value1;
}

if (u1 === "m") {
distanceKm2 = value1 / 1000;
}

if (u1 === "mi") {
distanceKm2 = value1 * 1.609344;
}


// SPEED TO KM/H

if (u2 === "kmh") {
speedKmh2 = value2;
}

if (u2 === "ms") {
speedKmh2 = value2 * 3.6;
}

if (u2 === "mph") {
speedKmh2 = value2 * 1.609344;
}


if (speedKmh2 === 0) {

result.innerHTML = "Invalid";

note.innerHTML =
"Speed cannot be zero.";

return;
}


var totalHours =
distanceKm2 / speedKmh2;


var hours =
Math.floor(totalHours);

var minutes =
Math.round(
(totalHours - hours) * 60
);


// FIX 60 MINUTES

if (minutes === 60) {

hours = hours + 1;
minutes = 0;
}


if (hours === 0) {

result.innerHTML =
minutes + " min";

} else {

result.innerHTML =
hours + " hr " +
minutes + " min";
}


note.innerHTML =
"Time = Distance ÷ Speed";
}

});
