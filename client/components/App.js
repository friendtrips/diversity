/* eslint-disable react/no-unused-state */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import TripPreferences from './TripPreferences';
import FlightList from './FlightList';
import BookTrip from './BookTrip';
import PaymentPage from './PaymentPage';
import Confirmation from './Confirmation';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 1,
      tripName: 'BFF Time in The Sun',
      departureDate: '',
      returnDate: '',
      friends: ['Booke Snelligs', 'Harry Potter'],
      airports: [
        'LGA',
        'JFK',
        'MDW',
        'ORD',
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
        'SAV'
      ],
      flightData: []
    };
    this.dummyData = this.dummyData.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  // change page, associate this to a button to get to the next page
  changePage() {
    let currentPage = this.state.pageNum;
    currentPage++;
    this.setState({ pageNum: currentPage });
  }

  // Create dummy data, invoke this in your component if you want/need data
  dummyData() {
    const hold = [
      {
        destinationLocation: 'SFO',
        flights: [
          {
            itinerary: {
              /* This is going to be the itinerary for friend 1 */
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
            itinerary: {
              /* This is going to be the itinerary for friend 2 */
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
      }
    ];
    this.setState({ flightData: hold });
  }

  render() {
    if (this.state.pageNum === 0) {
      return <LandingPage changePage={this.changePage} />;
    } if (this.state.pageNum === 1) {
      return <TripPreferences changePage={this.changePage} />;
    } if (this.state.pageNum === 2) {
      return <FlightList changePage={this.changePage} />;
    } else if (this.state.pageNum === 3) {
      return <BookTrip changePage={this.changePage} friends={this.state.friends} />;
    } else if (this.state.pageNum === 4) {
      return (
        <PaymentPage
          changePage={this.changePage}
          friends={this.state.friends}
          flightData={this.state.flightData}
          dummyData={this.dummyData}
        />
      );
    } else if (this.state.pageNum === 5) {
      return <Confirmation tripName={this.state.tripName} />;
    }
  }
}
