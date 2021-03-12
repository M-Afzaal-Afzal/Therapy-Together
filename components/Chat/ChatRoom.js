import React, {useRef} from 'react';

import {firestore} from "../../src/utils/firebaseUtils";
import {useCollectionData} from "react-firebase-hooks/firestore";
import firebase from "firebase/app";
import CloseIcon from '@material-ui/icons/Close';
import Image from 'next/image';

import {
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
                reset({
                    message: '',
                })

                // vip we must have to use ? here to work it properly
                messagesEndRef.current?.scrollIntoView({behavior: "smooth"})

            })
            .catch(error => {
                console.log(error);
            })
    });


    const chatPopUp = (
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
                <Grid item container direction={'column'} className={classes.messagesContainer}>

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
                            margin="normal"
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
            </Grid>
        </>
    )

    return (
        isChatOpened ? chatPopUp : null
    );
};

export default ChatRoom;
