const express = require('express'); // framework
const app = express();  // object tao tu express dung cau hinh route, middleware
const port = 3001; 
const pathModule = require('path'); // thu vien path : lam viec voi cac duong dan path
const fs = require('fs'); // thu vien file system lam viec voi he thong tep

app.use(express.urlencoded({ extended: true })); // middleware xu ly du lieu trong body cua request, phuong thuc : POST.express.urlencoded()\

// Set view engine
app.set('view engine', 'ejs');
app.set('views', pathModule.join(__dirname, 'views'));

// Đường dẫn đến file users.json
const usersPath = './users.json';

// Kiểm tra sự tồn tại của file users.json và tạo nếu không có
const checkIfFileExists = () => {
  try {
    if (!fs.existsSync(usersPath)) {
      fs.writeFileSync(usersPath, JSON.stringify([])); // Tạo file rỗng nếu không tồn tại
      console.log('users.json file created');
    }
  } catch (err) {
    console.log('Error creating users.json file:', err);
  }
};

// Route chính
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Route cho trang login
app.get('/login', (req, res) => {
  res.render('login');
});

// Route cho trang signup
app.get('/signup', (req, res) => {
  res.render('signup');
});

// Xử lý đăng ký người dùng
app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  const newUser = { username, password };

  checkIfFileExists();

  // Đọc dữ liệu từ file users.json
  fs.readFile(usersPath, (err, data) => {
    if (err) {
      return res.send('Error reading user data!');
    }

    let users = [];
    try {
      users = JSON.parse(data);  // Nếu dữ liệu không hợp lệ, sẽ trả về mảng rỗng
    } catch (e) {
      console.log('Invalid JSON in users.json, resetting data.');
      users = [];  // Nếu có lỗi trong việc phân tích cú pháp, trả về mảng rỗng
    }

    // Kiểm tra nếu người dùng đã tồn tại
    if (users.some(u => u.username === username)) {
      return res.send('Username already exists!');
    }

    users.push(newUser);

    // Ghi dữ liệu vào file
    fs.writeFile(usersPath, JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.send('Error saving user data!');
      }
      res.redirect('/login');
    });
  });
});

// Xử lý đăng nhập người dùng
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  checkIfFileExists();

  fs.readFile(usersPath, (err, data) => {
    if (err) {
      return res.send('Error reading user data!');
    }

    let users = [];
    try {
      users = JSON.parse(data);  // Nếu dữ liệu không hợp lệ, sẽ trả về mảng rỗng
    } catch (e) {
      console.log('Invalid JSON in users.json, resetting data.');
      users = [];  // Nếu có lỗi trong việc phân tích cú pháp, trả về mảng rỗng
    }

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      res.send('Login successful!');
    } else {
      res.send('Invalid username or password!');
    }
  });
});

// Lắng nghe yêu cầu ở cổng 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
