 // Get the Calculate GPA button
const calculateBtn = document.getElementById("calculateBtn");


// Run the calculation when the button is clicked
calculateBtn.addEventListener("click", function () {

    // Get the grades entered by the user
    let grade1 = Number(document.getElementById("grade1").value);
    let grade2 = Number(document.getElementById("grade2").value);
    let grade3 = Number(document.getElementById("grade3").value);
    let grade4 = Number(document.getElementById("grade4").value);


    // Check if all grades are entered
    if (
        grade1 <= 0 ||
        grade2 <= 0 ||
        grade3 <= 0 ||
        grade4 <= 0
    ) {

        alert("Please enter all grades.");

        return;
    }


    // Add all grades
    let totalGrades =
        grade1 + grade2 + grade3 + grade4;


    // Calculate the average
    let gpa =
        totalGrades / 4;


    // Display the GPA
    document.getElementById("gpa").textContent =
        gpa.toFixed(2);

});