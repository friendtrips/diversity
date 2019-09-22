import React from 'react';

import LandingPage from './LandingPage';
import TripPreferences from './TripPreferences';
import FlightList from './FlightList';
import BookTrip from './BookTrip';
import PaymentPage from './PaymentPage'
import Confirmation from './Confirmation';

import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 0,
      tripName: '',
      departureDate: new Date(),
      returnDate: new Date(),
      friends: [{ name: 'Booke Snelligs', origin: 'AUS' }, { name: 'Harry Potter', origin: 'JFK' }],
      airports: ['LGA', 'JFK', 'MDW', 'ORD', 'LAS', 'SEA', 'SFO', 'DCA', 'MSY', 'PSP', 'SAN', 'STL', 'SEZ', 'SDX', 'HNL', 'MIA', 'BBG', 'BKG', 'BOS', 'MCO', 'PDX', 'BNA', 'LAX', 'SAT', 'AUS', 'SAV'],
      flightData: []
    };
    this.dummyData = this.dummyData.bind(this)
    this.changePage = this.changePage.bind(this)
    this.handleUserInput = this.handleUserInput.bind(this)
  }

  //change page, associate this to a button to get to the next page
  changePage() {
    let currentPage = this.state.pageNum
    currentPage++
    this.setState({ pageNum: currentPage })
  }

  //Create dummy data, invoke this in your component if you want/need data
  dummyData() {
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
    this.setState({ flightData: hold })
  }

  selectDepartureDate(date) {
    this.setState({ departureDate: date })
  }

  selectReturnDate(date) {
    this.setState({ returnDate: date })
  }

  handleUserInput(event) {
    console.log(event)
    this.setState(event)
  }

  fetchFlightData() {
    let departures = this.state.friends.map(friend => {
      return friend.origin
    })
    axios.post('/endpoint', {
      airportDepartures: departures,
      airportDestinations: this.state.airports,
      departureDate: this.state.departureDate,
      returnDate: this.state.returnDate
    })
      .then(response => {

      })
  }

  render() {
    if (this.state.pageNum === 0) {
      return (<LandingPage
        changePage={this.changePage}
      />)
    } else if (this.state.pageNum === 1) {
      return (<TripPreferences
        changePage={this.changePage} handleUserInput={this.handleUserInput} tripName={this.state.tripName} returnDate={this.state.returnDate} departureDate={this.state.departureDate} selectDepartureDate={this.selectDepartureDate.bind(this)} selectReturnDate={this.selectReturnDate.bind(this)}
      />)
    } else if (this.state.pageNum === 2) {
      return (<FlightList
        changePage={this.changePage}
      />)
    } else if (this.state.pageNum === 3) {
      return (<BookTrip
        changePage={this.changePage}
        friends={this.state.friends}
      />)
    } else if (this.state.pageNum === 4) {
      return (<PaymentPage
        changePage={this.changePage}
        friends={this.state.friends}
        flightData={this.state.flightData}
        dummyData={this.dummyData}
      />)
    } else if (this.state.pageNum === 5) {
      return (<Confirmation
        tripName={this.state.tripName}
      />)
    }
  }
}