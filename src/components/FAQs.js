import React from 'react';

//MUI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import withStyles from '@material-ui/core/styles/withStyles';

//utils
import {faqs} from '../utils/faqs';

const styles = theme => ({
    container: {
        marginTop: '6%',
    },
    formContainer: {
        [theme.breakpoints.down('md')] : {
            width: '100%',
            marginTop: 100,
        },
        width: '100%',
        height: 560,
        marginTop: 50,
        marginBottom: 50,
        marginLeft: 0,
        backgroundColor: '#e3e3e3',
        borderStyle: 'solid',
        borderColor: '#E42529',
        borderWidth: 1,
        overflow: 'scroll'
    },
    divider: {
        marginTop: 5,
        marginBottom: 5,
    },
    title: {
        marginLeft: '1%',
        fontWeight: 'bolder',
    },
    root: {
        borderColor: '#E42529',
        borderStyle: 'solid',
        borderWidth: 1,
        width: '90%',
        marginLeft: '4%',
    }
})

const FAQs = ({ classes }) => {
    return (
        <>
            <Grid container className={classes.container}>
            <Paper elevation={1} className={classes.formContainer}>
                <Typography
                variant="h4"
                color="inherit"
                className={classes.title}
                >Frequently Asked Questions</Typography>
                <Divider
                className={classes.divider}
                />
                <div
                className={classes.root}
                >
                {
                    faqs.map(faq => (
                        <>
                        <Accordion key={faq.heading}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon color="primary"/>}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            >
                            <Typography
                            className={classes.secondaryHeading}
                            color="inherent"
                            variant="h6"
                            >{faq.heading}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                {faq.body}
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        </>
                    ))
                }
                </div>
            </Paper>
            </Grid>
        </>
    )
}

export default withStyles(styles)(FAQs);
