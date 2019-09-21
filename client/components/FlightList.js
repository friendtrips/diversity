import React from 'react';
import FlightDetails from './FlightDetails';
import {Typography, Paper,Table, TableBody, TableCell, TableRow, TableHead, Button} from '@material-ui/core';

const FlightList = props => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();

  function handleClickOpen(value) {
    setOpen(true);
    setSelectedValue(value);
  }

  const handleClose = () => {
    setOpen(false);
    
  };

  return (
    <>
    <Typography>Flight List</Typography>
    <Paper>
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
          <TableRow key={trip.destinationLocation}>
            <TableCell align="center">{trip.destinationLocation}</TableCell>
            <TableCell align="center">{trip.totalCost}</TableCell>
            <TableCell align="center">{trip.totalCost/props.friends.length}</TableCell>
            <TableCell align="center">
              <Button variant="outlined" color="primary" onClick={() => handleClickOpen(index)}>
                Trip Detail hooray
              </Button>
              <FlightDetails flightData={props.flightData} friends={props.friends} selectedValue={selectedValue} open={open} onClose={handleClose} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
  </>
  )
};

export default FlightList;
