document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (email === "" || password === "") {
            alert("請填寫所有欄位！");
            return;
        }

        // 模擬登入驗證（真實應用中應發送請求到伺服器進行驗證）
        console.log("登入資訊：", { email, password });

        alert("登入成功！");
    });
});
