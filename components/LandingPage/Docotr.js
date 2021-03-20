import React from 'react';
import {
    Avatar,
    Box,
    Button,
    Divider,
    Grid, Hidden,
    IconButton,
    makeStyles,
    Typography,
    useMediaQuery,
    useTheme
} from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Image from "next/image";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
    sectionContainer: {
        ...theme.sectionContainer,
        marginTop: '2rem',
    },
    doctorMainTextContainer: {
        padding: '4rem 2rem',
        [theme.breakpoints.down('xs')]: {
            padding: '4rem 0rem',

        }
    },
    doctorImageContainer: {
        position: 'relative',
        paddingTop: '8.5rem',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnGreen: {
        ...theme.btnGreen,
        marginBottom: '1rem',
    },
    hDivider: {
        marginTop: '1rem',
        marginBottom: '8rem',
        marginRight: "auto",
        width: '50px',
        border: `2px solid ${theme.palette.primary.main}`,
        align: 'left',
        [theme.breakpoints.down('lg')]: {
            marginBottom: '4rem',
        },
    },
    heroHeading: {
        textAlign: 'start',
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
            marginBottom: '2rem',
        },

    },
    doctorName: {
        textAlign: 'start',
    },
    doctorMainText: {
        marginTop: '1rem',
        width: '70%',
        textAlign: "justify",
        marginBottom: '2rem',
        [theme.breakpoints.down('md')]: {
            width: '80%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center'
        }
    },
    btnContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down('lg')]: {
            flexDirection: 'column',
            alignItems: 'start'
        },
        [theme.breakpoints.down('xs')]: {
            alignItems: 'center',
        }
    },
    arrowContainer: {
        display: 'flex',
        width: "100%",
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: '1.5rem',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center',
        }
    },
    headingWithAvatar: {
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            alignItems: 'center',
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        }
    },
    doctorHeadingWithSubtitle: {
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
        }
    },
    avatarContainer: {
        marginRight: '2rem',
        [theme.breakpoints.down('xs')]: {
            margin: 0,
            marginBottom: '2rem',
        }
    },
    avatar: {
        width: '50px',
        height: '50px',
        [theme.breakpoints.down('xs')]: {
            width: '80px',
            height: '80px'
        }
    },
    doctorImage: {
        marginTop: '3rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    greenCircle: {
        background: '#f7f7e8',
        borderRadius: '50%',
        width: '700px',
        height: '700px',
        // overflow: 'hidden',
        position: 'relative',
    },
    headingContainer: {
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            justifyContent: 'center',
        }
    }
}))

const Doctor = () => {

    const classes = useStyles();
    const theme = useTheme();

    const matchesMd = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Container className={classes.sectionContainer}
                   maxWidth={'xl'}
                   component={Grid} item container
                   alignItems={'center'} justify={'center'}
        >

            <Grid item md={matchesMd ? 12 : 6} className={classes.doctorMainTextContainer}>
                <div className={classes.headingContainer}>
                    <div>
                        <Typography color={'primary'} className={classes.heroHeading} variant={'h1'}>
                            Consult Our Doctors
                        </Typography>
                        <Hidden xsDown>
                            <Divider color={'primary'} className={`${classes.hDivider}`}/>
                        </Hidden>
                    </div>
                </div>
                <div className={classes.headingWithAvatar}>
                    {
                        matchesMd ?
                            <div className={classes.avatarContainer}>
                                <Avatar className={classes.avatar} src={'doctor.png'}/>
                            </div>
                            :
                            null
                    }


                    <div className={classes.doctorHeadingWithSubtitle}>
                        <Typography color={'primary'} variant={"h3"} className={classes.doctorName}>
                            Dr. M Afzaal Afzal
                        </Typography>
                        <Typography variant={'body2'}>
                            MBBS
                        </Typography>
                    </div>
                </div>

                <Typography gutterBottom variant={'body2'} className={classes.doctorMainText}>
                    It is always a good decision to trust a doctor with your mental health history to help with your
                    comfort level. Online Routine consultancy with our trusted, approachable and compassionate
                    doctors
                    is a very good step towards finding your inner peace back.
                </Typography>
                <div className={classes.btnContainer}>
                    <Button className={classes.btnGreen} color={'primary'}
                            variant={'contained'}>
                        Contact
                    </Button>
                    <div className={classes.arrowContainer}>
                        <div>
                            <IconButton>
                                <ArrowBackIcon color={'primary'}/>
                            </IconButton>
                            <IconButton>
                                <ArrowForwardIcon color={'primary'}/>
                            </IconButton>

                        </div>
                    </div>
                </div>

            </Grid>
            <Hidden mdDown>
                <Grid item md={6} className={classes.doctorImageContainer}>
                    <Box className={classes.greenCircle}>
                        <Box className={classes.doctorImage}>
                            <Image priority src={'/doctor.png'} width={520} height={648}/> </Box>
                    </Box>
                </Grid>
            </Hidden>
        </Container>
    );
};

export default Doctor;
