function showFields() {

    let shape = document.getElementById("shape").value;
    let fields = document.getElementById("fields");

    if (shape === "square") {

        fields.innerHTML = `
            <label>Side</label>
            <input type="number" id="side" placeholder="Enter side">
        `;

    }

    else if (shape === "rectangle") {

        fields.innerHTML = `
            <label>Length</label>
            <input type="number" id="length" placeholder="Enter length">

            <label>Width</label>
            <input type="number" id="width" placeholder="Enter width">
        `;

    }

    else if (shape === "triangle") {

        fields.innerHTML = `
            <label>Base</label>
            <input type="number" id="base" placeholder="Enter base">

            <label>Height</label>
            <input type="number" id="height" placeholder="Enter height">
        `;

    }

    else {

        fields.innerHTML = `
            <label>Radius</label>
            <input type="number" id="radius" placeholder="Enter radius">
        `;
    }
}


function calculateArea() {

    let shape = document.getElementById("shape").value;
    let answer;

    if (shape === "square") {

        let side = Number(document.getElementById("side").value);

        if (side <= 0) {
            document.getElementById("result").textContent = "Invalid value.";
            return;
        }

        answer = side * side;
    }

    else if (shape === "rectangle") {

        let length = Number(document.getElementById("length").value);
        let width = Number(document.getElementById("width").value);

        if (length <= 0 || width <= 0) {
            document.getElementById("result").textContent = "Invalid value.";
            return;
        }

        answer = length * width;
    }

    else if (shape === "triangle") {

        let base = Number(document.getElementById("base").value);
        let height = Number(document.getElementById("height").value);

        if (base <= 0 || height <= 0) {
            document.getElementById("result").textContent = "Invalid value.";
            return;
        }

        answer = (base * height) / 2;
    }

    else {

        let radius = Number(document.getElementById("radius").value);

        if (radius <= 0) {
            document.getElementById("result").textContent = "Invalid value.";
            return;
        }

        answer = Math.PI * radius * radius;
    }

    document.getElementById("result").textContent =
        answer.toFixed(2);
}


showFields();