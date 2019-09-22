import React from 'react';
import { Paper, Grid, TextField, Typography, Button } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';
import Header from './Header';
import backgroundImage from '../../dist/beach.jpg';

const TripPreferences = (props) => {
    return (
        <div style={{
            backgroundImage: `url(${backgroundImage})`,
            height: '100vh', 
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'}}>
        <Header />
        <div>
            <Paper style={{ padding: '32px', width: '525px' }}>
                <Typography variant="h5" component="h3">
                    Let's plan a trip!
                    </Typography>

                    <form>
                        <Grid container justify="space-around">
                            <TextField
                                style={{ width: '100%' }}
                                id="outlined-name"
                                label="Trip Name"
                                margin="normal"
                                variant="outlined"
                                value={props.tripName}
                                onChange={() => {
                                    props.handleUserInput({ tripName: event.target.value })
                                }}
                            />

                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-around">
                                    <KeyboardDatePicker
                                        disablePast
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Departure Date"
                                        value={props.departureDate}
                                        onChange={props.selectDepartureDate}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                    <KeyboardDatePicker
                                        disablePast
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Return Date"
                                        value={props.returnDate}
                                        onChange={props.selectReturnDate}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>

                            <Button variant="contained" style={{ width: '100%', marginTop: '15px' }} onClick={props.addTraveler}>
                                Add Traveler
                            </Button>
                            {props.friends.length ? props.friends.map((friend, idx) => (
                                <Grid container justify="space-between">
                                    <TextField
                                        style={{ width: '49%' }}
                                        label="Name"
                                        margin="normal"
                                        variant="outlined"
                                        value={friend.name}
                                        onChange={(event) => { props.handleAddTravelerInfo(idx, event, 'name') }}
                                    />
                                    <TextField
                                        style={{ width: '49%' }}
                                        label="Departing Airport"
                                        margin="normal"
                                        variant="outlined"
                                        value={friend.origin}
                                        onChange={(event) => { props.handleAddTravelerInfo(idx, event, 'origin') }}
                                    />
                                </Grid>))
                                : null
                            }

                    </Grid>
                </form>
                <Grid><Button variant="contained" style={{ width: '100%', marginTop: '10px' }} onClick={() => {
                    props.handleClickOnFindFlights();
                    props.changePage(1)
                }}>Find Flights</Button></Grid>
            </Paper>
        </div >
        </div>
    )
}

export default TripPreferences