
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const skyScanner = require('./skyscanner.js');

const { getFlights } = skyScanner;

const app = express();

app.use('/', express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dummyData = {
  airportDepartures: ['AUS', 'JAX', 'BOS', 'LGA', 'PDX'],
  airportDestinations: [ 'LGA',
  'JFK',
  'MDW',
  'ORD',
  'LAS',
  'LAS',
  'SEA',
  'SFO',
  'DCA',
  'MSY',
  'PSP',
  'SAN',
  'STL',
  'SEZ',
  'SDX',
  'HNL',
  'MIA',
  'BBG',
  'BKG',
  'BOS',
  'MCO',
  'PDX',
  'BNA',
  'LAX',
  'SAT',
  'AUS',
  'SAV' ],
  departureDate: '2019-10-15',
  returnDate: '2019-10-31'
};


app.post('/flights', (req, res) => {
  const data = req.body;
  console.log('req body', data)
  getFlights(res, data);
  console.log('post request happened')
});

module.exports = app;


// [
//   {
//     destinationLocation: 'some airport code',
//     flights: [
//       {
//         itinerary: { /* This is going to be the itinerary for friend 1 */
//           departureFlight: {
//             departureTime: '',
//             arriveTime: '',
//             leavingFrom: '',
//             arrivingAt: '',
//             airline: '',
//             flightNumber: '',
//           },
//           returnFlight: {
//             departureTime: '',
//             arriveTime: '',
//             leavingFrom: '',
//             arrivingAt: '',
//             airline: '',
//             flightNumber: '',
//           }
//         },
//       },
//       {
//         itinerary: { /* This is going to be the itinerary for friend 2 */
//           departureFlight: {
//             departureTime: '',
//             arriveTime: '',
//             leavingFrom: '',
//             arrivingAt: '',
//             airline: '',
//             flightNumber: '',
//           },
//           returnFlight: {
//             departureTime: '',
//             arriveTime: '',
//             leavingFrom: '',
//             arrivingAt: '',
//             airline: '',
//             flightNumber: '',
//           }
//         },
//       }
//     ],
//     totalCost: ''
//   },
//   {
//     destinationLocation: 'a different airport code',
//     flights: [
//       {
//         itinerary: {
//           departureFlight: {
//             departureTime: '',
//             arriveTime: '',
//             leavingFrom: '',
//             arrivingAt: '',
//             airline: '',
//             flightNumber: '',
//           },
//           returnFlight: {
//             departureTime: '',
//             arriveTime: '',
//             leavingFrom: '',
//             arrivingAt: '',
//             airline: '',
//             flightNumber: '',
//           }
//         },
//       }
//     ],
//     totalCost: ''
//   }
// ]


