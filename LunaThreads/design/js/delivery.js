document.addEventListener("DOMContentLoaded", () => {
    const deliveryMethodSelect = document.getElementById("delivery-method");
    const storeInfo = document.getElementById("store-info");
    const creditCardInfo = document.getElementById("credit-card-info");

    // 切換顯示的表單
    deliveryMethodSelect.addEventListener("change", () => {
        const selectedMethod = deliveryMethodSelect.value;

        if (selectedMethod === "store") {
            storeInfo.classList.remove("hidden");
            creditCardInfo.classList.add("hidden");
        } else if (selectedMethod === "credit-card") {
            creditCardInfo.classList.remove("hidden");
            storeInfo.classList.add("hidden");
        } else {
            storeInfo.classList.add("hidden");
            creditCardInfo.classList.add("hidden");
        }
    });

    // 表單提交事件
    const form = document.getElementById("delivery-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const deliveryMethod = deliveryMethodSelect.value;
        if (deliveryMethod === "store") {
            const storeName = document.getElementById("store-name").value;
            const storeAddress = document.getElementById("store-address").value;
            console.log("超商取貨資訊：", { storeName, storeAddress });
        } else if (deliveryMethod === "credit-card") {
            const cardNumber = document.getElementById("card-number").value;
            const expiryDate = document.getElementById("expiry-date").value;
            const cvv = document.getElementById("cvv").value;
            console.log("信用卡資訊：", { cardNumber, expiryDate, cvv });
        }

        alert("選擇已提交！");
    });
});
