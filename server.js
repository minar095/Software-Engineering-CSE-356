// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());
// app.use(express.static('public'));
// const users = [
//   {
//     id: 1,
//     username: 'johndoe',
//     password: '123456',
//     name: 'John Doe',
//     profileImage: 'https://via.placeholder.com/50',
//     email: 'johndoe@example.com',
//   },

//   {
//     id: 2,
//     username: 'janedoe',
//     password: 'abcdef',
//     name: 'Jane Doe',
//     profileImage: 'https://via.placeholder.com/50',
//     email: 'janedoe@example.com',
//   },
// ];

// let loggedInUser = null;

// // Login endpoint
// app.post('/login', (req, res) => {
//   const { username, password } = req.body;

//   const user = users.find(
//     (u) => u.username === username && u.password === password
//   );

//   if (user) {
//     loggedInUser = user;
//     res.status(200).json({ success: true, user });
//   } else {
//     res.status(401).json({ success: false, message: 'Invalid credentials' });
//   }
// });

// // Get logged-in user
// app.get('/user', (req, res) => {
//   if (loggedInUser) {
//     res.status(200).json(loggedInUser);
//   } else {
//     res.status(401).json({ success: false, message: 'Not logged in' });
//   }
// });

// // Logout endpoint
// app.post('/logout', (req, res) => {
//   loggedInUser = null;
//   res.status(200).json({ success: true, message: 'Logged out successfully' });
// });

// // Start server
// app.listen(8080, () => {
//   console.log('Server running on http://localhost:8080');
// });



const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// Serve static files (like CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Your other routes (if any)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
