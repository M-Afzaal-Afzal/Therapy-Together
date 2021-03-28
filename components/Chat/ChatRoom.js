import React, {useRef} from 'react';

import {firestore} from "../../src/utils/firebaseUtils";
import {useCollectionData} from "react-firebase-hooks/firestore";
import firebase from "firebase/app";
import CloseIcon from '@material-ui/icons/Close';
import Image from 'next/image';

import {
    Button,
    Grid,
    IconButton,
    InputAdornment,
    makeStyles,
    OutlinedInput,
    Typography
} from "@material-ui/core";
import Message from "./Message";
import {useSelector} from "react-redux";
import {selectCurrentUserId, selectDisplayName, selectImageUrl} from "../../src/store/user/user.selectors";
import Link from '../../src/utils/Link';
import {useForm} from "react-hook-form";

const useStyles = makeStyles(theme => ({
    chatRoom: {
        width: '350px',
        height: '450px',
        background: "#F3F7FB",
        borderRadius: '0 0 5px 5px',
        boxShadow: 'rgb(19 15 235 / 30%) 2px 4px 40px',
        position: 'fixed',
        bottom: theme.spacing(3),
        right: theme.spacing(12),
        zIndex: 100,
        [theme.breakpoints.down('xs')]: {
            bottom: theme.spacing(1),
            right: theme.spacing(1),
            width: '300px',
        }
    },
    chatBoxHeader: {
        height: '60px',
        backgroundColor: theme.palette.primary.main,
        padding: '.3rem',
    },
    chatBoxTitle: {
        color: 'white',
        padding: '12px'
    },
    messagesContainer: {
        // height: "100%",
        // flexGrow: '1',
        padding: "1rem",
        height: '20.85rem',
        overflowY: "scroll",
        flexWrap: 'nowrap',
        // position: 'relative',
    },
    textField: {
        marginBottom: '-2px',
    },
    avatarContainer: {
        marginBottom: '.5rem',
        marginTop: '.5rem'
    },
    msg: {
        padding: '.5rem',
    },
    msgReceive: {
        background: theme.palette.primary.main,
        borderRadius: '0 10.5rem 10.5rem 10.5rem',
        color: 'white',
        border: `1px solid ${theme.palette.primary.main}`,
    },
    avatarSendContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    msgSend: {
        // background: theme.palette.primary.main,
        borderRadius: '10.5rem 0 10.5rem 10.5rem',
        border: `1px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.main,
        textAlign: 'left',
    },
    msgSendContainer: {
        display: 'flex',
        justifyContent: "flex-end",
    },
    btnGreen: {
        ...theme.btnGreen,
        marginTop: '2rem',
    }
}))


const ChatRoom = ({isChatOpened, toggleIsChatOpened}) => {

    const classes = useStyles();
    const messagesEndRef = useRef(null)

    const userId = useSelector(selectCurrentUserId);
    const photoURL = useSelector(selectImageUrl);
    const displayName = useSelector(selectDisplayName)

    const messageRef = firestore.collection('messages');
    const query = messageRef.orderBy('createdAt').limit(50);

    const [messages] = useCollectionData(query, {idField: 'id'});

    // Handling the form
    const {register, handleSubmit, control, reset} = useForm();

    const messageReg = register({
        required: true,
        validate: msg => msg.trim() !== ''
    })

    const onSubmit = handleSubmit(async ({message}) => {
        await messageRef.add({
            text: message,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid: userId,
            photoURL: photoURL,
            displayName: displayName,
        })
            .then(() => {
                console.log('Message sent successfully');
                messagesEndRef.current?.scrollIntoView({behavior: "smooth"})
                reset({
                    message: '',
                })

                // vip we must have to use ? here to work it properly

            })
            .catch(error => {
                console.log(error);
            })
    });

    // output variables that will render on dom

    const doctorsMessages = [
        {
            id: 1,
            displayName: 'Dr. Saima Shabir',
            text: 'What I aim is to help you create a healthy alliance between your mind and body through which will empower you to start setting your goals and practising new behaviour which will enable you to grow beyond your limitations to discover your best self. Do not hesistate to come and share your thoughts with me',
            photoURL: "doctors/SaimaShabir.jpeg",
            uid: null,
        }, {
            id: 2,
            displayName: 'Dr. Nukhba Younas',
            text: 'Communication is the solution to most of our problems hence do not hesistate to share yours with me. Have the audacity to hit me up anytime you feel like you need somebody to talk to. Do consult with me as it is appreciable to release that toxic energy inside you by speaking to somebody',
            photoURL: "/doctors/nukhbaYounas.jpg",
            uid: 'ttt',
        }, {
            id: 3,
            displayName: 'Dr. Adeel',
            text: 'Feel easy to trust me with your mental or medical history. It is essential to trust me and open up about everything as a doctor can predict your condition right onoy if you be honest with the doctor in telling your problem',
            photoURL: "doctors/adeelKhalid.jpeg",
            uid: 'ttt',
        },

    ]

    const chatMsgPopUp = (
        <>
            <Grid item container direction={'column'} className={classes.messagesContainer}>
                {
                    doctorsMessages?.map(message => {
                        return (
                            <Message key={message.id} sender={message.uid === userId}
                                     photoURL={message.photoURL}
                                     displayName={displayName}
                                     text={message.text}/>)
                    })
                }

                {
                    messages?.map(message => {
                        return (
                            <Message key={message.id} sender={message.uid === userId}
                                     photoURL={message.photoURL}
                                     displayName={displayName}
                                     text={message.text}/>)
                    })
                }
                <div id={'lastChatElement'} ref={messagesEndRef}/>
            </Grid>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid item container className={classes.inputContainer}>
                    <OutlinedInput
                        id="chat input"
                        className={classes.textField}
                        fullWidth
                        placeholder={'Type a new message'}
                        variant="outlined"
                        color={'secondary'}
                        aria-label={'none'}
                        name={'message'}
                        inputRef={messageReg}
                        aria-controls={control}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    type={'submit'}
                                    color={'primary'}
                                    aria-label="send message"
                                >
                                    <Image src={'/send.svg'} width={25} height={25}/>
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </Grid>
            </form>
        </>
    )

    const chatLoginPopup = (
        <Grid item direction={'column'} container justify={'center'} alignItems={'center'}
              className={classes.messagesContainer}>
            <Grid item align={'center'}>
                <Typography color={'primary'} variant={'h3'}>Login to send messages</Typography>
            </Grid>
            <Grid item>
                <div onClick={toggleIsChatOpened}>
                    <Button style={{textDecoration: 'none'}} component={Link} href={'/login'} variant={'contained'}
                            className={classes.btnGreen} color={'primary'}>
                        Login
                    </Button>
                </div>
            </Grid>
        </Grid>
    )


    return (
        isChatOpened ?
            <>
                <Grid container direction={'column'} className={classes.chatRoom}>
                    <Grid container className={classes.chatBoxHeader} alignItems={'center'}
                          justify={'space-between'}>
                        <Grid item>
                            <Typography className={classes.chatBoxTitle} variant={'body2'}>
                                Live Chat
                            </Typography>
                        </Grid>
                        <Grid item>
                            <IconButton onClick={toggleIsChatOpened}>
                                <CloseIcon style={{color: 'white'}} fontSize={'small'}/>
                            </IconButton>
                        </Grid>
                    </Grid>
                    {
                        userId ?
                            chatMsgPopUp
                            :
                            chatLoginPopup
                    }


                </Grid>
            </>
            :
            null
    );
}

export default ChatRoom;
