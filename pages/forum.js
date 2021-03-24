import React from 'react';
import {
    Box,
    Button,
    Container, Divider,
    Grid,
    makeStyles,
    TextField, Typography,

} from "@material-ui/core";
import {firestore} from "../src/utils/firebaseUtils";
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import {selectDisplayName, selectImageUrl} from "../src/store/user/user.selectors";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {useSnackbar} from "notistack";
import ForumMessage from "../components/Forum/ForumMessage";

const useStyles = makeStyles(theme => ({
    forumContainer: {
        padding: '8rem',

        paddingBottom: '2rem',
        paddingTop: '4rem',
        [theme.breakpoints.down('sm')]: {
            padding: '6rem',
            paddingBottom: '2rem',
        },

        [theme.breakpoints.down('md')]: {
            padding: '4rem',
            paddingBottom: '2rem',
        },

        [theme.breakpoints.down('sm')]: {
            padding: '2rem',
            paddingBottom: '2rem',
        },

        [theme.breakpoints.down('xs')]: {
            padding: '0rem',
            paddingBottom: '2rem',
        }
    },
    hDividerForum: {
        marginTop: '.5rem',
        marginBottom: '4rem',
        marginRight: "auto",
        width: '50px',
        border: `2px solid ${theme.palette.primary.main}`,
        align: 'left'
    },
    btnGreen: {
        ...theme.btnGreen,
        marginTop: '2rem',
    },
    btnContainer: {
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }

    },

}))


const Forum = () => {

    const displayName = useSelector(selectDisplayName);
    const photoURL = useSelector(selectImageUrl);

    // managing the toast or success or error message

    const {enqueueSnackbar} = useSnackbar();

    const handlePostVariant = (variant) => () => {
        // variant could be success, error, warning, info, or default
        if (variant === 'success')
            enqueueSnackbar('Your question is posted Successfully', {variant});
        else if (variant === 'error')
            enqueueSnackbar('Failed to post a question. Try again!!!');
    };

    // handling the forum posting

    let posts;

    const query = firestore.collection("forum")
        .orderBy("createdAt", "desc");

    const [values, loading, error] = useCollectionData(query, {idField: 'id'});

    if (!loading) {
        posts = values.map(value => {
            return {
                ...value,
                isCommentsShown: false,
            }
        })
        console.log(posts);
    }


    const {register, handleSubmit, errors, control, reset} = useForm();


    const messageReg = register({
        required: "Please enter your message",
        minLength: {
            value: 25,
            message: 'Too short, text must be of 25 characters!!!',
        }
    })

    const onSubmit = handleSubmit(async data => {
        console.log(data)
        const {message} = data;
        const forumRef = firestore.collection('forum');

        const messageData = {
            displayName,
            text: message,
            photoURL,
            likes: [],
            dislikes: [],
            createdAt: new Date(),
            comments: [],
        }

        forumRef.add(messageData)
            .then(() => {
                console.log('message sent successfully');
                handlePostVariant('success')();
                reset({
                    message: '',
                })
            })
            .catch((err) => {
                console.log(err.message)
                handlePostVariant('error')();

            });
    })


    const classes = useStyles();

    return (
        <Container className={classes.forumContainer} maxWidth={'lg'}>
            <Grid container justify={'center'} direction={'column'}>
                <Grid item container justify={'center'}>
                    <Box>
                        <Typography color={'primary'} variant={'h1'}>
                            Forum
                        </Typography>
                        <Divider className={classes.hDividerForum}/>
                    </Box>
                </Grid>
                {
                    !loading && posts ? (
                        posts.map(post => {
                            return (
                                <ForumMessage loading={loading} post={post} key={post.id}/>
                            )
                        })

                    ) : (
                        ['', '', ''].map(_ => (
                            <ForumMessage loading={loading}/>
                        ))
                    )
                }
            </Grid>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container style={{padding: "2rem"}}>
                    <TextField
                        color={'secondary'}
                        fullWidth
                        variant={'outlined'}
                        placeholder={'Ask Anything'}
                        multiline rows={6} rowsMax={6}
                        inputRef={messageReg}
                        aria-controls={control}
                        name={'message'}
                        error={Boolean(errors.message)}
                        helperText={errors.message ? errors.message.message : ''}
                        // style={{background: theme.palette.secondary.main}}
                    />
                    <Grid item container className={classes.btnContainer}>
                        <Button type={'submit'} className={classes.btnGreen} size={'medium'} color={'primary'}
                                variant={'contained'}>
                            SEND
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default Forum;
