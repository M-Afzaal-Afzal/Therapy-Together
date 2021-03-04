import React from 'react';
import {Container, Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import Image from 'next/image';

const useStyles = makeStyles(theme => ({
    cardContainer: {
        maxWidth: '16rem',
    },
    cardIconContainer: {
        width: '16rem',
        height: '13rem',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all .5s',
        '&:hover': {
            background: 'rgba(255, 255, 255, .24)',
            borderRadius: '27px',
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
            overflow: 'hidden',
        }
    },
    cardTextContainer: {
        textAlign: "center",
        marginTop: '1rem',
    },
}))

const About = () => {

    const classes = useStyles();

    return (
        <Container
            component={Grid}
            align={'center'}
            // alignItems={'center'}
            justify={'space-around'}
            maxWidth={'lg'}
            item container
        >
            <Grid item className={classes.cardContainer}>
                <div className={classes.cardIconContainer}>
                    <Image src={'/forum-about.svg'} width={80} height={'80'}/>
                </div>
                <div className={classes.cardTextContainer}>
                    <Typography variant={"body2"} align={'justify'}>
                        Here you can interact with people like you so you can feel at ease by sharing your problems.
                        Visit our forum to see how it works
                    </Typography>
                </div>
            </Grid>
            <Grid item className={classes.cardContainer}>
                <div className={classes.cardIconContainer}>
                    <Image src={'/hands-helping-icon.svg'} width={80} height={'80'}/>
                </div>
                <div className={classes.cardTextContainer}>
                    <Typography variant={"body2"} align={'justify'}>
                        It is always appreciable to trust a doctor with your mental health history. Consult with our
                        approachable and compassionate doctors for your mental health problems.
                    </Typography>
                </div>
            </Grid>
            <Grid item className={classes.cardContainer}>
                <div className={classes.cardIconContainer}>
                    <Image src={'/blog-icon.svg'} width={80} height={'80'}/>
                </div>
                <div className={classes.cardTextContainer}>
                    <Typography variant={"body2"} align={'justify'}>
                        For a personal touch, do visit our blog section where you will find people who write about their
                        ups and downs for you so you can benefit from them for self-evaluation
                    </Typography>
                </div>
            </Grid>
        </Container>
    );
};

export default About;
