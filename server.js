const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;


let lastUserData = ""; // Kullanıcı verisini saklamak için bir değişken

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-data', (req, res) => {
  const userData = req.body.userData;
  console.log(userData);
  lastUserData = userData; // Veriyi sakla
  res.send("Veriyi Gönderdim Kardeşim");
});

// GET için yeni bir yol ekleyin
app.get('/get-data', (req, res) => {
  res.send(lastUserData); // Son kullanıcı verisini gönder
});

app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} üzerinde çalışıyor`);
});
