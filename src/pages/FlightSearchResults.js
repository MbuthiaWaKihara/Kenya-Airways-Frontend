import React from 'react';
import {
    Link
} from 'react-router-dom';

//MUI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

//components
import BookableFlight from '../components/BookableFlight';

//redux
import { connect } from 'react-redux';

const styles = theme => ({
    container: {
        marginTop: '6%',
    },
    formContainer: {
        [theme.breakpoints.down('md')] : {
            width: '100%',
            marginTop: 100,
        },
        width: '100%',
        height: 560,
        marginTop: 50,
        marginBottom: 50,
        marginLeft: 0,
        backgroundColor: '#e3e3e3',
        borderStyle: 'solid',
        borderColor: '#E42529',
        borderWidth: 1,
        overflow: 'scroll',
    },
    backButton: {
        width: '20%',
        marginTop: '1%',
        marginLeft: '1%',
    },
    divider: {
        marginTop: 5,
        marginBottom: 5,
    },
    title: {
        marginLeft: '1%',
    }
});

const mapStateToProps = state => ({
    flights: state.flights.flights,
})

const FlightSearchResults = ({ classes, flights }) => {
    return (
        <>
            <Grid container className={classes.container}>
            <Paper elevation={1} className={classes.formContainer}>
                <Button
                variant="contained"
                color="primary"
                className={classes.backButton}
                component={Link}
                to="/"
                >Back</Button>
                <Divider
                className={classes.divider}
                />
                <Typography
                variant="h4"
                color="inherit"
                className={classes.title}
                >Flight Search Results</Typography>
                {
                    flights.map(flight => (
                        <BookableFlight flight={flight} key={flight.plane}/>
                    ))
                }
            </Paper>
            </Grid>
        </>
    )
}

export default connect(
    mapStateToProps,
)(withStyles(styles)(FlightSearchResults));
