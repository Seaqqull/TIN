// Modules loading
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path')

// Variable initialization
const app = express();
const port = 8080;

// Parametrize server
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/form', function (req, res) {
  console.log('-- New form request');
  res.sendFile(path.resolve('./Assignments/8/html/8b.html'));
});

app.post('/formdata', function (req, res) {
  console.log('-- New form data acquired');
  res.send(req.body);
});


// Start server
app.listen(port, () => {
  console.log(`--- Server started: port=${port}`)
});