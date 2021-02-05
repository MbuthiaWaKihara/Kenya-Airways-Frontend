import React from 'react';

//MUI
import withStyles from '@material-ui/core/styles/withStyles';

//components
import FAQs from '../components/FAQs';

const styles = theme => ({
    container: {
        marginTop: '8%',
    }
})

const Inquiry = ({ classes }) => {
    return (
        <>
            <FAQs />
        </>
    )
}

export default withStyles(styles)(Inquiry);
