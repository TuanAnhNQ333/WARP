const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Cấu hình body-parser để xử lý dữ liệu từ form
app.use(bodyParser.urlencoded({ extended: true }));

// Thiết lập EJS làm view engine
app.set('view engine', 'ejs');

// Cấu hình cổng
const PORT = process.env.PORT || 3000;

// Route trang chính
app.get('/', (req, res) => {
  res.send('Welcome to the home page')``;
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// Route trang đăng nhập
app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Thực hiện xác thực người dùng
  res.send(`Logged in as ${username}`);
});

// Route trang đăng ký
app.get('/signup', (req, res) => {
  res.render('signup');
});

app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  // Lưu thông tin người dùng mới vào cơ sở dữ liệu (giả sử)
  res.send(`User ${username} signed up successfully!`);
});
