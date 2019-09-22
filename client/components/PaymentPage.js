//Summary: The PaymentsPage will provide a summation of the flight info for each user and whether they have paid or not which will
//be indicated by a green check (or something) for paid, and a red (something) to indicate they have not paid
//States Passed Down From App: User Names, Flight Info for Each User, Paid or Not Paid (0=No, 1=Yes)
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

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
    textField: {
        marginRight: theme.spacing(1),
        width: 200,
      },
    nameField: {
        fontStyle: "Roboto",
        fontSize: 16
      },
      title: {
        fontSize: 17   
      },
      backButton: {
        margin: theme.spacing(1),
        marginLeft: '35%'
      }
  }));


const PaymentPage = ({changePage, flightData}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {/* <div>
                <h2>Logo</h2>
                <hr></hr>
            </div> */}
            {console.log(flightData[0].flights)}
            {/* <Paper className={classes.root}> */}
                <Grid >
                    {flightData[0].flights.map(flight => (
                        <Grid item xs={12}>
                            flight.traveler
                        </Grid>
                ))}
                </Grid>
                {/* {flightData[0].flights.map(flight => {
                        {console.log(flight.traveler)}
                        <text>
                            "Do you see this??
                        </text>
                    })}
             */}
            
            {/* </Paper> */}
            <Button variant="contained" className={classes.backButton}
                onClick={()=> changePage(-1)}>
                    Back To Friend's Contact
            </Button>    
        </div>
    )
}

export default PaymentPage