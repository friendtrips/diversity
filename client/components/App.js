import React from 'react';

import LandingPage from './LandingPage';
import TripPreferences from './TripPreferences';
import FlightList from './FlightList';
import FlightDetails from './FlightDetails';
import BookTrip from './BookTrip';
import PaymentPage from './PaymentPage'
import Confirmation from './Confirmation';

export default class App extends React.Component {
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
    return (
      <div>
        <LandingPage />
      </div>

    )
  }
}