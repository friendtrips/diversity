import React from 'react';
import {Dialog, DialogTitle, Paper} from '@material-ui/core';

const FlightDetails = props => {
   const { onClose, selectedValue, open, flightData, friends} = props;
//   const selectedFlight = flightData[selectedValue];

//   console.log(flightData)
//   // selected value is the index of the trip
  
//   //iterate through friends
//   const itineraries = friends.map(friend => {
//     <Paper>
//       {friend.name}
//       {friend.origin}
//       {selectedFlight.flights[findItineraryIndex(friend.origin)].itinerary.departureFlight.departureTime}
//     </Paper>
//   })

    // create a row for each person that has:
      
      //name 
      //origin

      //flights[friend index]itinerary.departureFlight.departureTime
      //itinerary.departureFlight.arrivalTime
      //itinerary.departureFlight.flightNumber
      //itinerary.departureFlight.airline

      //itinerary.returnFlight.departureTime
      //itinerary.returnFlight.arrivalTime
      //itinerary.returnFlight.flightNumber
      //itinerary.returnFlight.airline

  // function for finding friends name; input is flights
  const findItineraryIndex = (origin) => {
    //if friends origin matches the itin departure leaving from
    for (i = 0; i < selectedFlight.flights; i++){
      if (origin === selectedFlight.flights[i].itinerary.departureFlight.leavingFrom) {
        return i;
      }
    }
      //return index of flights
    }
  function handleClose() {
    onClose();
  }

 
  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">{selectedValue}</DialogTitle>
     
    </Dialog>
  );
};

export default FlightDetails;
