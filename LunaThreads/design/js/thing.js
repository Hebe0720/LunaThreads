document.getElementById("add-to-cart-btn").addEventListener("click", function () {
    const cartAlert = document.getElementById("cart-alert");
    
    // 顯示提示框
    cartAlert.classList.add("show");
    cartAlert.classList.remove("hidden");
    
    // 設定延遲3秒後自動隱藏
    setTimeout(() => {
        cartAlert.classList.add("hidden");
        cartAlert.classList.remove("show");
    }, 3000); // 3000 毫秒 (3 秒)
});
