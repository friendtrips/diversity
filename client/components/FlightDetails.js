import React from 'react';
import {Dialog, DialogTitle, Table, TableHead, TableRow, TableCell, TableBody, Grid, Button} from '@material-ui/core';

const FlightDetails = props => {
  const { changePage, onClose, selectedValue, open, flightData, tripName} = props;

  function handleClose() {
    onClose();
  }

  function bookTrip() {
    changePage(1);
  }


  if (open){
    
    return (
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">{tripName}</DialogTitle>
         
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left">Traveler</TableCell>
                <TableCell align="left">Departure</TableCell>
                <TableCell align="left">Return</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {flightData[selectedValue].flights.map(trip => (
                
                <TableRow key={trip.traveler}>
                  <TableCell>
                    {trip.traveler} from {trip.itinerary.departureFlight.leavingFrom}
                  </TableCell>
                  <TableCell>
                    <Grid container direction="column" justify="space-evenly">
                      <Grid item>
                        DEPART: {trip.itinerary.departureFlight.departureTime.slice(11, 16)}
                      </Grid>
                      <Grid item>
                        ARRIVE: {trip.itinerary.departureFlight.arriveTime.slice(11, 16)}
                      </Grid>
                      <Grid item>
                        FLIGHT: {trip.itinerary.departureFlight.flightNumber}
                      </Grid>
                      <Grid item>
                        AIRLINE: {trip.itinerary.departureFlight.airline}
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <Grid container direction="column">
                      <Grid item>
                        DEPART: {trip.itinerary.returnFlight.departureTime.slice(11, 16)}
                      </Grid>
                      <Grid item>
                        ARRIVE: {trip.itinerary.returnFlight.arriveTime.slice(11, 16)}
                      </Grid>
                      <Grid item>
                        FLIGHT: {trip.itinerary.returnFlight.flightNumber}
                      </Grid>
                      <Grid item>
                        AIRLINE: {trip.itinerary.returnFlight.airline}
                      </Grid>
                    </Grid>
                  </TableCell>
                  
                </TableRow>
            ))}
          </TableBody>
      </Table>
      <Button variant="outlined" color="primary" onClick={bookTrip}>Book Trip!</Button>
      </Dialog>
    );
  } else {
    return null;
  }
};

export default FlightDetails;
