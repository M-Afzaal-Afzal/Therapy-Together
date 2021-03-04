import React from 'react';
import {Box, Button, Divider, Grid, IconButton, makeStyles, Typography} from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Image from "next/image";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
    sectionContainer: {
       ...theme.sectionContainer,
    },
    doctorMainTextContainer: {
        padding: '4rem 2rem',
    },
    doctorImageContainer: {
        position: 'relative',
        paddingTop: '8.5rem',
        height: '100%'
    },
    doctorImage: {
        position: "absolute",
        bottom: 0,
    },
    btnGreen: {
        ...theme.btnGreen,
    },
    hDivider: {
        marginTop: '1rem',
        marginBottom: '8rem',
        marginRight: "auto",
        width: '50px',
        border: `2px solid ${theme.palette.primary.main}`,
        align: 'left'
    },
    heroHeading: {
        textAlign: 'start',
    },
    doctorName: {
        textAlign: 'start',
    },
    doctorMainText: {
        marginTop: '1rem',
        width: '60%',
        textAlign: "justify",
        marginBottom: '2rem'
    },
    btnContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}))

const Doctor = () => {

    const classes = useStyles();

    return (
        <Container className={classes.sectionContainer}
                   maxWidth={'xl'}
                   component={Grid} item container
                   alignItems={'center'} justify={'center'}
        >
            <Grid item md={6} className={classes.doctorMainTextContainer}>
                <Typography color={'primary'} className={classes.heroHeading} variant={'h1'}>
                    Consult Our Doctors
                </Typography>
                <Divider color={'primary'} className={`${classes.hDivider}`}/>
                <Typography color={'primary'} variant={"h3"} className={classes.doctorName}>
                    Dr. M Afzaal Afzal
                </Typography>
                <Typography gutterBottom variant={'body2'}>
                    MBBS
                </Typography>
                <Typography gutterBottom variant={'body2'} className={classes.doctorMainText}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet, asperiores consequuntur
                    deserunt fugit inventore ipsum libero nam nostrum officiis pariatur porro quae quo reiciendis saepe
                    similique tempora voluptatem voluptatibus.
                </Typography>
                <div className={classes.btnContainer}>
                    <Button className={classes.btnGreen} color={'primary'}
                            variant={'contained'}>
                        Contact
                    </Button>
                    <div>
                        <IconButton>
                            <ArrowBackIcon color={'primary'}/>
                        </IconButton>
                        <IconButton>
                            <ArrowForwardIcon color={'primary'}/>
                        </IconButton>

                    </div>
                </div>

            </Grid>
            <Grid item md={6} className={classes.doctorImageContainer}>
                <Box className={classes.doctorImage}>
                    <Image src={'/doctor-icon.svg'} width={882.67} height={732}/>
                </Box>
            </Grid>
        </Container>
    );
};

export default Doctor;
