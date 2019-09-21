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
      airports: [],
      flightData: []
    };
  }

  render() {
    return <h1>Hello, world!</h1>;
  }
}

export default App;
