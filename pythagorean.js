function showFields() {

    let type = document.getElementById("calculateType").value;
    let fields = document.getElementById("fields");

    if (type === "hypotenuse") {

        fields.innerHTML = `
            <label>Side A (a)</label>
            <input type="number" id="sideA" placeholder="Enter side A">

            <label>Side B (b)</label>
            <input type="number" id="sideB" placeholder="Enter side B">
        `;

    }

    else if (type === "sideA") {

        fields.innerHTML = `
            <label>Hypotenuse (c)</label>
            <input type="number" id="hypotenuse" placeholder="Enter hypotenuse">

            <label>Side B (b)</label>
            <input type="number" id="sideB" placeholder="Enter side B">
        `;

    }

    else {

        fields.innerHTML = `
            <label>Hypotenuse (c)</label>
            <input type="number" id="hypotenuse" placeholder="Enter hypotenuse">

            <label>Side A (a)</label>
            <input type="number" id="sideA" placeholder="Enter side A">
        `;
    }
}


function calculate() {

    let type = document.getElementById("calculateType").value;
    let answer;

    if (type === "hypotenuse") {

        let a = Number(document.getElementById("sideA").value);
        let b = Number(document.getElementById("sideB").value);

        if (a <= 0 || b <= 0) {
            showError();
            return;
        }

        answer = Math.sqrt((a * a) + (b * b));

    }

    else if (type === "sideA") {

        let c = Number(document.getElementById("hypotenuse").value);
        let b = Number(document.getElementById("sideB").value);

        if (c <= 0 || b <= 0 || c <= b) {
            showError();
            return;
        }

        answer = Math.sqrt((c * c) - (b * b));

    }

    else {

        let c = Number(document.getElementById("hypotenuse").value);
        let a = Number(document.getElementById("sideA").value);

        if (c <= 0 || a <= 0 || c <= a) {
            showError();
            return;
        }

        answer = Math.sqrt((c * c) - (a * a));
    }

    document.getElementById("result").textContent =
        answer.toFixed(2);
}


function showError() {

    document.getElementById("result").textContent =
        "Invalid values.";
}


showFields();