// Get the Calculate button
const calculateBtn = document.getElementById("calculateBtn");


// Run the calculation when the button is clicked
calculateBtn.addEventListener("click", function () {

    // Get the values from the input fields
    let principal = Number(
        document.getElementById("principal").value
    );

    let rate = Number(
        document.getElementById("rate").value
    );

    let time = Number(
        document.getElementById("time").value
    );


    // Check if the input values are valid
    if (principal <= 0 || rate < 0 || time <= 0) {

        alert("Please enter valid values.");

        return;
    }


    // Convert percentage into decimal
    let decimalRate = rate / 100;


    // Calculate simple interest
    let interest = principal * decimalRate * time;


    // Calculate total amount
    let total = principal + interest;


    // Display the simple interest
    document.getElementById("interest").textContent =
        "₱" + interest.toFixed(2);


    // Display the total amount
    document.getElementById("total").textContent =
        "₱" + total.toFixed(2);

});