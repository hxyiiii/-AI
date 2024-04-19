document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // 防止表单默认提交行为

    // 获取注册表单中的用户名和密码
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;

    // 检验注册是否成功
    if (isUsernameAvailable(newUsername)) {
        // 应将用户名和密码发送到后端保存到数据库
        alert("Registration successful!");
        // 注册成功后，跳转到登录页面进行登录
        window.location.href = "log_In.html";
    } else {
        alert("Username already exists. Please choose a different username.");
    }
});

// 用户名唯一性检查函数
function isUsernameAvailable(username) {
    // 这里应发送请求到后端进行用户名唯一性检查，此处假设用户名不重复
    return true;
}
