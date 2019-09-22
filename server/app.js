// const fs = require('fs');
// const https = require('https');
// const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const skyScanner = require('./skyscanner.js');

const { getFlights } = skyScanner;

// const hostname = 'friendtrips.world';
// const hostname = '127.0.0.1';

// const httpsPort = 443;
// const httpPort = 80;

// const httpsOptions = {
//   cert: fs.readFileSync('./server/ssl/friendtrips_world.crt'),
//   ca: fs.readFileSync('./server/ssl/friendtrips_world.ca-bundle'),
//   key: fs.readFileSync('./server/ssl/example_com.key')
// };

const app = express();
// const httpServer = http.createServer(app);
// const httpsServer = https.createServer(httpsOptions, app);

// app.use((req, res, next) => {
//   if(req.protocol === 'http') {
//     res.redirect(301, `https://${req.headers.host}${req.url}`);
//   }
//   next();
// });

app.use('/', express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/flights', (req, res) => {
  const data = req.body;
  getFlights(res, data);
});

// httpServer.listen(httpPort, hostname);
// httpsServer.listen(httpsPort, hostname);

module.exports = app;
