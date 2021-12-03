// Modules loading
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path')


// Variable initialization
const formPath = path.resolve('./Assignments/8/html/8d.html');
const app = express();
const port = 8080;


// Parametrize server
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Renders
app.set('views', './Assignments/8/views');
app.set('view engine', 'ejs');

// Routes
app.get('/form', function (req, res) {
  console.log('-- New form request');
  res.sendFile(formPath);
});

app.post('/jsondata', function (req, res) {
  console.log('-- New form data acquired');
  res.render('8d.ejs', {
      firstName: req.body.fName,
      lastName: req.body.lName,
      age: req.body.age
  });
});


// Start server
app.listen(port, () => {
  console.log(`--- Server started: port=${port}`)
});