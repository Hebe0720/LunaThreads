document.addEventListener("DOMContentLoaded", () => {
    const itemCount = document.getElementById("item-count");
    const cartTotal = document.getElementById("cart-total");

    // 計算總數與總金額
    function updateCartSummary() {
        const rows = document.querySelectorAll("tbody tr");
        let totalItems = 0;
        let totalPrice = 0;

        rows.forEach(row => {
            const quantity = parseInt(row.children[3].innerText);
            const price = parseFloat(row.children[2].innerText.replace("$", ""));
            totalItems += quantity;
            totalPrice += quantity * price;
        });

        itemCount.innerText = totalItems;
        cartTotal.innerText = `$${totalPrice.toFixed(2)}`;
    }

    // 初始化
    updateCartSummary();
});
