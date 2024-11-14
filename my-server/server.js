// Import Express
const express = require('express');

// Khởi tạo ứng dụng Express
const app = express();

// Thiết lập cổng
const PORT = process.env.PORT || 3000;

// Định nghĩa một route cơ bản
app.get('/', (req, res) => {
  res.send('Hello, warp!');
});

// Lắng nghe kết nối trên cổng đã thiết lập
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
