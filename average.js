function calculateAverage() {

    let filipino = Number(document.getElementById("filipino").value);
    let english = Number(document.getElementById("english").value);
    let mathematics = Number(document.getElementById("mathematics").value);
    let science = Number(document.getElementById("science").value);
    let ap = Number(document.getElementById("ap").value);
    let esp = Number(document.getElementById("esp").value);
    let mapeh = Number(document.getElementById("mapeh").value);
    let tle = Number(document.getElementById("tle").value);

    let total =
        filipino +
        english +
        mathematics +
        science +
        ap +
        esp +
        mapeh +
        tle;

    let average = total / 8;

    document.getElementById("average").textContent =
        average.toFixed(2);

    if (average >= 90) {
        document.getElementById("remark").textContent =
            "Outstanding";
    }
    else if (average >= 85) {
        document.getElementById("remark").textContent =
            "Very Satisfactory";
    }
    else if (average >= 80) {
        document.getElementById("remark").textContent =
            "Satisfactory";
    }
    else if (average >= 75) {
        document.getElementById("remark").textContent =
            "Fairly Satisfactory";
    }
    else {
        document.getElementById("remark").textContent =
            "Did Not Meet Expectations";
    }
}