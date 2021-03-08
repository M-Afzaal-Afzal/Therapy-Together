import React from 'react';
import { Box, Container, Divider, Grid, makeStyles, Typography, useTheme } from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles(theme => ({
    aboutUsContainer: {
        padding: '8rem',
        paddingBottom: '2rem',
        paddingTop: '4rem',
        [theme.breakpoints.down('sm')]: {
            padding: '6rem',
            paddingBottom: '2rem',
        },

        [theme.breakpoints.down('md')]: {
            padding: '4rem',
            paddingBottom: '2rem',
        },

        [theme.breakpoints.down('sm')]: {
            padding: '2rem',
            paddingBottom: '2rem',
        },

        [theme.breakpoints.down('xs')]: {
            padding: '1rem',
            paddingBottom: '2rem',
        }
    },
    headingContainer: {
        marginBottom: '4rem',
    },
    imageContainer: {
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            marginBottom: '4rem',
        }
    },

    topParagraph: {
        width: '80%',
        paddingBottom: '3rem',
    },
    bottomParagraph: {
        paddingBottom: '1.5rem',
        [theme.breakpoints.down('md')]: {
            textAlign: 'center'
        },
    },
    mainTextContainer: {
        [theme.breakpoints.down('md')]: {
            order: '2',
        }
    },
    divider: {
        marginTop: '.5rem',
        marginBottom: '1.5rem',
        marginRight: "auto",
        width: '40px',
        border: `2px solid ${theme.palette.primary.main}`,
        align: 'left'
    }
}))

const About = () => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Container className={classes.aboutUsContainer} maxWidth={'xl'}>
            <Grid container justify={'center'}>
                <Grid item className={classes.headingContainer}>
                    <Typography color={'primary'} variant={'h1'}>
                        About Us
                    </Typography>
                    <Divider className={classes.divider} />
                </Grid>
                <Grid item container>
                    <Grid item lg={6} className={classes.mainTextContainer}>
                        <Grid container alignItems={'center'} justify={'center'} direction={'column'}>
                            <Grid item align={'center'}>
                                <Typography align={'center'} className={classes.topParagraph} gutterBottom
                                    variant={'body2'}>
                                    “What mental health needs is more sunlight, more candor, and more unashamed
                                    conversation.”
                                </Typography>
                            </Grid>
                            <Grid item className={classes.bottomParagraph}>
                                <Typography variant={'body2'}>
                                    living with anxiety, turning up, and doing stuff with anxiety takes a strength that
                                    most people will never know. Mental health is an important topic, and should be
                                    discussed more frequently. We want to make you understand that It’s not “attention
                                    seeking.” It is mainly because We believe before medicine, you need a good
                                    conversation.
                                </Typography>
                            </Grid>
                            <Grid item className={classes.bottomParagraph}>
                                <Typography variant={'body2'}>
                                    “Therapy Together” is mainly a mental therapy forum website which aims to help
                                    mentally stressed or traumatized people to get over their grievances and past
                                    traumas. We believe that poor mental health can cause poor physical health and
                                    disturb the quality of your life. Also we believe that most of our stress and poor
                                    mental health can be solved with communication. True suffering is being trapped in
                                    your own head.
                                </Typography>
                            </Grid>
                            <Grid item className={classes.bottomParagraph}>
                                <Typography variant={'body2'}>
                                    Therapy Together seeks to prevent and resolve mental or emotional conflicts with
                                    ourselves, enhance emotional freedom and improve health. This website mainly aims to
                                    make you feel like home where your problems are heard without any judgement. We
                                    clearly understand that most of us avoid confrontation when it comes to
                                    communicating out traumas with people
                                </Typography>
                            </Grid>
                            <Grid item className={classes.bottomParagraph}>
                                <Typography variant={'body2'}>
                                    Here you can openly write about your personal issues anonymously and get relevant
                                    answer or feedback which might help you to get over the things that trouble you
                                    mentally or emotionally. Also we publish blogs every now and then which might be
                                    considered as a tool to guide yourself in making better decisions and evaluating
                                    yourself. </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={6} align={'center'} className={classes.imageContainer}>
                        <Image src={'/about.svg'}
                            width={theme.breakpoints.down('lg') ? 662.67 : 882.67}
                            height={theme.breakpoints.down('lg') ? 532 : 732}
                        />
                    </Grid>
                </Grid>

            </Grid>
        </Container>
    );
};

export default About;
