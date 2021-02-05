import React from 'react';

//components
import LoginForm from '../components/LoginForm';
import PageWelcomeText from '../components/PageWelcomeText';
import SignupForm from '../components/SignupForm';
import SearchFlightsForm from '../components/SearchFlightsForm';

//MUI
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

//redux
import { connect } from 'react-redux';

const styles = theme => ({
    container: {
        marginTop: '8%',
    },
    textContainer: {
        [theme.breakpoints.down('md')]: {
            display: 'none',
        }
    },
});

const mapStateToProps = state => ({
    isLoggedIn: state.user.isLoggedIn,
})

const Landing = ({ classes, isLoggedIn, history }) => {

    const [showLogin, setShowLogin] = React.useState(true);

    //util functions
    const isEmail = email => {
        //eslint-disable-next-line
        let emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(email.trim().match(emailRegEx)) return true;
        return false;
    }

    return (
        <>
            <Grid container className={classes.container}>
            {
                showLogin ?
                <>
                <Grid item lg={6} sm={12}>
                    {
                        !isLoggedIn ?
                        <LoginForm setShowLogin={() => { if(showLogin) setShowLogin(false) }} isEmail={isEmail}/> :
                        <SearchFlightsForm history={history}/>
                    }
                </Grid>
                <Grid item lg={6} sm={12} className={classes.textContainer}>
                    <PageWelcomeText/>
                </Grid>
                </> :
                <>
                <Grid item lg={12}>
                    <SignupForm setShowLogin={() => { if(!showLogin) setShowLogin(true) }} isEmail={isEmail}/>
                </Grid>
                </>
            }
            </Grid>
        </>
    )
}

export default connect(
    mapStateToProps,
)(withStyles(styles)(Landing));
