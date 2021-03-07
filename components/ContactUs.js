import React from 'react';
import {Button, Container, Grid, Hidden, makeStyles, TextField, Typography} from "@material-ui/core";
import Image from 'next/image';

const useStyles = makeStyles(theme => ({
    inputsContainer: {
        padding: '8rem 0rem 4rem 0',
        maxWidth: '20rem',
    },
    middleInput: {
        margin: '2rem 0'
    },
    imageContainer: {
        padding: '0 0 4rem 4rem',
    },
    btnGreen: {
        ...theme.btnGreen,
        marginTop: '2rem',
        marginBottom: '2rem'
    }
}))

const ContactUs = () => {

    const classes = useStyles();

    return (
        <Container maxWidth={'lg'}>
            <Grid container justify={'center'} alignItems={'center'}>
                <Grid item>
                    <Typography color={'primary'} variant={'h1'}>
                        Contact us
                    </Typography>
                </Grid>
                <Grid item container justify={'center'} alignItems={'center'}>
                    <Grid item md={4} container direction={'column'} className={classes.inputsContainer}>
                        <Grid item>
                            <TextField fullWidth color={'secondary'} size={'small'} label={'Name'}
                                       variant={'outlined'}/>
                        </Grid>
                        <Grid item className={classes.middleInput}>
                            <TextField fullWidth color={'secondary'} size={'small'} label={'Email'}
                                       variant={'outlined'}/>
                        </Grid>
                        <Grid item>
                            <TextField size={'small'} fullWidth color={'secondary'} rowsMax={6} rows={6} multiline
                                       label={'Message'}
                                       variant={'outlined'}/>
                        </Grid>
                        <Grid item align={'center'}>
                            <Button color={'primary'} className={classes.btnGreen} variant={'contained'}>Send</Button>
                        </Grid>
                    </Grid>
                    <Hidden xsDown>
                        <Grid item md={8} className={classes.imageContainer}>
                            <div>
                                <Image src={'/contact-us-icon.svg'} width={863} height={479.18}/>
                            </div>
                        </Grid>
                    </Hidden>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ContactUs;
