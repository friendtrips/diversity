
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const skyScanner = require('./skyscanner.js');

const { getFlights } = skyScanner;

const app = express();

app.use('/', express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/flights', (req, res) => {
  const data = req.body;
  console.log(data);
  getFlights(res, data);
});

module.exports = app;
