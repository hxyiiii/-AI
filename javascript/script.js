document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止默认表单提交行为
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // 发送登录请求到后端验证用户名和密码

    if (username === "admin" && password === "password") {
        window.location.href = "source.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
