const express = require('express');
const app = express();
const path = require('path');

// 静的ファイルを提供
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index2.html'));
});


app.get('/about-me', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about-me2.html'));
});

app.get('/works', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'works.html'));
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
