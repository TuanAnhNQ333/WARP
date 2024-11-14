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
  res.send('Welcome to the home page');
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
