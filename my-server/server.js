const express = require('express'); // framework
const app = express();  // object app tao tu express 
const port = 3000; 
const pathModule = require('path'); // thu vien path : lam viec voi cac duong dan path
const fs = require('fs'); // thu vien file system lam viec voi he thong tep

app.use(express.urlencoded({ extended: true })); // middleware xu ly du lieu trong body cua request, phuong thuc : POST.express.urlencoded()\

// Set view engine
app.set('view engine', 'ejs'); // ejs render view
app.set('views', pathModule.join(__dirname, 'views')); // xac dinh thu muc chua file view. --dirname : bien global trong node.js

// set path 
const usersPath = './users.json';
// kiem tra du lieu nguoi dung
const checkIfFileExists = () => {
  try {
    if (!fs.existsSync(usersPath)) {
      fs.writeFileSync(usersPath, JSON.stringify([])); // Tạo file trong neu file ton tai
      console.log('users.json file created');
    }
  } catch (err) {
    console.log('Error creating users.json file:', err);
  }
};

// Route trang chu
app.get('/', (req, res) => {
  res.send('Hello WARP!');
});

// Route cho trang login
app.get('/login', (req, res) => {
  res.render('login');
});

// Route cho trang signup
app.get('/signup', (req, res) => {
  res.render('signup');
});

// xu ly dang ky nguoi dung
app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  const newUser = { username, password };
// app.post : xu ly yeu cau http post den route 

  checkIfFileExists();

  // filesystem read 
  fs.readFile(usersPath, (err, data) => {
    if (err) {
      return res.send('Error reading user data!');
    }

    let users = [];
    try {
      users = JSON.parse(data);  // data err -> tra ve rong
    } catch (e) {
      console.log('Invalid JSON in users.json, resetting data.');
      users = [];  
    }

    // check info
    if (users.some(u => u.username === username)) {
      return res.send('Username already exists!');
    }

    users.push(newUser);

    // read to file json
    fs.writeFile(usersPath, JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.send('Error saving user data!');
      }
      res.redirect('/login');
    });
  });
});

// login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  checkIfFileExists();

  fs.readFile(usersPath, (err, data) => {
    if (err) {
      return res.send('Error reading user data!');
    }

    let users = [];
    try {
      users = JSON.parse(data);  // err data -> rong
    } catch (e) {
      console.log('Invalid JSON in users.json, resetting data.');
      users = [];  // err -> loi
    }

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      res.send('Login successful!');
    } else {
      res.send('Invalid username or password!');
    }
  });
});

// check request 
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
