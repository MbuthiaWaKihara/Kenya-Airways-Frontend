import React from 'react';
import {
    Link,
} from 'react-router-dom';

//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = theme => ({
    tabs: {
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
        position: 'absolute',
        top: '63%',
        left: '60%',
    }
});

const TopNavTabs = ({classes}) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                className={classes.tabs}
            >
                <Tab label="Home" component={Link} to="/"/>
                <Tab label="Inquiry" component={Link} to="/inquiry"/>
                <Tab label="About Us" component={Link} to="/aboutus" />
            </Tabs>
        </>
    )
}

export default withStyles(styles)(TopNavTabs);
