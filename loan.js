function calculateLoan() {

    let loan = parseFloat(document.getElementById("loan").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let months = parseFloat(document.getElementById("months").value);

    if (isNaN(loan) || isNaN(rate) || isNaN(months) ||
        loan <= 0 || rate < 0 || months <= 0) {

        document.getElementById("result").innerHTML =
            "Please enter valid values.";
        return;
    }

    let monthlyRate = rate / 100 / 12;

    let payment;

    if (monthlyRate === 0) {
        payment = loan / months;
    } else {
        payment =
            loan *
            monthlyRate *
            Math.pow(1 + monthlyRate, months) /
            (Math.pow(1 + monthlyRate, months) - 1);
    }

    document.getElementById("result").innerHTML =
        "₱" + payment.toFixed(2);
}