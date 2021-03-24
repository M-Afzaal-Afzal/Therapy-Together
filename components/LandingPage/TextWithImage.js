import React from 'react';
import {Box, Button, Divider, Grid, Hidden, IconButton, makeStyles, Typography, useTheme} from "@material-ui/core";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import Image from "next/image";
import Container from "@material-ui/core/Container";
import Link from '../../src/utils/Link';

import {Link as smoothScrollLink} from 'react-scroll';

const useStyles = makeStyles(theme => ({
    sectionContainer: {
        ...theme.sectionContainer,
    },
    heroHeading: {
        textAlign: 'start',
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
            marginBottom: '2rem',
        }
    },
    heroTextContainer: {
        padding: '1.5rem',
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
        }
    },
    heroImageContainer: {
        padding: '3rem',
        [theme.breakpoints.down('xs')]: {
            padding: '0',
        }

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
        textAlign: 'justify',
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
        }
    },
    heroBtnContainer: {
        textAlign: "start",
        marginTop: '3rem',
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            marginBottom: '2rem',
        }

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
}))

const TextWithImage = (props) => {

    const classes = useStyles();
    const theme = useTheme();


    return (
        <Container style={{margin: props.hasButtons ? '2rem auto' : '5rem auto'}} className={classes.sectionContainer}
                   maxWidth={'xl'}
                   component={Grid} item container align={'center'}
                   alignItems={'center'} justify={'center'}
        >
            <Grid item lg={6} className={classes.heroTextContainer}>
                <div>
                    <Typography color={'primary'} className={classes.heroHeading} variant={'h1'}>
                        {props.mainHeading}
                    </Typography>
                    <Hidden xsDown>
                        <Divider color={'primary'}
                                 className={`${classes.hDivider} ${!props.hasButtons ? classes.hDividerCom : ''}`}/>
                    </Hidden>
                </div>
                <Typography gutterBottom variant={"body2"} className={classes.heroParagraph}>
                    {props.bodyTextOne}
                </Typography>
                {props.hasButtons ?
                    <>
                        <div className={classes.heroBtnContainer}>
                            <Button className={classes.btnGreen} color={'primary'}
                                    variant={'contained'} component={Link}
                                    href={'forum'}
                                    style={{textDecoration: 'none'}}
                            >
                                Explore
                            </Button>
                            <Button component={smoothScrollLink} to={'doctors'} smooth className={classes.btnWhite} variant={'outlined'}>Consult</Button>
                        </div>

                        <Hidden mdDown>
                            <div className={classes.arrowIconContainer}>
                                <Box className={classes.arrowIcon}>

                                    <IconButton color={'primary'} component={smoothScrollLink} to={'about'} smooth>
                                        <ArrowDownwardOutlinedIcon color={'primary'}/>
                                    </IconButton>
                                </Box>
                            </div>
                        </Hidden>

                    </>
                    : null
                }

            </Grid>
            <Grid item lg={6} className={classes.heroImageContainer}>
                <Image src={props.imageSrc}
                       priority
                       width={theme.breakpoints.down('lg') ? 662.67 : 882.67}
                       height={theme.breakpoints.down('lg') ? 532 : 732}/>
            </Grid>
        </Container>
    );
};

export default TextWithImage;
