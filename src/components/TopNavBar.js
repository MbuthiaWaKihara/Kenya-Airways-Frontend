import React from 'react';

//Mui
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

//images
import KQLogoWhite from '../images/kq-logo-white.png';

//components
import TopNavTabs from './TopNavTabs';

const styles = theme => ({
    logo: {
        width: '25%',
        height: '90px',
        padding: '20px',
        [theme.breakpoints.down('md')]: {
            width: '50%',
            height: '50px',
        }
    }, 
});

const TopNavBar = ({classes}) => {
    return (
        <AppBar className={classes.navbar}>
            <Toolbar>
                <img
                src={KQLogoWhite}
                alt="kq-logo"
                className={classes.logo}
                />
                <TopNavTabs />
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(styles)(TopNavBar);
