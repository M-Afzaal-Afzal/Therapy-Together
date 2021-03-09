import React from 'react';
import { Button, Grid, makeStyles, TextField, Typography} from "@material-ui/core";
import {useForm} from "react-hook-form";

const useStyles = makeStyles(theme => ({
    blogSubscribeContainer: {
        background: theme.palette.primary.main,
        borderRadius: '27px',
        padding: '4rem 4rem 6rem',
        maxWidth: '70rem',
        // position: 'absolute',
        margin: '-2rem 3rem',
        zIndex: 5,
        [theme.breakpoints.down('sm')]: {
            padding: '4rem 2rem 4rem',
            borderRadius: 0,
            margin: '0'
        }
    },
    blogSubscribeHeading: {
        marginBottom: '2rem',
    },
    blogSubscribeText: {
        marginBottom: '3rem',
        color: "white",
        [theme.breakpoints.down('xs')]: {
            marginBottom: '1.5rem'
        }
    },
    blogSubscribeButton: {
        background: 'white',
        color: theme.palette.primary.main,
        ...theme.btnWhite,
    },
    btnInputContainer: {
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
        }
    },
    inputContainer: {
        marginRight: '2rem',
        [theme.breakpoints.down('xs')]: {
            margin: 0,
            marginBottom: '1.5rem'
        }
    }
}))

const BlogSubscribe = () => {

    const classes = useStyles();
    const {register, handleSubmit, errors, control, reset} = useForm();

    const emailReg = register({
        required: "You must specify an email",
        pattern: {
            value: /^\S+@\S+$/i,
            message: 'Invalid Email'
        }
    })

    const onSubmit = handleSubmit(async data => {
        const {email} = data;
        console.log(email);

    })

    return (
            <Grid container justify={'center'} direction={'column'} className={classes.blogSubscribeContainer}>
                <Grid item>
                    <Typography className={classes.blogSubscribeHeading} gutterBottom variant={'h2'} align={'center'}>
                        Receive Every Blog
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant={'body2'} className={classes.blogSubscribeText} style={{color: 'white'}}
                                align={'center'}>
                        We would love to email you with the newest blogs so you can always come and read about topics
                        that
                        interest you to keep you up-to-date one our latest content.
                    </Typography>
                </Grid>
                <Grid item container spacing={8} alignItems={'center'} align={'center'} justify={'center'}>
                    <form onSubmit={handleSubmit(onSubmit)} style={{display: 'flex'}}>
                        <Grid className={classes.btnInputContainer} container justify={'center'} alignItems={'flex-start'} style={{margin: '3rem'}}>
                            <Grid item className={classes.inputContainer}>
                                <TextField
                                    size={'small'}
                                    id="subscribe-email"
                                    label="Email"
                                    variant="outlined"
                                    name={'email'}
                                    inputRef={emailReg}
                                    error={Boolean(errors.email)}
                                    aria-controls={control}
                                    helperText={errors.email ? errors.email.message : ''}
                                />
                            </Grid>
                            <Grid item>
                                <Button type={'submit'} variant={'contained'}
                                        className={classes.blogSubscribeButton}>Subscribe</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
    );
};

export default BlogSubscribe;
