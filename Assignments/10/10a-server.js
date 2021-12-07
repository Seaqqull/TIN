// Modules loading
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
// Custom module
const appDistance = require('./modules/distances');
const appTemp = require('./modules/temperatures');

// Variable initialization
const app = express();
const port = 8080;

// Parametrize server
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./Assignments/10'));
app.use(bodyParser.json());


app.get('/', (req,res) => {
    res.sendFile(path.resolve('./Assignments/10/10a.html'));
});

app.post('/jsonDistance', (req,res)=>{
    console.log(`-- New JSON data: ${(req.body.result)}`);

    res.setHeader('Content-Type', 'application/text');
    res.send(appDistance.convertDistance(req.body.dValue, req.body.dUnit));
});

app.post('/jsonTemp', (req,res)=>{
    console.log(`-- New JSON data: ${(req.body.result)}`);

    res.setHeader('Content-Type', 'application/text');
    res.send(appTemp.convertTemperature(req.body.tValue, req.body.tUnit));
});


// Start server
app.listen(port, () => {
    console.log(`--- Server started: port=${port}`)
});
