import React from 'react';

//MUI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import withStyles from '@material-ui/core/styles/withStyles';

//redux
import { connect } from 'react-redux';
import { fetchAllCountries, signupUser } from '../redux';

const styles = theme => ({
    formContainer: {
        [theme.breakpoints.down('md')] : {
            width: '100%',
            marginTop: 100,
            marginLeft: 0,
            height: 700
        },
        width: '60%',
        height: 530,
        marginTop: 50,
        marginBottom: 50,
        marginLeft: 300,
        backgroundColor: 'rgba(255, 255, 255, .9)',
        borderStyle: 'solid',
        borderColor: '#E42529',
        borderWidth: 1,
    },
    title: {
        color: '#E42529',
        textAlign: 'center',
        // padding: '5%',
    },
    form: {
        width: '80%',
        marginLeft: '15%',
    },
    submitButton: {
        marginTop: '1%',
        width: '70%',
        marginLeft: '15%',
    },
    signUpPrompt: {
        marginTop: '1%',
        marginLeft: '15%',
    },
    signUpButton: {
        color: '#E42529',
        cursor: 'pointer',
    },
    textField: {
        width: '80%',
        [theme.breakpoints.down('md')]: {
            // width: '100%',
        }
    },
    circularProgress: {
        marginLeft: 2,
    }
});


const mapStateToProps = state => ({
    countries: state.countries.all,
    countriesLoading: state.countries.loading,
    countriesError: state.countries.error,
    userLoading: state.user.loading,
    userError: state.user.error,
    signupSuccess: state.user.data.name !== "",
});

const mapDispatchToProps = dispatch => ({
    fetchAllCountries: () => dispatch(fetchAllCountries()),
    signupUser: userCredentials => dispatch(signupUser(userCredentials)),
})

