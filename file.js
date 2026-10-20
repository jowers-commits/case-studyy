const converterForm = document.getElementById("converterForm");

const result = document.getElementById("result");

const resultValue = document.getElementById("resultValue");

const formula = document.getElementById("formula");


converterForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const amount = parseFloat(
        document.getElementById("amount").value
    );

    const fromUnit =
        document.getElementById("fromUnit").value;

    const toUnit =
        document.getElementById("toUnit").value;


    if (!Number.isFinite(amount) || amount < 0) {

        showError("Please enter a valid file size.");

        return;
    }


    const bytes = convertToBytes(
        amount,
        fromUnit
    );

    const converted = convertFromBytes(
        bytes,
        toUnit
    );


    result.style.display = "block";


    resultValue.textContent =
        formatNumber(converted) +
        " " +
        getUnitLabel(toUnit);


    formula.textContent =
        `${formatNumber(amount)} ${getUnitLabel(fromUnit)} = ${formatNumber(converted)} ${getUnitLabel(toUnit)}`;


    result.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });

});


function convertToBytes(value, unit) {

    const multipliers = {

        bit: 0.125,

        byte: 1,

        KB: 1000,

        MB: 1000000,

        GB: 1000000000,

        TB: 1000000000000,

        PB: 1000000000000000

    };


    return value * multipliers[unit];

}


function convertFromBytes(bytes, unit) {

    const multipliers = {

        bit: 0.125,

        byte: 1,

        KB: 1000,

        MB: 1000000,

        GB: 1000000000,

        TB: 1000000000000,

        PB: 1000000000000000

    };


    return bytes / multipliers[unit];

}


function getUnitLabel(unit) {

    const labels = {

        bit: "b",

        byte: "B",

        KB: "KB",

        MB: "MB",

        GB: "GB",

        TB: "TB",

        PB: "PB"

    };


    return labels[unit];

}


function formatNumber(number) {

    return number.toLocaleString(
        undefined,
        {
            maximumFractionDigits: 8
        }
    );

}


function showError(message) {

    result.style.display = "block";

    resultValue.textContent = "Error";

    formula.textContent = message;

}





