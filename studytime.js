function calculateStudyTime() {

    let totalTime =
        Number(document.getElementById("totalTime").value);

    let subjects =
        Number(document.getElementById("subjects").value);

    let breakTime =
        Number(document.getElementById("breakTime").value);

    if (totalTime <= 0 || subjects <= 0 || breakTime < 0) {

        document.getElementById("result").textContent =
            "Invalid values.";

        document.getElementById("totalSession").textContent = "";

        return;
    }

    let studyPerSubject =
        totalTime / subjects;

    let totalSession =
        totalTime + (subjects * breakTime);

    document.getElementById("result").textContent =
        studyPerSubject.toFixed(2) + " minutes";

    document.getElementById("totalSession").textContent =
        "Total session including breaks: "
        + totalSession.toFixed(2)
        + " minutes";
}