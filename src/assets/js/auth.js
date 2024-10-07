document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngăn chặn việc gửi form mặc định

    // Lấy dữ liệu từ form
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Kiểm tra thông tin người dùng (tạm thời dùng một ví dụ đơn giản)
    if (email === 'user@example.com' && password === '123456') {
        alert('Đăng nhập thành công!');
        window.location.href = 'Profile.html'; // Điều hướng đến trang cá nhân
    } else {
        alert('Thông tin đăng nhập không hợp lệ.');
    }
});
// Xử lý form đăng ký
document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngăn form gửi đi mặc định

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    // Kiểm tra mật khẩu và xác nhận mật khẩu có trùng khớp không
    if (password !== confirmPassword) {
        alert('Mật khẩu và xác nhận mật khẩu không khớp.');
        return;
    }

    // Giả lập lưu thông tin người dùng (ở đây bạn có thể kết nối với backend)
    console.log('Đăng ký thành công với tên:', name, 'và email:', email);

    // Điều hướng người dùng tới trang đăng nhập
    window.location.href = 'Login.html';
});
