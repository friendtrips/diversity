import React from 'react';
import { Paper, Grid, TextField, Typography } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';

const TripPreferences = (props) => {
    return (
        <>
            <Paper>
                <Typography variant="h5" component="h3">
                    Let's plan a trip!
                    </Typography>
                <form>
                    <TextField
                        id="outlined-name"
                        label="Trip Name"
                        margin="normal"
                        variant="outlined"
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
                                onChange={props.handleDateChange}
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
                                onChange={props.handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                    <TextField
                        id="outlined-name"
                        label="Add traveler"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Departing Airport"
                        margin="normal"
                        variant="outlined"
                    />
                </form>
            </Paper>
        </>
    )
}

export default TripPreferences