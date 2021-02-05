import React from 'react';

//MUI
import withStyles from '@material-ui/core/styles/withStyles';

//components
import Abouts from '../components/Abouts';

const styles = theme => ({
    container: {
        marginTop: '8%',
    }
})

const AboutUs = ({ classes }) => {
    return (
        <>
            <Abouts />
        </>
    )
}

export default withStyles(styles)(AboutUs);
