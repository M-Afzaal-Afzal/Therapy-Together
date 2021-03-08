import React from 'react';
import {
    Button,
    Container,
    Divider,
    Grid,
    Hidden,
    makeStyles,
    TextField,
    Typography, useMediaQuery,
    useTheme
} from "@material-ui/core";
import Image from "next/image";
import Link from '../../src/utils/Link';

const useStyles = makeStyles(theme => ({
    signupContainer: {
        padding: '8rem',
        paddingTop: "6rem",

        [theme.breakpoints.down('lg')]: {
            padding: '3rem',
            marginTop: '4rem',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '2rem',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '1rem',
            marginTop: '2rem',
        }
    },
    signupInputWithImage: {
        marginTop: '1rem',
        display: 'flex',
        justifyContent: 'center',
    },
    inputsContainer: {
        maxWidth: '30rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4rem',
        margin: 'auto',
        [theme.breakpoints.down('md')]: {
            padding: "2rem"
        },
        [theme.breakpoints.down('sm')]: {
            padding: '2rem'
        },
        [theme.breakpoints.down('xs')]: {
            padding: "0rem"
        },

    },
    buttonsContainer: {
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
    },
    googleBtnContainer: {
        width: '48%',
        '@media only screen and (max-width: 400px)': {
            width: '130px',
        }
    },
    facebookBtnContainer: {
        width: "48%",
        '@media only screen and (max-width: 400px)': {
            width: '130px',
        }
    },
    googleBtn: {
        background: '#EA4335',
        '&:hover': {
            background: '#c83a2e'
        }
    },
    facebookBtn: {
        background: "#395693",
        '&:hover': {
            background: "#293e69",

        }

    },

    btn: {
        fontFamily: 'Montserrat',
        color: 'white',
        fontSize: '1.2rem',
        borderRadius: '0'
    },

    signupInput: {
        padding: '1rem',
        width: '100%',
    },
    btnGreen: {
        ...theme.btnGreen,
    },
    imageContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    alreadyHaveAccount: {
        marginTop: '.5rem',
        fontSize: '1rem',
        textAlign: 'center',
    },
    dashesOr: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: '1rem',
    },
    dividerContainer: {
        width: '43%',
    },
    divider: {
        border: `1px solid ${theme.palette.primary.main}`,
    }
}))

const SignupOrLogin = (props) => {

    const classes = useStyles();
    const theme = useTheme();

    const matches400 = useMediaQuery('(max-width:400px)')

    return (
        <Container className={classes.signupContainer} maxWidth={'lg'}>
            <Grid container direction={'column'} justify={'center'}>
                <Grid item align={'center'}>
                    <Typography variant={'h1'} color={'primary'}>
                        {props.login ? 'Login' : 'Sign Up'}
                    </Typography>
                </Grid>
                <Grid item container className={classes.signupInputWithImage}>
                    <Grid item md={6} style={{width: "100%"}}>
                        <Grid container direction={'column'} className={classes.inputsContainer}>
                            <Grid item alignItems={'center'} direction={matches400 ? 'column' : 'row'} container
                                  className={classes.buttonsContainer}>
                                <Grid item style={{marginBottom: matches400 ? '1rem' : ''}}
                                      className={classes.googleBtnContainer}>
                                    <Button className={`${classes.btn} ${classes.googleBtn}`} fullWidth>
                                        Google
                                    </Button>
                                </Grid>

                                <Grid item className={classes.facebookBtnContainer}>
                                    <Button className={`${classes.btn} ${classes.facebookBtn}`} fullWidth>
                                        Facebook
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid item className={classes.dashesOr}>
                                <Grid item className={classes.dividerContainer}>
                                    <Divider className={classes.divider}/>
                                </Grid>
                                <Grid item>
                                    <span style={{color: `${theme.palette.primary.main}`}}>or</span>
                                </Grid>
                                <Grid item className={classes.dividerContainer}>
                                    <Divider className={classes.divider}/>
                                </Grid>
                            </Grid>
                            {
                                !props.login ?
                                    <Grid item className={classes.signupInput}>
                                        <TextField
                                            size={'small'}
                                            color={'secondary'}
                                            label={'Name'}
                                            id={'name'}
                                            variant={'outlined'}
                                            fullWidth
                                        />
                                    </Grid>
                                    :
                                    null
                            }

                            <Grid item className={classes.signupInput}>
                                <TextField
                                    size={'small'}
                                    color={'secondary'}
                                    label={'Email'}
                                    id={'email'}
                                    variant={'outlined'}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item className={classes.signupInput}>
                                <TextField
                                    size={'small'}
                                    color={'secondary'}
                                    label={'Password'}
                                    id={'password'}
                                    variant={'outlined'}
                                    fullWidth
                                />
                            </Grid>
                            {
                                !props.login ?
                                    <Grid item className={classes.signupInput}>
                                        <TextField
                                            size={'small'}
                                            color={'secondary'}
                                            label={'Confirm Password'}
                                            id={'confirmPassword'}
                                            variant={'outlined'}
                                            fullWidth
                                        />
                                    </Grid>
                                    :
                                    null
                            }

                            <Grid item className={classes.signupInput}>
                                <Button fullWidth className={classes.btnGreen} variant={'contained'} color={'primary'}>
                                    Sign Up
                                </Button>
                            </Grid>
                            {
                                !props.login ?
                                    <Grid item>
                                        <Typography variant={'body2'} className={classes.alreadyHaveAccount}>
                                            Already have an account? <Link href={'/login'}><span
                                            style={{color: "#7116CC"}}>Login</span></Link>
                                        </Typography>
                                    </Grid>
                                    :
                                    <Grid item>
                                        <Typography variant={'body2'} className={classes.alreadyHaveAccount}>
                                            Don't have an account? <Link href={'/signup'}><span
                                            style={{color: "#7116CC"}}>Sign Up</span></Link>
                                        </Typography>
                                    </Grid>
                            }

                        </Grid>
                    </Grid>
                    <Hidden mdDown>
                        <Grid item md={6} className={classes.imageContainer}>
                            <Image src={'/auth-icon.svg'}
                                   width={theme.breakpoints.down('lg') ? 662.67 : 882.67}
                                   height={theme.breakpoints.down('lg') ? 532 : 732}/>
                        </Grid>
                    </Hidden>
                </Grid>
            </Grid>
        </Container>
    );
};

export default SignupOrLogin;
