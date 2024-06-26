// server.js
const express = require('express');
const path = require('path');
const app = express();
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
  next();
});
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file on the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve the signin.html file on the '/signin' route
app.get('/signin', (req, res) => {
  res.sendFile(path.join(__dirname,'public', 'signin.html'));
});

// Serve the signup.html file on the '/signup' route
app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname,'public', 'signup.html'));
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
