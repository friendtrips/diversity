//Summary: The BookTrip page will be a page that allows you to enter in the emails for the friends on the trip so 
//the flight details and payment info will be sent to them.
//States Passed Down From App: User Names
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


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
        fontStyle: "Roboto",
        fontSize: 16
      },
      title: {
        fontSize: 17   
      },
      submitButton: {
        margin: theme.spacing(1),
        marginLeft: '8%'
      },
      backButton: {
        margin: theme.spacing(1),
        marginLeft: '35%'
      }
  }));

const BookTrip = ({changePage, friends}) => {
    const classes = useStyles();
   
    return (

        <>
             <div>
                <h2>Logo</h2>
                <hr></hr>
            </div> 
        <Paper className={classes.root}>
                <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.title} align="center">Name</TableCell>
                        <TableCell className={classes.title} align="center">Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {friends.map(friend => (
                    <TableRow key={friend.name}>
                        <TableCell align="center" className={classes.nameField} component="th" scope="row">
                            {friend.name}
                        </TableCell>
                        <TableCell align="center">
                        <TextField
                            id="standard-with-placeholder"
                            placeholder="email..."
                            className={classes.textField}
                            margin="normal"
                            //no caputre of input because we aren't doing anything with email right now?
                            // onChange={()=> captureInput(friend,event.target.value)}
                        />
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Paper>
        <Button variant="contained" className={classes.backButton}
            onClick={()=> changePage(-1)}>
                Back To Flights
        </Button>    
        <Button variant="contained" className={classes.submitButton}
            onClick={()=> changePage(1)}>
                Send Itenaries
        </Button>    
    </>
    )
}



export default BookTrip;
