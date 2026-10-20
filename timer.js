let timerInterval;

function startTimer() {

    clearInterval(timerInterval);

    let minutes = parseInt(document.getElementById("minutes").value) || 0;
    let seconds = parseInt(document.getElementById("seconds").value) || 0;

    let totalSeconds = (minutes * 60) + seconds;

    if (totalSeconds <= 0) {
        document.getElementById("timer").innerHTML = "00:00";
        return;
    }

    showTime(totalSeconds);

    timerInterval = setInterval(function() {

        totalSeconds--;

        showTime(totalSeconds);

        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
        }

    }, 1000);
}

function showTime(totalSeconds) {

    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    document.getElementById("timer").innerHTML =
        minutes + ":" + seconds;
}

function stopTimer() {
    clearInterval(timerInterval);
}