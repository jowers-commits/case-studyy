document.getElementById("discountForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const originalPrice = parseFloat(document.getElementById("originalPrice").value);
    const discount = parseFloat(document.getElementById("discount").value);
    const result = document.getElementById("result");

    if (isNaN(originalPrice) || isNaN(discount)) {
        result.innerHTML = "Please enter valid numbers.";
        return;
    }

    if (originalPrice < 0 || discount < 0 || discount > 100) {
        result.innerHTML = "Please enter a valid price and discount (0–100%).";
        return;
    }

    const discountAmount = originalPrice * (discount / 100);
    const finalPrice = originalPrice - discountAmount;

    result.innerHTML = `
        <div class="result-box">
            <p><strong>Original Price:</strong> ₱${originalPrice.toFixed(2)}</p>
            <p><strong>Discount:</strong> ${discount.toFixed(2)}%</p>
            <p><strong>Discount Amount:</strong> ₱${discountAmount.toFixed(2)}</p>
            <p class="final-price"><strong>Final Price:</strong> ₱${finalPrice.toFixed(2)}</p>
        </div>
    `;
});