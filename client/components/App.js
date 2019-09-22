/* eslint-disable react/no-unused-state */
import React from 'react';
import LandingPage from './LandingPage';
import TripPreferences from './TripPreferences';
import FlightList from './FlightList';
import BookTrip from './BookTrip';
import PaymentPage from './PaymentPage';
import Confirmation from './Confirmation';

import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 1,
      tripName: '',
      departureDate: new Date(),
      returnDate: new Date(),
      friends: [],
      airports: ['LGA', 'JFK', 'MDW', 'ORD', 'LAS', 'SEA', 'SFO', 'DCA', 'MSY', 'PSP', 'SAN', 'STL', 'SEZ', 'SDX', 'HNL', 'MIA', 'BBG', 'BKG', 'BOS', 'MCO', 'PDX', 'BNA', 'LAX', 'SAT', 'AUS', 'SAV'],
      flightData: []
    };
    this.dummyData = this.dummyData.bind(this)
    this.changePage = this.changePage.bind(this)
    this.updateDataWithNames = this.updateDataWithNames.bind(this)
    this.handleUserInput = this.handleUserInput.bind(this)
    this.handlePay = this.handlePay.bind(this)
  }

  //change page, associate this to a button to get to the next page
  changePage(value) {
    let currentPage = this.state.pageNum;
    currentPage += value;
    this.setState({ pageNum: currentPage });
  }

  //Create dummy data, invoke this in your component if you want/need data
  dummyData() {
    const hold = [
      {
        totalCost: 500,
        flights: [
          {
            itinerary: {
              /* This is going to be the itinerary for friend 1 */
              departureFlight: {
                departureTime: '2019-10-15T07:20:00',
                arriveTime: '2019-10-15T10:00:00',
                leavingFrom: 'AUS',
                arrivingAt: 'SFO',
                flightNumber: 'HE9865',
                airline: 'Southwest'
              },
              returnFlight: {
                departureTime: '2019-10-17T07:20:00',
                arriveTime: '2019-10-17T10:00:00',
                leavingFrom: 'SFO',
                arrivingAt: 'AUS',
                airline: 'Southwest',
                flightNumber: 'HE9865',
              }
            },

          },
          {
            itinerary: {
              departureFlight: {
                departureTime: '2019-10-15T06:50:00',
                arriveTime: '2019-10-15T10:00:00',
                leavingFrom: 'SAT',
                arrivingAt: 'SFO',
                flightNumber: 'R8675',
                airline: 'Delta'
              },
              returnFlight: {
                departureTime: '2019-10-17T07:20:00',
                arriveTime: '2019-10-17T10:00:00',
                leavingFrom: 'SFO',
                arrivingAt: 'SAT',
                airline: 'Southwest',
                flightNumber: 'HE9865',
              }
            },
    
          },
        ],
      }

    ];
    this.setState({ 
      flightData: hold,
      friends: [{name:'Booke Snelligs', origin:'AUS'},
      {name:'Harry Potty', origin:'SAT'}]

    }, () => this.updateDataWithNames());

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

  handleClickOnFindFlights() {
    this.fetchFlightData();
  }


  addTraveler(friend) {
    if (this.state.friends.length < 5) {
      this.setState({
        friends: [...this.state.friends, { name: '', origin: '' }]
      })
    }
  }

  handleAddTravelerInfo(idx, event, key) {
    const newFriends = this.state.friends.slice();
    newFriends[idx][key] = event.target.value
    this.setState({ friends: newFriends })
  }


  updateDataWithNames() {
    const findItineraryIndex = (origin, index) => {
      for (let i = 0; i < this.state.flightData[index].flights.length; i++) {
        if (origin === this.state.flightData[index].flights[i].itinerary.departureFlight.leavingFrom) {
          return i;
        }
      }
    }

    const friendsCopy = this.state.friends.slice();
    const hold = this.state.flightData;

    hold.forEach((trip, index) => {
      for (let i = 0; i < friendsCopy.length; i++) {

        let itineraryIndex = findItineraryIndex(friendsCopy[i].origin, index);
        trip.flights[itineraryIndex].traveler = friendsCopy[i].name;
        trip.flights[itineraryIndex].paid = false
      }
    });

    this.setState({ flightData: hold });
  }

  fetchFlightData() {
    console.log('fetching flight data')
    let departures = this.state.friends.map(friend => {
      return friend.origin
    })
    axios.post('/flights', {
      airportDepartures: departures,
      airportDestinations: this.state.airports,
      departureDate: this.state.departureDate,
      returnDate: this.state.returnDate
    })
      .then(response => {
        console.log(response.data)
        this.setState({
          flightData: response.data
        })
      })
      .catch(function (error) {
        console.log('error fetching flight data:', error);
      });
  }

  handlePay(person) {
    let hold = this.state.flightData
    hold[0].flights.forEach(flight => {
      if (person === flight.traveler) {
        flight.paid = true
      } 
    })
    this.setState({flightData: hold })
    setTimeout(() => {
      let count = this.state.flightData[0].flights.length
      this.state.flightData[0].flights.forEach(flight => {
        if (flight.paid === true) {
          count--
        }
      })
      console.log(count)
      if (count === 0 ) {
        this.changePage(1)
        console.log(count)
      }
    },10)
  }

  componentWillMount() {
    this.dummyData();
  };

  render() {
   
    if (this.state.pageNum === 0) {
      return (<LandingPage
        changePage={this.changePage}
      />)
    } else if (this.state.pageNum === 1) {
      return (<TripPreferences
        changePage={this.changePage}
        handleUserInput={this.handleUserInput}
        tripName={this.state.tripName}
        returnDate={this.state.returnDate}
        departureDate={this.state.departureDate}
        selectDepartureDate={this.selectDepartureDate.bind(this)}
        selectReturnDate={this.selectReturnDate.bind(this)}
        handleClickOnFindFlights={this.handleClickOnFindFlights.bind(this)}
        friends={this.state.friends}
        addTraveler={this.addTraveler.bind(this)}
        handleAddTravelerInfo={this.handleAddTravelerInfo.bind(this)}
      />)
    } else if (this.state.pageNum === 2) {
      return <FlightList
        dummyData={this.dummyData}
        changePage={this.changePage}
        flightData={this.state.flightData}
        friends={this.state.friends}
        tripName={this.state.tripName}
      />;
    } else if (this.state.pageNum === 3) {
      return <BookTrip changePage={this.changePage} friends={this.state.friends} />;
    } else if (this.state.pageNum === 4) {
      return (
        <PaymentPage
          changePage={this.changePage}
          friends={this.state.friends}
          flightData={this.state.flightData}
          handlePay={this.handlePay}
          dummyData={this.dummyData}
        />
      );
    } else if (this.state.pageNum === 5) {    
      return <Confirmation tripName={this.state.tripName} />;
  }
}
}
