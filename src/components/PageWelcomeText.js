import React from 'react';

//styled components
import {
    PageText,
    FancyPageText,
} from '../styled-components/Landing';

//MUI
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    root: {
        position: 'relative',
        top: '45%',
        width: '70%',
    }
});

const PageWelcomeText = ({ classes }) => {
    return (
        <>
            <div className={classes.root}>
            <PageText>Start Planning your <FancyPageText>dream trip</FancyPageText> today!</PageText>
            </div>
        </>
    )
}

export default withStyles(styles)(PageWelcomeText);
