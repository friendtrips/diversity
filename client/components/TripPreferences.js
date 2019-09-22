import React from 'react';
import { Paper, Grid, TextField, Typography, Button } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';

const TripPreferences = (props) => {
    return (
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
                                console.log(event.target.value)
                                props.handleUserInput({ tripName: event.target.value })
                            }}
                        />

                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                                <KeyboardDatePicker
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

                        <Grid>
                            <Button variant="contained" inline onClick={props.addTraveler}>
                                Add Traveler
                            </Button>
                        </Grid>
                        {props.friends.length ? props.friends.map((friend, idx) => (
                            <div>
                                <TextField
                                    id="outlined-name"
                                    label="Name"
                                    margin="normal"
                                    variant="outlined"
                                    value={friend.name}
                                    onChange={(event) => { props.handleAddTravelerInfo(idx, event, 'name') }}
                                />
                                <TextField
                                    id="outlined-name"
                                    label="Departing Airport"
                                    margin="normal"
                                    variant="outlined"
                                    value={friend.origin}
                                    onChange={(event) => { props.handleAddTravelerInfo(idx, event, 'origin') }}
                                />
                            </div>))
                            : null
                        }


                    </Grid>
                </form>
                <Grid><Button variant="contained" onClick={props.handleClickOnFindFlights}>Find Flights</Button></Grid>
            </Paper>
        </div >
    )
}

export default TripPreferences