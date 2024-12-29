document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("register-form");

    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirm-password").value.trim();
        const phone = document.getElementById("phone").value.trim();

        // 驗證密碼是否一致
        if (password !== confirmPassword) {
            alert("密碼與確認密碼不一致，請重新輸入！");
            return;
        }

        // 模擬提交（真實應用中應發送請求到伺服器進行驗證）
        console.log("註冊資訊：", { name, email, password, phone });

        alert("註冊成功！");
    });
});
