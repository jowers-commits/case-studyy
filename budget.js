// Get the Calculate Budget button
const calculateBtn = document.getElementById("calculateBtn");


// Run the calculation when the button is clicked
calculateBtn.addEventListener("click", function () {

    // Get the income
    let income = Number(
        document.getElementById("income").value
    );


    // Get the expenses
    let food = Number(
        document.getElementById("food").value
    );

    let transport = Number(
        document.getElementById("transport").value
    );

    let utilities = Number(
        document.getElementById("utilities").value
    );

    let other = Number(
        document.getElementById("other").value
    );


    // Check if income is valid
    if (income <= 0) {

        alert("Please enter your income.");

        return;
    }


    // Calculate total expenses
    let totalExpenses =
        food +
        transport +
        utilities +
        other;


    // Calculate remaining budget
    let remainingBudget =
        income - totalExpenses;


    // Display total expenses
    document.getElementById("expenses").textContent =
        "₱" + totalExpenses.toFixed(2);


    // Display remaining budget
    document.getElementById("remaining").textContent =
        "₱" + remainingBudget.toFixed(2);

});