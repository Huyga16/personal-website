document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");
  
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Lấy giá trị nhập vào
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
  
      // Tên và mật khẩu mặc định
      const defaultUsername = "Nguyễn Hồng Hạnh";
      const defaultPassword = "0612";
  
      // Kiểm tra thông tin
      if (username === defaultUsername && password === defaultPassword) {
        errorMessage.style.display = "none";
        // Chuyển hướng đến trang "Happy Birthday"
        window.location.href = "happy-birthday.html";
      } else {
        errorMessage.textContent = "Sai tên người dùng hoặc mật khẩu!";
        errorMessage.style.display = "block";
      }
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(balloon => {
      balloon.addEventListener('animationiteration', () => {
        // Randomize position after animation restarts
        balloon.style.left = Math.random() * 100 + '%';
      });
    });
  });
  