var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/indec.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'indec.css'));
});

app.get('/ui/aboutus.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'aboutus.html'));
});

app.get('/ui/aboutdec.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'aboutdec.css'));
});

app.get('/ui/contactus.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'contactus.html'));
});

app.get('/ui/con1.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'con1.css'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/server.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'server.js'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/background.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'background.jpg'));
});

app.get('/ui/A_logo.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'A_logo.png'));
});

app.get('/ui/abblur.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'abblur.jpg'));
});

app.get('/ui/conblur.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'conblur.jpg'));
});

app.get('/ui/insp.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'insp.jpg'));
});

app.get('/ui/Me.jpeg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Me.jpeg'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
