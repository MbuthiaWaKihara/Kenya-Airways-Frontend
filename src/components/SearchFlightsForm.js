import React from 'react';
import DayjsUtils from '@date-io/dayjs';
import dayjs from 'dayjs';
// import {
//     Link
// } from 'react-router-dom';

//MUI
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import withStyles from '@material-ui/core/styles/withStyles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

//redux
import { connect } from 'react-redux';
import { searchFlights } from '../redux';

const styles = theme => ({
    formContainer: {
        [theme.breakpoints.down('md')] : {
            width: '100%',
            marginTop: 100,
            marginLeft: 0,
        },
        width: '60%',
        height: 530,
        marginTop: 50,
        marginBottom: 50,
        marginLeft: 50,
        backgroundColor: 'rgba(255, 255, 255, .9)',
        borderStyle: 'solid',
        borderColor: '#E42529',
        borderWidth: 1,
    },
    title: {
        color: '#E42529',
        textAlign: 'center',
        padding: '5%',
    },
    form: {
        width: '70%',
        marginLeft: '15%',
    },
    submitButton: {
        marginTop: '10%',
        width: '70%',
        marginLeft: '15%',
    },
    signUpPrompt: {
        marginTop: '10%',
        marginLeft: '15%',
    },
    signUpButton: {
        color: '#E42529',
        cursor: 'pointer',
    },
    circularProgress: {
        marginLeft: 2,
    }, 
    textField: {
        marginBottom: '5%',
    }
});

const mapStateToProps = state => ({
    loading: state.flights.loading,
    didFetch: state.flights.didFetch,
});

const mapDispatchToProps = dispatch => ({
    searchFlights: searchParams => dispatch(searchFlights(searchParams)),
});

const SearchFlightsForm = ({ classes, loading, didFetch, searchFlights, history }) => {

    const [date, setDate] = React.useState('January 27, 2021 00:00 am');
    const [searchParams, setSearchParams] = React.useState({
        from: 'Nairobi',
        to: 'Kisumu',
        planeClass: '0',
    });

    const changeSearchParams = e => {
        setSearchParams({
            ...searchParams,
            [e.target.name] : e.target.value,
        });
    }

    const searchFlight = () => {
        searchFlights(searchParams);
    }

    React.useEffect(() => {
        if(didFetch) {
            history.push('/search-flight');
        }
    }, [didFetch]);

    return (
        <>
            <MuiPickersUtilsProvider utils={DayjsUtils}>
            <Paper elevation={1} className={classes.formContainer}>
                <Typography variant="h3" className={classes.title}> Search Flights </Typography>
                <div className={classes.form}>
                <InputLabel id="demo-customized-select-label">From</InputLabel>
                <Select
                    fullWidth
                    label="From"
                    placeholder="From"
                    labelId="demo-customized-select-label"
                    variant="outlined"
                    id="demo-customized-select"
                    className={classes.textField}
                    name="from"
                    value={searchParams.from}
                    onChange={changeSearchParams}
                    >
                        {
                            ['Nairobi', 'Kisumu', 'Eldoret', 'Mombasa', 'Kerugoya'].map(city => (
                                <MenuItem value={city} key={city}>
                                    {city}
                                </MenuItem>
                            ))
                        }
                    </Select>
                    <InputLabel id="demo-customized-select-label">To</InputLabel>
                    <Select
                    fullWidth
                    label="To"
                    placeholder="To"
                    labelId="demo-customized-select-label"
                    variant="outlined"
                    id="demo-customized-select"
                    className={classes.textField}
                    name="to"
                    value={searchParams.to}
                    onChange={changeSearchParams}
                    >
                        {
                            ['Nairobi', 'Kisumu', 'Eldoret', 'Mombasa', 'Kerugoya'].map(city => (
                                <MenuItem value={city} key={city}>
                                    {city}
                                </MenuItem>
                            ))
                        }
                    </Select>
                    <KeyboardDatePicker
                    fullWidth
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date"
                    onChange={newDate => setDate(dayjs(newDate).format('MMMM DD, YYYY hh:mm a'))}
                    value={date}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    />
                    <InputLabel id="demo-customized-select-label">Class</InputLabel>
                    <Select
                    fullWidth
                    labelId="demo-customized-select-label"
                    variant="outlined"
                    id="demo-customized-select"
                    className={classes.textField}
                    name="planeClass"
                    value={searchParams.planeClass}
                    onChange={changeSearchParams}
                    >
                        {
                            [{
                                name: 'Lower Class',
                                code: '0',
                            },
                            {
                                name: 'Middle Class',
                                code: '1',
                            },
                            {
                                name: 'Executive Class',
                                code: '2',
                            }].map(flightClass => (
                                <MenuItem value={flightClass.code} key={flightClass.code}>
                                    {flightClass.name}
                                </MenuItem>
                            ))
                        }
                    </Select>
                    <Button
                    variant="contained"
                    color="primary"
                    className={classes.submitButton}
                    onClick={searchFlight}
                    disabled={loading}
                    >
                        Search {loading && <CircularProgress color="secondary" size={20} className={classes.circularProgress}/>}
                    </Button>
                </div>
            </Paper>
            </MuiPickersUtilsProvider>
        </>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withStyles(styles)(SearchFlightsForm));
