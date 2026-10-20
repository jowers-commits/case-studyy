function calculateSavings() {

    let amount = parseFloat(document.getElementById("amount").value);
    let number = parseFloat(document.getElementById("number").value);

    if (isNaN(amount) || isNaN(number) || amount < 0 || number < 0) {
        document.getElementById("result").innerHTML =
            "Please enter valid values.";
        return;
    }

    let total = amount * number;

    document.getElementById("result").innerHTML =
        "₱" + total.toFixed(2);
}