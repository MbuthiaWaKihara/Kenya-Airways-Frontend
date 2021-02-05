import React from 'react';
import KQLogo from '../images/kq-logo-red.png';

//MUI
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
container: {
    width: '96%',
    height: 150,
    borderStyle: 'solid',
    borderColor: '#E42529',
    borderWidth: 1,
    marginLeft: '2%',
    marginBottom: '2%',
    marginTop: '1%',
    display: 'flex',
    flexDirection: 'row',
},
logo: {
    width: '20%',
    height: '50%',
    marginTop: '2%',
    marginLeft: '2%',
},
flightInfoContainer: {
    width: '60%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
},
cityFrom: {
    position: 'relative',
    top: '30%',
    left: '10%',
    marginLeft: '5%',
},
cityTo: {
    position: 'relative',
    top: '30%',
    left: '-10%',
},
fancy: {
    width: '50%',
    textAlign: 'center',
},
dateText: {
    marginTop: '2%',
},
customIconContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '40%',
    marginLeft: '30%',
    height: '30%',
    marginTop: '2%',
},
line: {
    width: '15%',
    backgroundColor: '#E42529',
    height: 2,
    marginTop: '10%',
},
customIcon: {
    backgroundColor: '#E42529',
    width: '70%',
    height: '40%',
    padding: '2%',
    borderRadius: 50,
    marginTop: '5%',
},
bookingContainer: {
    borderLeftStyle: 'solid',
    borderLeftColor: '#E42529',
    borderLeftWidth: 2,
    width: '10%',
    height: '100%',
    textAlign: 'center',
},
flightCash: {
    textAlign: 'center',
    marginLeft: '25%',
    position: 'relative',
    left: '20%',
    marginBottom: '5%',
    marginTop: '10%',
},
flightSeats: {
    textAlign: 'center',
    position: 'relative',
    left: '35%',
},
bookFlightButton: {
    position: 'relative',
    left: '35%',
    marginBottom: '5%',
}
});

const BookableFlight = ({ classes, flight }) => {
    return (
        <>
            <Paper
            className={classes.container}
            >
                <img
                src={KQLogo}
                alt="kq-logo"
                className={classes.logo}
                />
                <div
                className={classes.flightInfoContainer}
                >
                    <Typography
                    color="inherent"
                    variant="h4"
                    className={classes.cityFrom}
                    >{flight.fromCity}</Typography>
                    <div
                    className={classes.fancy}
                    >
                        <Typography
                        color="inherent"
                        variant="body1"
                        className={classes.dateText}
                        >12/06/2020</Typography>
                        <div
                        className={classes.customIconContainer}
                        >
                            <div
                            className={classes.line}
                            />
                            <div
                            className={classes.customIcon}
                            >
                                <Typography
                                variant="body2"
                                color="secondary"
                                >{flight.class === '0' ? 'Low class' : flight.class === '1' ? 'Middle class' : 'Executive class'}</Typography>
                            </div>
                            <div
                            className={classes.line}
                            />
                        </div>
                        <Typography
                        color="inherent"
                        variant="body1"
                        className={classes.dateText}
                        >Flight No: {flight.plane}</Typography>
                    </div>
                    <Typography
                    color="inherent"
                    variant="h4"
                    className={classes.cityTo}
                    >{flight.toCity}</Typography>
                </div>
                <div
                className={classes.bookingContainer}
                >
                    <Typography
                    variant="h5"
                    className={classes.flightCash}
                    >{flight.price}</Typography>
                    <Button
                    variant="contained"
                    color="primary"
                    className={classes.bookFlightButton}
                    >Book flight</Button>
                    <Typography
                    color="primary"
                    variant="h5"
                    className={classes.flightSeats}
                    >{flight.remainingSeats}</Typography>
                </div>
            </Paper>
        </>
    )
}

export default withStyles(styles)(BookableFlight);
