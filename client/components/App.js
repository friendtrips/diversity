import React from 'react';
import FlightDetails from './FlightDetails';
import LandingPage from './LandingPage';
import FlightList from './FlightList';
import TripPreferences from './TripPreferences';
import BookTrip from './BookTrip';
import PaymentPage from './PaymentPage';
import Confirmation from './Confirmation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tripName: '',
      departureDate: '',
      returnDate: '',
      friends: [],
      airports:  ['LGA','JFK', 'MDW','ORD','LAS','SEA','SFO','DCA','MSY','PSP','SAN','STL','SEZ','SDX','HNL','MIA','BBG','BKG','BOS', 'MCO','PDX','BNA','LAX','SAT','AUS','SAV'],
      flightData: []
    };
  }

//Create dummy data
dummyData () {
  let hold = 
    [
      {
        destinationLocation: 'SFO',
        flights: [
          {
            itinerary: { /* This is going to be the itinerary for friend 1 */
              departureFlight: {
                departureTime: '2019-10-15T07:20:00',
                arrivalTime: '2019-10-15T10:00:00',
                airportCode: 'AUS'
              },
              returnFlight: {
                departureTime: '2019-10-20T15:10:00',
                arriveTime: '2019-10-20T18:30:00',
                airportCode: 'AUS'
              }
            },
            flightNumber: 'HE9865',
            airline: 'Southwest'
          },
          {
            itinerary: { /* This is going to be the itinerary for friend 2 */
              departureFlight: {
                departureTime: '2019-10-15T06:50:00',
                arrivalTime: '2019-10-15T10:00:00',
                airportCode: 'SAT'
              },
              returnFlight: {
                departureTime: '2019-10-20T14:10:00',
                arriveTime: '2019-10-20T17:30:00',
                airportCode: 'SAT'
              }
            },
            flightNumber: 'R8675',
            airline: 'Delta'
          }
        ],
        totalCost: 500
      },
    ]
  this.setState({flightData: hold})
}


  render() {
    return <h1>Hello, world!</h1>;
  }
}

export default App;
