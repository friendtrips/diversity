//Summary: The PaymentsPage will provide a summation of the flight info for each user and whether they have paid or not which will
//be indicated by a green check (or something) for paid, and a red (something) to indicate they have not paid
//States Passed Down From App: User Names, Flight Info for Each User, Paid or Not Paid (0=No, 1=Yes)
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { green } from '@material-ui/core/colors';
import { fontWeight } from '@material-ui/system';


const useStyles = makeStyles(theme => ({
    root: {
    //   marginTop: theme.spacing(3),
    //   overflowX: 'auto',
    //   marginLeft: '20%',
    //   marginRight: '20%'
    flexGrow: 1
    },
    table: {
      minWidth: 650,
    },
    amtField: {
        fontStyle: "Roboto",
        fontSize: 20
      },
    nameField: {
        paddingTop:'15px',
        fontStyle: "Roboto",
        fontSize: 22,
      },
    titleField: {
        fontSize: 18   
      },
    flightField: {
        fontSize: 16   
      },
      spaceingFlight: {
        height:'10px'
      },
    backButton: {
        margin: theme.spacing(1),
        marginLeft: '35%'
      }
  }));

  const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })(props => <Checkbox color="default" {...props} />);


const PaymentPage = ({changePage, flightData}) => {
    const classes = useStyles();
    return (

        <>
            <div>
                <h2>Logo</h2>
                <hr></hr>
            </div>
            <h2>Payment Page</h2>
            <Paper>
                <Grid >
                    {flightData[0].flights.map(flight => (
                    <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    >
                        <Grid item xs={8} className={classes.nameField}>
                            {flight.traveler}
                        </Grid>
                        <Grid item xs={4} className={classes.amtField}>
                            Amount Owed: ${flightData[0].totalCost/flightData[0].flights.length}
                        </Grid>
                        <Grid item xs={8} className={classes.titleField}>
                            Flight Details
                        </Grid>
                        <Grid item xs={4}>
                                <FormControlLabel
                                control={
                                <GreenCheckbox
                                    checked={flight.paid}
                                    // onChange={handleChange('checkedG')}
                                    value="checkedG"
                                />
                                }
                            label="Paid?"
                            />
                        </Grid>
                        {/* Flight Details */}
                        <Grid item xs={12} className={classes.flightField}>
                            Departure Flight: {flight.itinerary.departureFlight.airlime} {flight.itinerary.departureFlight.flightNumber} on {flight.itinerary.departureFlight.departureTime.slice(0,10)}
                        </Grid>
                        <Grid item xs={12} className={classes.flightField}>
                            Departs: {flight.itinerary.departureFlight.leavingFrom} @ 
                            {flight.itinerary.departureFlight.departureTime.slice(11,16)} Arrives: {flight.itinerary.departureFlight.arrivingAt} @
                            {flight.itinerary.departureFlight.arriveTime.slice(11,16)}
                        </Grid>
                        <Grid item xs={12} className={classes.spaceingFlight}> </Grid>
                        <Grid item xs={12} className={classes.flightField}>
                            Retunring Flight: {flight.itinerary.returnFlight.airlime} {flight.itinerary.returnFlight.flightNumber} on {flight.itinerary.departureFlight.departureTime.slice(0,10)}
                        </Grid>
                        <Grid item xs={12} className={classes.flightField}>
                            Departs: {flight.itinerary.returnFlight.leavingFrom} @ 
                            {flight.itinerary.returnFlight.departureTime.slice(11,16)} Arrives: {flight.itinerary.returnFlight.arrivingAt} @
                            {flight.itinerary.returnFlight.arriveTime.slice(11,16)}
                        </Grid>
                    </Grid>
                    ))}
                </Grid>
            </Paper>
            <Button variant="contained" className={classes.backButton}
                onClick={()=> changePage(-1)}>
                    Back To Friend's Contact
            </Button>    

        </>
    )
}

export default PaymentPage