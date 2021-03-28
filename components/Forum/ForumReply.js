import React, {useCallback} from 'react';
import {Box, Button, Grid, makeStyles, TextField} from "@material-ui/core";
import {useSnackbar} from "notistack";
import {useForm} from "react-hook-form";
import {firestore} from "../../src/utils/firebaseUtils";
import {useSelector} from "react-redux";
import {selectCurrentUserId, selectDisplayName, selectImageUrl} from "../../src/store/user/user.selectors";
import {nanoid} from 'nanoid'
import {motion} from "framer-motion";


const useStyles = makeStyles(theme => ({
    btnGreen: {
        ...theme.btnGreen,
        marginTop: '2rem',
        marginBottom: '2rem',
    },
    replyBtnContainer: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        [theme.breakpoints.down('xs')]: {
            width: '90%',
            marginLeft: 'auto',
            display: 'flex',
            justifyContent: 'center'
        }
    }
}))


const ForumReply = ({post}) => {

    const displayName = useSelector(selectDisplayName);
    const photoURL = useSelector(selectImageUrl);


    const {enqueueSnackbar} = useSnackbar();

    const classes = useStyles();

    const handleCommentVariant = useCallback((variant) => () => {
        // variant could be success, error, warning, info, or default
        if (variant === 'success')
            enqueueSnackbar('Your comment is posted successfully', {variant});
        else if (variant === 'error')
            enqueueSnackbar('Fail to comment. Try again!!!');
        else if (variant === 'errorLogin')
            enqueueSnackbar('You must have to login to comment!!!');
    }, []);

    const {
        errors: replyErrors,
        handleSubmit: replyHandleSubmit,
        register: replyRegister,
        control: replyControl,
        reset: replyReset
    } = useForm();

    const commentReg = replyRegister({
        required: "Please enter your Reply",
        minLength: {
            value: 25,
            message: 'Too short, text must be of 25 characters!!!',
        }
    })

    const idReg = replyRegister({
        required: false,
    })

    const userId = useSelector(selectCurrentUserId);

    const onSubmitReply = useCallback(replyHandleSubmit(async data => {
        console.log(data);
        if (!userId) {
            handleCommentVariant('errorLogin')();
            return;
        }
        const {comment, id} = data;
        const docRef = firestore.doc(`/forum/${id}`);

        const docSnapshot = await docRef.get();

        console.log(docSnapshot)

        const prevPost = await docSnapshot.data();

        const newComment = {
            id: nanoid(),
            displayName,
            photoURL,
            likes: [],
            dislikes: [],
            text: comment,
            createdAt: new Date(),
        }


        console.log(prevPost)


        docRef.update({
            comments: [...prevPost.comments, newComment]
        })
            .then(() => {
                handleCommentVariant('success')();
                console.log('comment updated successfully')
                replyReset({
                    comment: '',
                })
            })
            .catch((err) => {
                console.log(err.message)
                handleCommentVariant('error')();
            })
    }), [])

    return (
        <Box component={motion.div} layout>
            <form onSubmit={replyHandleSubmit(onSubmitReply)}>
                <Grid item style={{width: '90%', marginLeft: 'auto'}} container>
                    <TextField
                        color={'secondary'}
                        fullWidth
                        variant={'outlined'}
                        placeholder={`Reply to ${post.displayName}`}
                        multiline rows={3} rowsMax={3}
                        inputRef={commentReg}
                        aria-controls={replyControl}
                        name={'comment'}
                        error={Boolean(replyErrors.comment)}
                        helperText={replyErrors.comment ? replyErrors.comment.message : ''}
                        // style={{background: theme.palette.secondary.main}}
                    />
                    <input hidden readOnly defaultValue={post.id} aria-controls={replyControl} name={'id'}
                           ref={idReg}/>
                </Grid>
                <Grid item container className={classes.replyBtnContainer}>
                    <Button type={'submit'} className={classes.btnGreen} size={'medium'} color={'primary'}
                            variant={'contained'}>
                        Reply
                    </Button>
                </Grid>
            </form>
        </Box>

    );
};

export default React.memo(ForumReply);
