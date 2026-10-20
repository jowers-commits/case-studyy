function showFields() {

    let type = document.getElementById("type").value;
    let fields = document.getElementById("fields");

    if (type === "toScientific") {

        fields.innerHTML = `
            <label>Decimal Number</label>
            <input type="number" id="decimal"
                   placeholder="Enter decimal number">
        `;

    }

    else {

        fields.innerHTML = `
            <label>Coefficient</label>
            <input type="number" id="coefficient"
                   placeholder="Example: 4.5">

            <label>Exponent</label>
            <input type="number" id="exponent"
                   placeholder="Example: 3">
        `;
    }
}


function calculate() {

    let type = document.getElementById("type").value;
    let result = document.getElementById("result");

    if (type === "toScientific") {

        let number = Number(document.getElementById("decimal").value);

        if (number === 0 || isNaN(number)) {
            result.textContent = "Invalid value.";
            return;
        }

        result.textContent = number.toExponential(2);

    }

    else {

        let coefficient =
            Number(document.getElementById("coefficient").value);

        let exponent =
            Number(document.getElementById("exponent").value);

        if (coefficient === 0 || isNaN(coefficient)) {
            result.textContent = "Invalid value.";
            return;
        }

        let answer =
            coefficient * Math.pow(10, exponent);

        result.textContent = answer;
    }
}


showFields();