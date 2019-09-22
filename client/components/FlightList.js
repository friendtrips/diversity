import React from 'react';
import FlightDetails from './FlightDetails';
import Header from './Header'
import {Typography, Paper,Table, TableBody, TableCell, TableRow, TableHead, Button, Grid} from '@material-ui/core';
import backgroundImage from '../../dist/beach.jpg';

const FlightList = props => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();

  function handleClickOpen(e, value) {
    e.preventDefault()
    setOpen(true);
    setSelectedValue(value.index);
  }

  const handleClose = () => {
    setOpen(false);
    
  };

  return (
    
    
    <div className="FlightList">
  <Header />
    <Grid container direction="column" style={{width: '90%', marginLeft: 40, alignContent: 'flex-start'}}>
      
      
        <Paper >
          <Grid item>
            <Typography variant="h4" style={{padding: 20}}>Flight List</Typography>
          </Grid>
          <Grid item>
          <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Destination</TableCell>
              <TableCell align="center">Total Cost</TableCell>
              <TableCell align="center">Cost per Person</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.flightData.map((trip, index) => (
              <TableRow key={trip.flights[0].itinerary.departureFlight.arrivingAt}>
                <TableCell align="center">{trip.flights[0].itinerary.departureFlight.arrivingAt}</TableCell>
                <TableCell align="center">{trip.totalCost}</TableCell>
                <TableCell align="center">{trip.totalCost/props.friends.length}</TableCell>
                <TableCell align="center">
                  <Button variant="outlined" color="primary" onClick={(e) => handleClickOpen(e, {index})}>
                    Trip Detail
                  </Button>
                  <FlightDetails changePage={props.changePage} tripName={props.tripName} flightData={props.flightData} friends={props.friends} selectedValue={selectedValue} open={open} onClose={handleClose} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </Grid>
      </Paper>
  </Grid>
  </div>

  )
};

export default FlightList;
