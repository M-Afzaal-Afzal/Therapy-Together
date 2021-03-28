import React, {useEffect} from 'react';
import {
    Box,
    Button, CircularProgress,
    Container,
    Divider,
    Grid,
    Hidden,
    makeStyles, Modal,
    TextField,
    Typography, useMediaQuery,
    useTheme
} from "@material-ui/core";
import Image from "next/image";
import Link from '../../src/utils/Link';
import {useForm} from "react-hook-form";
import {
    clearError,
    emailSignInStart,
    facebookSignInStart,
    googleSignInStart,
    signUpStart
} from "../../src/store/user/user.actions";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {selectCurrentUser, selectError, selectIsLoading} from "../../src/store/user/user.selectors";

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
    },
    modalContent: {
        padding: '4rem',
        border: '2px solid #ff6c6c',
        color: '#ff6c6c',
        background: 'white',
        borderRadius: '27px',
        '&:focus': {
            outline: 'none'
        },
        [theme.breakpoints.down('sm')]: {
            padding: '3rem'
        },
        [theme.breakpoints.down('xs')]: {
            padding: '2rem'
        },
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        maxWidth: '40rem',
        margin: ' auto',
        boxShadow: theme.shadows[5],
        '@media only screen and (max-width: 670px)': {
            margin: 'auto 1rem',
        },
    },

}))

const SignupOrLogin = (props) => {

    const classes = useStyles();
    const theme = useTheme();
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const errorMessage = useSelector(selectError);

    const {register, handleSubmit, errors, control, watch} = useForm();

    const nameReg = register({
        required: "Please Enter Your Real Name",
    })

    const password = watch("password");

    const emailReg = register({
        required: "You must specify an email",
        pattern: {
            value: /^\S+@\S+$/i,
            message: 'Invalid Email'
        }
    })

    const passwordReg = register({
        required: "You must specify a password",
        minLength: {
            value: 8,
            message: "Password must have at least 8 characters"
        }
    })

    const confirmPasswordReg = register({
        validate: value =>
            value === password || "The passwords do not match"
    })

    const onSubmit = handleSubmit(async data => {
        console.log(data)
        if (props.login) {
            const {email, password} = data;
            dispatch(emailSignInStart(email, password))

        } else {
            const {name, email, password} = data;
            dispatch(signUpStart(name, email, password));
            // console.log(name,email,password,confirmPassword);
        }
    });

    const googleSignInHandler = async () => {
        await dispatch(googleSignInStart());
        // await router.push('/');
    };

    const facebookSignInHandler = async () => {
        await dispatch(facebookSignInStart());
        // await router.push('/');
    }


    const handleClose = () => {
        dispatch(clearError());
    };

    const router = useRouter();

    const user = useSelector(selectCurrentUser);

    useEffect(() => {
        if (user) {
            router.push('/');
        }
    }, [user])


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
                                    <Button
                                        onClick={googleSignInHandler}
                                        className={`${classes.btn} ${classes.googleBtn}`}
                                        fullWidth
                                    >
                                        Google
                                    </Button>
                                </Grid>

                                <Grid item className={classes.facebookBtnContainer}>
                                    <Button
                                        onClick={facebookSignInHandler}
                                        className={`${classes.btn} ${classes.facebookBtn}`}
                                        fullWidth>
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
                            <form onSubmit={handleSubmit(onSubmit)} style={{width: '100%'}}>
                                {
                                    !props.login ?
                                        <Grid item className={classes.signupInput}>
                                            <TextField
                                                size={'small'}
                                                color={'secondary'}
                                                label={'Name'}
                                                name={'name'}
                                                helperText={errors.name ? errors.name.message : ''}
                                                error={Boolean(errors.name)}
                                                inputRef={nameReg}
                                                aria-controls={control}
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
                                        name={'email'}
                                        helperText={errors.email ? errors.email.message : ''}
                                        error={Boolean(errors.email)}
                                        inputRef={emailReg}
                                        aria-controls={control}
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
                                        name={'password'}
                                        helperText={errors.password ? errors.password.message : ''}
                                        error={Boolean(errors.password)}
                                        inputRef={passwordReg}
                                        aria-controls={control}
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
                                                name={'confirmPassword'}
                                                error={Boolean(errors.confirmPassword)}
                                                helperText={errors.confirmPassword ? errors.confirmPassword.message : ''}
                                                inputRef={confirmPasswordReg}
                                                aria-controls={control}
                                                fullWidth
                                            />
                                        </Grid>
                                        :
                                        null
                                }
                                {
                                    errorMessage ?

                                        // <Grid item align={'center'} className={classes.signupInput}>
                                        //     <Typography style={{color: 'red'}} variant={'body2'}>
                                        //         {errorMessage}
                                        //     </Typography>
                                        // </Grid>
                                        <Modal
                                            open={Boolean(errorMessage)}
                                            onClose={handleClose}
                                            aria-labelledby="error-modal-title"
                                            aria-describedby="error-modal-description"
                                            className={classes.modal}
                                        >
                                            <Box className={classes.modalContent}>
                                                <Typography style={{color: "red"}} variant={'body2'}>
                                                    {errorMessage}
                                                </Typography>
                                            </Box>
                                        </Modal>
                                        :
                                        null
                                }

                                <Grid item className={classes.signupInput}>
                                    <Button
                                        type={'submit'}
                                        fullWidth
                                        className={classes.btnGreen}
                                        variant={'contained'}
                                        color={'primary'}
                                        disabled={isLoading}
                                    >
                                        {
                                            isLoading ?
                                                <CircularProgress size={31} color={'primary'}/>
                                                :
                                                (props.login ? "Login" : "Sign Up")

                                        }
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
                            </form>

                        </Grid>
                    </Grid>
                    <Hidden mdDown>
                        <Grid item md={6} className={classes.imageContainer}>
                            <Image priority src={'/auth-icon.svg'}
                                   alt={props.login ? 'Login Icon' : 'Sign up Icon'}
                                   width={theme.breakpoints.down('lg') ? 662.67 : 882.67}
                                   height={theme.breakpoints.down('lg') ? 532 : 732}/>
                        </Grid>
                    </Hidden>
                </Grid>
            </Grid>
        </Container>
    );
};

export default React.memo(SignupOrLogin);