const SignupForm = ({ classes, setShowLogin, countries, countriesLoading, countriesError, fetchAllCountries, isEmail, signupUser, userLoading, userError, signupSuccess }) => {

    const [userCredentials, setUserCredentials] = React.useState({
        name: '',
        idno: '',
        email: '',
        country: 'Kenya',
        number: '', 
        password: '',
        gender: 0,
        type: 1,
    });

    const [error, setError] = React.useState({
        name: false,
        idno: false,
        email: false,
        number: false, 
        password: false,
    });

    const [errorMessage, setErrorMessage] = React.useState({
        name: '',
        idno: '',
        email: '',
        number: '', 
        password: '',
    });

    const changeUserCredentials = e => {
        //clear errors
        setError({
            name: false,
            idno: false,
            email: false,
            number: false, 
            password: false,
        });

        setErrorMessage({
            name: '',
            idno: '',
            email: '',
            number: '', 
            password: '',
        });

        setUserCredentials({
            ...userCredentials,
            [e.target.name]: e.target.name !== "gender" ? e.target.value : parseInt(e.target.value),
        });
    }

    React.useEffect(() => {
        console.log("creds", userCredentials);
    }, [userCredentials]);

    const submitSignup = () => {
        //validate empties
        const credentialsHolder = JSON.parse(JSON.stringify(userCredentials));
        delete credentialsHolder.type;
        delete credentialsHolder.gender;
        delete credentialsHolder.country;

        for (const key in credentialsHolder) {
            if(credentialsHolder[key].trim() === "") {
                setError({
                    ...error,
                    [key]: true,
                });

                setErrorMessage({
                    ...errorMessage,
                    [key]: 'This field cannot remain empty',
                });

                return;
            }
        }

        //validate email
        if(!isEmail(userCredentials.email)) {
            setError({
                ...error,
                email: true,
            });

            setErrorMessage({
                ...errorMessage,
                email: 'Incorrect Email Format',
            });

            return;
        }

        signupUser(userCredentials);
    }

    React.useEffect(() => {
        if(userError) {
            setError({
                ...error,
                email: true,
            });

            setErrorMessage({
                ...errorMessage,
                email: userError,
            });
        }
        //eslint-disable-next-line
    }, [userError]);

    React.useEffect(() => {
        if(signupSuccess) {
            setShowLogin();
        }
        //eslint-disable-next-line
    }, [signupSuccess])

    return (
        <>
            <Paper elevation={1} className={classes.formContainer}>
                <Typography variant="h3" className={classes.title}> Sign Up </Typography>
                <div className={classes.form}>
                    <Grid container spacing={2}>
                    <Grid item lg={6} sm={12}>
                    <TextField
                    label="Name"
                    placeholder="Enter your name"
                    id="outlined-margin-normal"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    name="name"
                    value={userCredentials.name}
                    onChange={changeUserCredentials}
                    error={error.name}
                    helperText={error.name && errorMessage.name}
                    />
                    </Grid>
                    <Grid item lg={6} sm={12}>
                    <InputLabel id="demo-customized-select-label">Select Country</InputLabel>
                    <Select
                    fullWidth
                    onOpen={() => { if(countries.length === 0) fetchAllCountries() }}
                    label="Select Country"
                    placeholder="SelectCountry"
                    labelId="demo-customized-select-label"
                    variant="outlined"
                    id="demo-customized-select"
                    className={classes.textField}
                    name="country"
                    value={userCredentials.country}
                    onChange={changeUserCredentials}
                    >
                    <MenuItem value="Kenya">
                        Kenya
                    </MenuItem>
                    {
                        countriesLoading ? 
                        <MenuItem><em>Loading...</em></MenuItem>
                        : 
                        countriesError ? 
                        <MenuItem><em>An error occured while fetching countries</em></MenuItem>
                        : 
                        countries.map(country => (
                            <MenuItem value={country.name} key={country.name}>{country.name}</MenuItem>
                        ))
                    }
                    </Select>
                    </Grid>
        
                    <Grid item lg={6} sm={12}>
                    <TextField
                    label="ID Number"
                    placeholder="Enter your ID number"
                    id="outlined-margin-normal"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    name="idno"
                    value={userCredentials.idno}
                    onChange={changeUserCredentials}
                    error={error.idno}
                    helperText={error.idno && errorMessage.idno}
                    />
                    </Grid>
                    <Grid item lg={6} sm={12}>
                    <TextField
                    label="Phone Number"
                    type="phone"
                    placeholder="Enter Phone Number"
                    id="outlined-margin-normal"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    name="number"
                    value={userCredentials.number}
                    onChange={changeUserCredentials}
                    error={error.number}
                    helperText={error.number && errorMessage.number}
                    />
                    </Grid>
                    <Grid item lg={6} sm={12}>
                    <TextField
                    label="Email"
                    placeholder="Enter your email address"
                    id="outlined-margin-normal"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    name="email"
                    value={userCredentials.email}
                    onChange={changeUserCredentials}
                    error={error.email}
                    helperText={error.email && errorMessage.email}
                    />
                    </Grid>
                    <Grid item lg={6} sm={12}>
                    <TextField
                    label="Password"
                    type="password"
                    placeholder="Set a secret password"
                    id="outlined-margin-normal"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    name="password"
                    value={userCredentials.password}
                    onChange={changeUserCredentials}
                    error={error.password}
                    helperText={error.password && errorMessage.password}
                    />
                    </Grid>
                    <Grid item lg={6} sm={12}>
                    <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup aria-label="gender" name="gender" row value={userCredentials.gender} onChange={changeUserCredentials}>
                        <FormControlLabel value={1} control={<Radio color="primary"/>} label="Male" />
                        <FormControlLabel value={2} control={<Radio color="primary" />} label="Female" />
                        <FormControlLabel value={0} control={<Radio color="primary" />} label="Other" />
                    </RadioGroup>
                    </FormControl>
                    </Grid>
                    </Grid>
                    <Button
                    variant="contained"
                    color="primary"
                    className={classes.submitButton}
                    onClick={submitSignup}
                    disabled={userLoading}
                    >
                        Sign Up {userLoading && <CircularProgress color="secondary" size={20} className={classes.circularProgress}/>}
                    </Button>
                    <Typography className={classes.signUpPrompt}>
                        Already have an accout? <span className={classes.signUpButton} onClick={setShowLogin}>Log in</span>
                    </Typography>
                </div>
            </Paper>
        </>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withStyles(styles)(SignupForm));
