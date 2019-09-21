import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import FlightDetails from './FlightDetails';
import LandingPage from './LandingPage';
import FlightList from './FlightList';
import TripPreferences from './TripPreferences';
import BookTrip from './BookTrip';
import PaymentPage from './PaymentPage';
import Confirmation from './Confirmation';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <h1>Hello, world!</h1>
        <Route path="/" exact component={LandingPage} />
      </Router>
    )
  }
}