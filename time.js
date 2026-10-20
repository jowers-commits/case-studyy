function calculateDuration() {
    let start = document.getElementById("startTime").value;
    let end = document.getElementById("endTime").value;
    let resultDisplay = document.getElementById("result");

    if (start === "" || end === "") {
        resultDisplay.innerHTML = "<p>Please enter both start and end time.</p>";
        return;
    }

    // I-convert ang oras sa minutes
    let startParts = start.split(":");
    let endParts = end.split(":");

    let startMinutes = parseInt(startParts[0]) * 60 + parseInt(startParts[1]);
    let endMinutes = parseInt(endParts[0]) * 60 + parseInt(endParts[1]);

    // Kung mas maaga ang end kaysa start, ibig sabihin umabot ng next day
    if (endMinutes < startMinutes) {
        endMinutes += 24 * 60;
    }

    let diff = endMinutes - startMinutes;
    let hours = Math.floor(diff / 60);
    let minutes = diff % 60;

    resultDisplay.innerHTML = `
        <p><strong>Duration:</strong></p>
        <p>${hours} hour(s) and ${minutes} minute(s)</p>
    `;
}