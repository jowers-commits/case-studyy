// Get the elements from HTML
const conversion = document.getElementById("conversion");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const convertBtn = document.getElementById("convertBtn");


// Available units
const units = {

    length: ["cm", "m"],

    weight: ["kg", "g"],

    temperature: ["°C", "°F"]

};


// Display the units based on conversion type
function updateUnits() {

    let type = conversion.value;

    fromUnit.innerHTML = "";
    toUnit.innerHTML = "";


    units[type].forEach(function(unit) {

        let option1 = document.createElement("option");
        option1.value = unit;
        option1.textContent = unit;

        fromUnit.appendChild(option1);


        let option2 = document.createElement("option");
        option2.value = unit;
        option2.textContent = unit;

        toUnit.appendChild(option2);

    });


    // Automatically select different units
    if (units[type].length > 1) {
        toUnit.selectedIndex = 1;
    }
}


// Run when conversion type changes
conversion.addEventListener("change", updateUnits);


// Convert the value
convertBtn.addEventListener("click", function() {

    let value = Number(
        document.getElementById("value").value
    );

    let type = conversion.value;
    let from = fromUnit.value;
    let to = toUnit.value;


    // Check the input
    if (isNaN(value)) {

        alert("Please enter a value.");

        return;
    }


    let result;


    // LENGTH
    if (type === "length") {

        if (from === "cm" && to === "m") {
            result = value / 100;
        }

        else if (from === "m" && to === "cm") {
            result = value * 100;
        }

        else {
            result = value;
        }
    }


    // WEIGHT
    else if (type === "weight") {

        if (from === "kg" && to === "g") {
            result = value * 1000;
        }

        else if (from === "g" && to === "kg") {
            result = value / 1000;
        }

        else {
            result = value;
        }
    }


    // TEMPERATURE
    else if (type === "temperature") {

        if (from === "°C" && to === "°F") {
            result = (value * 9 / 5) + 32;
        }

        else if (from === "°F" && to === "°C") {
            result = (value - 32) * 5 / 9;
        }

        else {
            result = value;
        }
    }


    // Display the result
    document.getElementById("result").textContent =
        result.toFixed(2) + " " + to;


    // Display the formula
    document.getElementById("formula").textContent =
        from + " → " + to;

});


// Load the units when the page opens
updateUnits();