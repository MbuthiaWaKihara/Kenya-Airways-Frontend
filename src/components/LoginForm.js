import React from 'react';

//MUI
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import withStyles from '@material-ui/core/styles/withStyles';

//redux
import { connect } from 'react-redux';
import { loginUser } from '../redux';

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
        marginTop: '10%',
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
    }
});

const mapStateToProps = state => ({
    userLoading: state.user.loading,
    userError: state.user.error,
});

const mapDispatchToProps = dispatch => ({
    loginUser: userCredentials => dispatch(loginUser(userCredentials)),
});

const LoginForm = ({ classes, setShowLogin, isEmail, userLoading, userError, loginUser }) => {

    const [userCredentials, setUserCredentials] = React.useState({
        email: 'lennydennis@gmail.com',
        password: 'test',
    });

    const [error, setError] = React.useState({
        email: false,
        password: false,
    });

    const [errorMessage, setErrorMessage] = React.useState({
        email: '',
        password: '',
    });

    const changeUserCredentials = e => {
        //clear errors
        setError({
            email: false,
            password: false,
        });

        setErrorMessage({
            email: '',
            password: '',
        });

        setUserCredentials({
            ...userCredentials,
            [e.target.name]: e.target.value,
        });
    }

    const submitLogin = () => {
        //validate
        if(userCredentials.email.trim() === "") {
            setError({
                ...error,
                email: true,
            });

            setErrorMessage({
                ...errorMessage,
                email: 'This field is required',
            });

            return;
        }

        if(userCredentials.password.trim() === "") {
            setError({
                ...error,
                password: true,
            });

            setErrorMessage({
                ...errorMessage,
                password: 'This field is required',
            });

            return;
        }

        if(!isEmail(userCredentials.email.trim())){
            setError({
                ...error,
                email: true,
            });

            setErrorMessage({
                ...errorMessage,
                email: 'Incorrect email format',
            });

            return;
        }

        loginUser(userCredentials);
    }

    React.useEffect(() => {
        if(userError) {
            if(userError === "Email does not exist") {
                setError({
                    ...error,
                    email: true,
                });

                setErrorMessage({
                    ...errorMessage,
                    email: userError,
                });
            }

            if(userError === "Passwords do not match") {
                setError({
                    ...error,
                    password: true,
                });

                setErrorMessage({
                    ...errorMessage,
                    password: userError,
                });
            }
        }
        //eslint-disable-next-line
    }, [userError]);

    return (
        <>
            <Paper elevation={1} className={classes.formContainer}>
                <Typography variant="h3" className={classes.title}> Log in </Typography>
                <div className={classes.form}>
                    <TextField
                    fullWidth
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                    id="outlined-margin-normal"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    value={userCredentials.email}
                    helperText={error.email && errorMessage.email}
                    error={error.email}
                    onChange={changeUserCredentials}
                    />
                    <TextField
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    id="outlined-margin-normal"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    value={userCredentials.password}
                    helperText={error.password && errorMessage.password}
                    error={error.password}
                    onChange={changeUserCredentials}
                    />
                    <Button
                    variant="contained"
                    color="primary"
                    className={classes.submitButton}
                    onClick={submitLogin}
                    disabled={userLoading}
                    >
                        Log in {userLoading && <CircularProgress color="secondary" size={20} className={classes.circularProgress}/>}
                    </Button>
                    <Typography className={classes.signUpPrompt}>
                        Don't have an accout? <span className={classes.signUpButton} onClick={setShowLogin}>Sign up</span>
                    </Typography>
                </div>
            </Paper>
        </>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withStyles(styles)(LoginForm));
