import React from 'react';
import {Box, Button, Divider, Grid, IconButton, makeStyles, Typography} from "@material-ui/core";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import Image from "next/image";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
    sectionContainer: {
        width: '100%',
        minHeight: 'calc(100vh - 4rem)',
    },
    heroHeading: {
        textAlign: 'start',
    },
    heroTextContainer: {
        padding: '1.5rem'
    },
    heroImageContainer: {
        padding: '3rem',
    },
    hDivider: {
        marginTop: '1rem',
        marginBottom: '1rem',
        marginRight: "auto",
        width: '66px',
        border: `2px solid ${theme.palette.primary.main}`,
        align: 'left'
    },
    hDividerCom: {
        width: '50px'
    },
    heroParagraph: {
        // width: '70%',
        marginRight: "auto",
        textAlign: 'justify'
    },
    heroBtnContainer: {
        textAlign: "start",
        marginTop: '3rem',
        display: 'flex',

    },
    btnWhite: {
        ...theme.btnWhite,
    },
    btnGreen: {
        ...theme.btnGreen,
        marginRight: '2rem'
    },
    arrowIconContainer: {
        textAlign: 'left',
        position: "relative",
        // marginTop: '5rem'
    },
    arrowIcon: {
        position: "absolute",
        top: '4rem',
        left: '0',
        background: '#f7f7e8',
        borderRadius: '50%'
    },
    messageIcon: {
        position: "fixed",
        bottom: theme.spacing(3),
        right: theme.spacing(3),
        background: `linear-gradient(136.25deg, #ffffff 0%, #6d9773 100%)`,
        borderRadius: '50%',
        zIndex: '30',
    },
}))

const TextWithImage = (props) => {

    const classes = useStyles();

    return (
        <Container style={{margin: props.hasButtons ? '2rem auto' : '5rem auto'}} className={classes.sectionContainer}
                   maxWidth={'xl'}
                   component={Grid} item container align={'center'}
                   alignItems={'center'} justify={'center'}
        >
            <Grid item md={6} className={classes.heroTextContainer}>
                <Typography color={'primary'} className={classes.heroHeading} variant={'h1'}>
                    {props.mainHeading}
                </Typography>
                <Divider color={'primary'} className={`${classes.hDivider} ${!props.hasButtons ? classes.hDividerCom : ''}`}/>
                <Typography gutterBottom variant={"body2"} className={classes.heroParagraph}>
                    {props.bodyTextOne}
                </Typography>
                {props.hasButtons ?
                    <>
                        <div className={classes.heroBtnContainer}>
                            <Button className={classes.btnGreen} color={'primary'}
                                    variant={'contained'}>Explore</Button>
                            <Button className={classes.btnWhite} variant={'outlined'}>Consult</Button>
                        </div>
                        <div className={classes.arrowIconContainer}>
                            <Box className={classes.arrowIcon}>
                                <IconButton><ArrowDownwardOutlinedIcon color={'primary'}/></IconButton>
                            </Box>
                        </div>
                    </>
                    : null
                }

            </Grid>
            <Grid item md={6} className={classes.heroImageContainer}>
                <Image src={props.imageSrc} width={882.67} height={732}/>
                {props.hasButtons ?
                    <Box className={classes.messageIcon}>
                        <IconButton color={'primary'}>
                            <Image src={'/chatbubbles-icon.svg'} width={30} height={30}/>
                        </IconButton>
                    </Box>
                    :
                    null
                }

            </Grid>
        </Container>
    );
};

export default TextWithImage;
