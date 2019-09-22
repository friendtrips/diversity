// Summary: This will just tell you the payment is now complete for the trip, a lot of artistic liberties here.
// States Passed Down From App: Name of the Trip & Usernames
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Header from './Header';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      marginTop: theme.spacing(3),
      overflowX: 'auto',
      marginLeft: '20%',
      marginRight: '20%'
    },
    table: {
      minWidth: 650,
    },
    textField: {
        marginRight: theme.spacing(1),
        width: 200,
      },
      nameField: {
        fontFamily: "Roboto",
        fontSize: 22,
        marginLeft: '2%',
        marginRight: '2%',
        paddingTop: '2%',
        paddingBottom: '2%',
      },
      moreText: {
        paddingTop:'10px',
        fontFamily: "Roboto",
        fontSize: 18,
        marginLeft: '2%',
        marginRight: '2%',
        paddingTop: '2%',
        paddingBottom: '2%',
      },
      backButton: {
        margin: theme.spacing(1),
        marginLeft: '45%'
      }
  }));

const Confirmation = ({tripName,changePage}) => {
  const classes = useStyles();
  return (
    <>
        <Header />
        <Paper className={classes.root}>
        <Grid className={classes.parentGrid}>
            <Grid item xs={12} className={classes.nameField}>
                Congrats on your Booking!
            </Grid>
            <Grid item xs={12} className={classes.moreText}>
                We hope you enjoy {tripName}. Please see your email for booking confirmation with all flight details
            </Grid>
        </Grid>
        </Paper>
        <Button variant="contained" className={classes.backButton}
            onClick={()=> changePage(-5)}>
                Go Home
        </Button>    
    </>
    )
}


export default Confirmation