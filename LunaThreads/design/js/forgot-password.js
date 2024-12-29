document.addEventListener("DOMContentLoaded", () => {
    const forgotPasswordForm = document.getElementById("forgot-password-form");

    forgotPasswordForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();

        if (!email) {
            alert("請輸入電子郵件地址！");
            return;
        }

        // 模擬提交（真實應用中應發送請求到伺服器）
        console.log("重設密碼請求：", { email });

        alert("重設密碼的連結已發送至您的電子郵件！");
    });
});
