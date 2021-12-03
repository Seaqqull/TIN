// Modules loading
const express = require('express');

// Variable initialization
const app = express();
const port = 8080;


// Hello page route
app.get('/hello', function (req, res) {
  res.send('hello world');
})

// Start listening
app.listen(port, () => {
  console.log(`--- Server started: port=${port}`)
});