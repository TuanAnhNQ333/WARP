// Import Express
const express = require('express');

// Khởi tạo ứng dụng Express
const app = express();

// Thiết lập cổng
const PORT = process.env.PORT || 3000;

// Định nghĩa một route cơ bản
app.get('/', (req, res) => {
  res.send('Hello, WARP!');
});

// Lắng nghe kết nối trên cổng đã thiết lập
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(express.json());
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });
app.get('/about', (req, res) => {
    res.send('About Page');
  });
  
app.post('/data', (req, res) => {
    res.json({ message: 'Data received', data: req.body });
  });
  