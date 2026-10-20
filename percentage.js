function calculatePercentage() {

    let percentage = Number(
        document.getElementById("percentage").value
    );

    let number = Number(
        document.getElementById("number").value
    );

    let result = (percentage / 100) * number;

    document.getElementById("result").textContent =
        result.toFixed(2);
}