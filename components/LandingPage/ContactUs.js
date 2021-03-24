import React from 'react';
import {Button, Container, Grid, Hidden, makeStyles, TextField, Typography} from "@material-ui/core";
import Image from 'next/image';
import {useForm} from "react-hook-form";
import emailjs from 'emailjs-com';
import { useSnackbar} from 'notistack';


const useStyles = makeStyles(theme => ({
    inputsContainer: {
        padding: '8rem 0rem 4rem 0',
        maxWidth: '20rem',
        [theme.breakpoints.down('sm')]: {
            padding: '5rem 0 4rem 0'
        },
        [theme.breakpoints.down('xs')]: {
            padding: '2rem 0 4rem 0'
        },
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

    // handling the form

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

    const reSet = () => {
        reset({
            name: "",
            email: "",
            message: ""
        });
    };
    // Handling snack bar

    const {enqueueSnackbar} = useSnackbar();
    const handleClickVariant = (variant) => () => {
        // variant could be success, error, warning, info, or default
        if (variant === 'success')
            enqueueSnackbar('Message sent successfully', {variant});
        else if (variant === 'error')
            enqueueSnackbar('Sending message failed. Try again!!!');
    };

    // handling the form submission

    const onSubmit = handleSubmit(async data => {
        const {email, message, name} = data;
        console.log(email, message, name);
        // await emailjs.sendForm('service_uezcow5', 'template_l3asham', data, 'user_RU2Nl69CAf72KvoMNEEU7');

        sendFeedback('template_l3asham', {name, email, message});
    })

    const sendFeedback = (templateId, variables) => {
        emailjs
            .send("service_uezcow5", templateId, variables, 'user_RU2Nl69CAf72KvoMNEEU7')
            .then(() => {
                console.log("success !");
                handleClickVariant('success')();
               reSet();
            })
            .catch((err) => {
                    console.log(err);
                    handleClickVariant('error')();
                }
            );
    };


    return (
        <Container id={'contactus'} maxWidth={'lg'}>
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
