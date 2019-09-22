/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const request = require('request');
const fs = require('fs');
require('dotenv').config();

let backupData;
fs.readFile('trip-data-copy.json', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    backupData = JSON.parse(data);
  }
});

let tripData = {
  trips: []
};

const findCheapestDestinations = (res, flightsPerDestination) => {
  const { trips } = tripData;

  const totals = {};
  trips.forEach(trip => {
    if (totals[trip.IATAcode]) {
      totals[trip.IATAcode] += trip.flightInfo.price;
    } else {
      totals[trip.IATAcode] = trip.flightInfo.price;
    }
  });

  const temp = [];
  for (const code in totals) {
    temp.push([code, totals[code]]);
  }
  const sorted = temp.sort((a, b) => {
    return a[1] - b[1];
  });
  const response = [];
  for (const destination of sorted) {
    const flights = [];
    trips.forEach(trip => {
      if (trip.IATAcode === destination[0]) {
        const itinerary = {
          itinerary: {
            departureFlight: trip.flightInfo.departureFlight,
            returnFlight: trip.flightInfo.returnFlight
          }
        };
        flights.push(itinerary);
      }
    });
    const info = {
      destinationLocation: destination[0],
      flights,
      totalCost: destination[1]
    };
    response.push(info);
  }
  res.send(response);
};

const saveTripData = (trip, res, resolve) => {
  tripData.trips.push(trip);
  resolve();
};

const findCarrier = (res, carrierId) => {
  const carriers = res.Carriers;
  for (let i = 0; i < carriers.length; i++) {
    const carrier = carriers[i];
    if (carrier.Id === carrierId) {
      return carrier.Name;
    }
  }
  return undefined;
};

const filterAndSortResponseData = (response, airportDeparture, airportDestination) => {
  const res = JSON.parse(response.body);
  const cheapestItinerary = res.Itineraries[0];
  const price = cheapestItinerary && cheapestItinerary.PricingOptions[0].Price;
  const outboundLegId = cheapestItinerary && cheapestItinerary.OutboundLegId;
  const inboundLegId = cheapestItinerary && cheapestItinerary.InboundLegId;
  const legs = res.Legs;
  const outboundFlight = {
    leavingFrom: airportDeparture,
    arrivingAt: airportDestination
  };
  const returningFlight = {
    leavingFrom: airportDestination,
    arrivingAt: airportDeparture
  };

  for (let i = 0; i < legs.length; i++) {
    const flight = legs[i];

    if (flight.Id === outboundLegId) {
      outboundFlight.departureTime = flight.Departure.length
        ? flight.Departure
        : '2019-10-31T00:50:00';
      outboundFlight.arriveTime = flight.Arrival.length ? flight.Arrival : '2019-10-31T06:42:00';
      outboundFlight.flightNumber = flight.FlightNumbers[0].FlightNumber.length
        ? flight.FlightNumbers[0].FlightNumber
        : '1234';
      const carrierId = flight.FlightNumbers[0].CarrierId;
      const carrier = findCarrier(res, carrierId);
      outboundFlight.airline = carrier.length ? carrier : 'United';
    }
    if (flight.Id === inboundLegId) {
      returningFlight.departureTime = flight.Departure.length
        ? flight.Departure
        : '2019-10-31T00:50:00';
      returningFlight.arriveTime = flight.Arrival.length ? flight.Arrival : '2019-10-31T06:42:00';
      returningFlight.flightNumber = flight.FlightNumbers[0].FlightNumber.length
        ? flight.FlightNumbers[0].FlightNumber
        : '1234';
      const carrierId = flight.FlightNumbers[0].CarrierId;
      const carrier = findCarrier(res, carrierId);
      returningFlight.airline = carrier.length ? carrier : 'United';
    }
  }

  const failSafe = [
    ['departureTime', '2019-10-15T00:50:00'],
    ['arriveTime', '2019-10-31T00:50:00'],
    ['flightNumber', '1234'],
    ['airline', 'United']
  ];
  failSafe.forEach(el => {
    const property = el[0];
    const value = el[1];
    if (outboundFlight[property] === undefined) {
      outboundFlight[property] = value;
    }
    if (returningFlight[property] === undefined) {
      returningFlight[property] = value;
    }
  });

  const trips = {
    IATAcode: airportDestination,
    flightInfo: {
      departureFlight: outboundFlight,
      returnFlight: returningFlight,
      price
    }
  };
  return trips;
};

const skyScannerGet = (res, resolve, sessionKey, airportDeparture, airportDestination) => {
  const options = {
    method: 'GET',
    url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/${sessionKey}?sortType=price&sortOrder=asc`,
    headers: {
      'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      'x-rapidapi-key': process.env.RAPID_API_KEY
    }
  };

  const cb = (error, response) => {
    if (!error && response.statusCode === 200) {
      const trip = filterAndSortResponseData(response, airportDeparture, airportDestination);
      if (!trip) {
        resolve();
      } else {
        saveTripData(trip, res, resolve);
      }
    } else {
      resolve();
    }
  };

  request(options, cb);
};

const skyScannerPost = (
  res,
  resolve,
  airportDeparture,
  airportDestination,
  departureDate,
  returnDate,
  counter
) => {
  let count = counter || 0;

  const options = {
    method: 'POST',
    url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0',
    headers: {
      'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      'x-rapidapi-key': '226624f848mshb3684ac3c1a22fep1f7ca7jsn3acafae1dd99',
      'content-type': 'application/x-www-form-urlencoded'
    },
    form: {
      inboundDate: returnDate,
      cabinClass: 'economy',
      children: '0',
      infants: '0',
      country: 'US',
      currency: 'USD',
      locale: 'en-US',
      originPlace: `${airportDeparture}-sky`,
      destinationPlace: `${airportDestination}-sky`,
      outboundDate: departureDate,
      adults: '1'
    }
  };

  const cb = (error, response) => {
    if (!error && response.statusCode === 201) {
      const { location } = response.headers;
      const sessionKey = location.split(
        'http://partners.api.skyscanner.net/apiservices/pricing/uk2/v1.0/'
      )[1];
      skyScannerGet(res, resolve, sessionKey, airportDeparture, airportDestination);
    } else {
      if (counter > 3) {
        resolve();
      } else {
        count++;
        skyScannerPost(
          res,
          resolve,
          airportDeparture,
          airportDestination,
          departureDate,
          returnDate,
          count
        );
      }
      console.log('ERROR in your Sky Scanner POST request', error);
    }
  };

  request(options, cb);
};

const getFlights = (res, { airportDepartures, airportDestinations, departureDate, returnDate }) => {
  const promises = [];
  airportDepartures.forEach(departingAirportCode => {
    airportDestinations.forEach(destinationAirportCode => {
      const newPromise = new Promise((resolve, reject) => {
        skyScannerPost(
          res,
          resolve,
          departingAirportCode,
          destinationAirportCode,
          departureDate,
          returnDate
        );
      });
      promises.push(newPromise);
    });
  });
  const flightsPerDestination = airportDepartures.length;

  Promise.all(promises)
    .then(() => findCheapestDestinations(res, flightsPerDestination))
    .then(() => {
      tripData = {
        trips: []
      };
    })
    .catch(err => {
      tripData = {
        trips: []
      };
      console.log('oops', err);
      res.send(backupData);
    });
};

module.exports = {
  getFlights
};
