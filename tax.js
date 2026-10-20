document.getElementById("taxForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const price = parseFloat(document.getElementById("price").value);
    const taxRate = parseFloat(document.getElementById("taxRate").value);
    const result = document.getElementById("result");

    if (isNaN(price) || isNaN(taxRate)) {
        result.innerHTML = "Please enter valid numbers.";
        return;
    }

    if (price < 0 || taxRate < 0) {
        result.innerHTML = "Please enter positive values.";
        return;
    }

    const taxAmount = price * (taxRate / 100);
    const totalPrice = price + taxAmount;

    result.innerHTML = `
        <div class="result-box">
            <p><strong>Original Amount:</strong> ₱${price.toFixed(2)}</p>
            <p><strong>Tax Rate:</strong> ${taxRate.toFixed(2)}%</p>
            <p><strong>Tax Amount:</strong> ₱${taxAmount.toFixed(2)}</p>
            <p class="total-price">
                <strong>Total Price:</strong> ₱${totalPrice.toFixed(2)}
            </p>
        </div>
    `;
});