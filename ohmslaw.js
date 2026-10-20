function showFields() {

    let type = document.getElementById("calculateType").value;
    let fields = document.getElementById("fields");

    if (type === "voltage") {

        fields.innerHTML = `
            <label>Current (I)</label>
            <input type="number" id="current" placeholder="Enter current">

            <label>Resistance (R)</label>
            <input type="number" id="resistance" placeholder="Enter resistance">
        `;

    }

    else if (type === "current") {

        fields.innerHTML = `
            <label>Voltage (V)</label>
            <input type="number" id="voltage" placeholder="Enter voltage">

            <label>Resistance (R)</label>
            <input type="number" id="resistance" placeholder="Enter resistance">
        `;

    }

    else {

        fields.innerHTML = `
            <label>Voltage (V)</label>
            <input type="number" id="voltage" placeholder="Enter voltage">

            <label>Current (I)</label>
            <input type="number" id="current" placeholder="Enter current">
        `;
    }
}


function calculate() {

    let type = document.getElementById("calculateType").value;
    let answer;

    if (type === "voltage") {

        let current = Number(document.getElementById("current").value);
        let resistance = Number(document.getElementById("resistance").value);

        if (current <= 0 || resistance <= 0) {
            showError();
            return;
        }

        answer = current * resistance;

    }

    else if (type === "current") {

        let voltage = Number(document.getElementById("voltage").value);
        let resistance = Number(document.getElementById("resistance").value);

        if (voltage <= 0 || resistance <= 0) {
            showError();
            return;
        }

        answer = voltage / resistance;

    }

    else {

        let voltage = Number(document.getElementById("voltage").value);
        let current = Number(document.getElementById("current").value);

        if (voltage <= 0 || current <= 0) {
            showError();
            return;
        }

        answer = voltage / current;
    }

    document.getElementById("result").textContent =
        answer.toFixed(2);
}


function showError() {

    document.getElementById("result").textContent =
        "Invalid values.";
}


showFields();