import React from 'react';
import {Button, Container, Grid, Hidden, makeStyles, TextField, Typography} from "@material-ui/core";
import Image from 'next/image';
import {useForm} from "react-hook-form";

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

    const {register, handleSubmit, errors, control, reset} = useForm();

    const emailReg = register({
        required: "You must specify an email",
        pattern: {
            value: /^\S+@\S+$/i,
            message: 'Invalid Email'
        }
    })

    const nameReg = register({
        required: "Please Enter Your Real Name",
    })

    const messageReg = register({
        required: "Please enter your message",
        minLength: {
            value: 50,
            message: "Too short message, must consist of 50 characters."
        }
    })

    const onSubmit = handleSubmit(async data => {
        const {email,message} = data;
        console.log(email,message);

    })

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
                        <form onSubmit={handleSubmit(onSubmit)} style={{width: '100%'}}>
                            <Grid item>
                                <TextField
                                    fullWidth
                                    color={'secondary'}
                                    size={'small'}
                                    label={'Name'}
                                    variant={'outlined'}
                                    name={'name'}
                                    helperText={errors.name ? errors.name.message : ''}
                                    error={Boolean(errors.name)}
                                    inputRef={nameReg}
                                    aria-controls={control}
                                />
                            </Grid>
                            <Grid item className={classes.middleInput}>
                                <TextField fullWidth
                                           color={'secondary'}
                                           size={'small'}
                                           label={'Email'}
                                           variant={'outlined'}
                                           name={'email'}
                                           helperText={errors.email ? errors.email.message : ''}
                                           error={Boolean(errors.email)}
                                           inputRef={emailReg}
                                           aria-controls={control}
                                />
                            </Grid>
                            <Grid item>
                                <TextField size={'small'} fullWidth color={'secondary'} rowsMax={6} rows={6} multiline
                                           label={'Message'}
                                           variant={'outlined'}
                                           name={'message'}
                                           helperText={errors.message ? errors.message.message : ''}
                                           error={Boolean(errors.message)}
                                           inputRef={messageReg}
                                           aria-controls={control}
                                />
                            </Grid>
                            <Grid item align={'center'}>
                                <Button color={'primary'} className={classes.btnGreen}
                                        type={"submit"} variant={'contained'}>Send</Button>
                            </Grid>
                        </form>
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
