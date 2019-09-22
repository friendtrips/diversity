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
            {/* // <div style={{ position: 'fixed', top: '-50%', left: '-50%', width: '200%', height: '200%' }}> */}
            {/* <div style={{
                backgroundImage: `url(https://pixabay.com/get/55e8dd4a4b55b108feda8460825668204022dfe05558704b772e7dd3/golden-gate-bridge-388917_1920.jpg)`,
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                margin: 'auto',
                minWidth: '50%',
                minHeight: '50%'
            }}> */}
            <Paper style={{ padding: '32px', width: '525px' }}>
                <Typography variant="h5" component="h3">
                    Let's plan a trip!
                    </Typography>
                <form>
                    <TextField
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
                    <TextField
                        id="outlined-name"
                        label="Name"
                        margin="normal"
                        variant="outlined"
                        onChange={() => {
                            console.log(event.target.value)
                            props.handleUserInput({ travelerInput: event.target.value })
                        }}
                    />
                    <TextField
                        id="outlined-name"
                        label="Departing Airport"
                        margin="normal"
                        variant="outlined"
                        onChange={() => {
                            console.log(event.target.value)
                            props.handleUserInput({ originInput: event.target.value })
                        }}
                    />
                    <Button onClick={() => { props.addTraveler({ name: props.travelerInput, origin: props.originInput }) }}>Add Traveler</Button>
                    <TextField
                        id="outlined-name"
                        label="Name"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Departing Airport"
                        margin="normal"
                        variant="outlined"
                    />
                    <Button>Add Traveler</Button>
                    <TextField
                        id="outlined-name"
                        label="Name"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Departing Airport"
                        margin="normal"
                        variant="outlined"
                    />
                    <Button>Add Traveler</Button>
                    <TextField
                        id="outlined-name"
                        label="Name"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Departing Airport"
                        margin="normal"
                        variant="outlined"
                    />
                    <Button>Add Traveler</Button>
                    <TextField
                        id="outlined-name"
                        label="Name"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Departing Airport"
                        margin="normal"
                        variant="outlined"
                    />
                    <Button>Add Traveler</Button>
                </form>
                <Button onClick={props.handleClickOnFindFlights}>Find Flights</Button>
            </Paper>
        </div >
        // </div >
    )
}

export default TripPreferences