import React, {useCallback, useState} from 'react';
import {Avatar, Grid, IconButton, makeStyles, Typography} from "@material-ui/core";
import {ThumbDown, ThumbUp} from "@material-ui/icons";
import ForumReply from "./ForumReply";
import {firestore} from "../../src/utils/firebaseUtils";
import {useSelector} from "react-redux";
import {selectCurrentUserId} from "../../src/store/user/user.selectors";
import {cloneDeep} from 'lodash';
import {Skeleton} from "@material-ui/lab";
import {useSnackbar} from "notistack";
import {motion} from "framer-motion";

const useStyles = makeStyles(theme => ({
    headingContainer: {
        marginBottom: '4rem',
    },
    messageContainer: {
        background: theme.palette.secondary.main,
        padding: "1rem",
        width: '90%',
        borderRadius: '4.5px',
        marginBottom: '2rem',
        display: 'grid',
        border: `2px solid  ${theme.palette.primary.main}`,
        gridTemplateColumns: "100px 1fr",
        [theme.breakpoints.down('xs')]: {
            borderRadius: 0,
            padding: '.5rem',
        }
    },
    post: {
        [theme.breakpoints.down('xs')]: {
            borderLeft: 0,
        }
    },
    avatarAndBtnsCont: {
        paddingTop: '.5rem',
        [theme.breakpoints.down('xs')]: {
            padding: 0,
        }
    },
    reply: {
        marginLeft: 'auto',
        background: '#f7f7e8',
        [theme.breakpoints.down('xs')]: {
            borderRight: 0,
        }
    },
    mainContentContainer: {
        padding: "1rem",
        paddingTop: "1.5rem",
        position: 'relative',
        [theme.breakpoints.down('xs')]: {
            // paddingTop: "1.5rem",
            padding: '0',
        }
    },
    avatar: {
        width: 60,
        height: 60,
        [theme.breakpoints.down('sm')]: {
            width: 50,
            height: 50,
        },
        [theme.breakpoints.down('xs')]: {
            width: 30,
            height: 30,
        },
    },
    commentBtn: {
        position: 'absolute',
        background: 'transparent',
        border: 'none',
        bottom: 0,
        left: 17,
        '&:hover': {
            cursor: 'pointer',
        },
        '&:focus': {
            outline: 'none',
        },
        [theme.breakpoints.down('xs')]: {
            left: 0,
        }
    },
    btnGreen: {
        ...theme.btnGreen,
        background: 'transparent',
        color: theme.palette.primary.main,
    },
    likDlkCounter: {
        width: '2.2rem',
    }
}))

const ForumMessage = ({post, loading}) => {

    const userId = useSelector(selectCurrentUserId);

    const [postData, setPost] = useState(post);

    const commentsHandler = useCallback(() => {
        setPost({
            ...postData,
            isCommentsShown: !postData?.isCommentsShown,
        })
    }, [])

    // handling output / variants

    const {enqueueSnackbar} = useSnackbar();

    const handleCommentVariant = useCallback((variant) => () => {
        // variant could be success, error, warning, info, or default
        if (variant === 'success')
            enqueueSnackbar('', {variant});
        else if (variant === 'error')
            enqueueSnackbar('Login to like or dislike');
    }, []);

    // handling post likes

    const postRef = firestore.doc(`/forum/${post?.id}`);

    const postLikeHandler = useCallback(async () => {

        if (!userId) {
            handleCommentVariant('error')();
            return;
        }

        if (post.dislikes.includes(userId)) {
            await postRef.update({
                dislikes: post.dislikes.filter(uid => uid !== userId),
            })
        }

        if (!post.likes.includes(userId)) {
            await postRef.update({
                likes: [...post.likes, userId],
            })
        } else {
            await postRef.update({
                likes: post.likes.filter(uid => uid !== userId),
            })
        }
    }, [])

    // handling post dislikes

    const postDislikeHandler = useCallback(async () => {

        if (!userId) {
            handleCommentVariant('error')();
            return;
        }

        if (post.likes.includes(userId)) {
            await postRef.update({
                likes: post.likes.filter(uid => uid !== userId),
            })
        }

        if (!post.dislikes.includes(userId)) {
            await postRef.update({
                dislikes: [userId, ...post.dislikes],
            })
        } else {
            await postRef.update({
                dislikes: post.dislikes.filter(uid => uid !== userId),
            })
        }
    }, [])

    // handling comment likes

    const commentLikeHandler = useCallback(async (cmntId) => {

        if (!userId) {
            handleCommentVariant('error')();
            return;
        }

        const newPost = cloneDeep(post);
        const commentIndex = newPost.comments.findIndex(comment => comment.id === cmntId);

        if (newPost.comments[commentIndex].dislikes.includes(userId)) {
            newPost.comments[commentIndex].dislikes = newPost.comments[commentIndex].dislikes.filter(uid => uid !== userId);
        }

        if (!newPost.comments[commentIndex].likes.includes(userId)) {
            newPost.comments[commentIndex].likes = [userId, ...newPost.comments[commentIndex].likes];
        } else {
            newPost.comments[commentIndex].likes = newPost.comments[commentIndex].likes.filter(uid => uid !== userId);
        }

        await postRef.update({
            comments: newPost.comments,
        })

    }, [])

    // handling comment dislikes

    const commentDislikeHandler = useCallback(async (cmntId) => {

        if (!userId) {
            handleCommentVariant('error')();
            return;
        }

        const newPost = cloneDeep(post);
        const commentIndex = newPost.comments.findIndex(comment => comment.id === cmntId);

        if (newPost.comments[commentIndex].likes.includes(userId)) {
            newPost.comments[commentIndex].likes = newPost.comments[commentIndex].likes.filter(uid => uid !== userId);
        }

        if (!newPost.comments[commentIndex].dislikes.includes(userId)) {
            newPost.comments[commentIndex].dislikes = [userId, ...newPost.comments[commentIndex].dislikes];
        } else {
            newPost.comments[commentIndex].dislikes = newPost.comments[commentIndex].dislikes.filter(uid => uid !== userId);
        }

        await postRef.update({
            comments: newPost.comments,
        })
    }, [])

    const classes = useStyles();

    return (
        <>

            {
                !loading ? (
                    <Grid component={motion.div} layout direction={'row'} item container
                          className={`${classes.messageContainer} ${classes.post}`}>
                        <Grid align={'center'} item className={classes.avatarAndBtnsCont}>
                            <Grid justify={'center'} alignItems={'center'} container direction={'column'}>
                                <Grid item>
                                    <Avatar className={classes.avatar} src={post?.photoURL}>
                                        {post?.displayName[0]}
                                    </Avatar>
                                </Grid>
                                <Grid style={{margin: '1.5rem 1rem .5rem',}} item>
                                    <Grid container alignItems={'center'}>
                                        <Grid item className={classes.likDlkCounter}>
                                            <Typography color={'primary'}
                                                        variant={'body2'}>{(post?.likes.length < 1000) ? post?.likes.length : '1k+'}</Typography>
                                        </Grid>
                                        <Grid>
                                            <IconButton style={{padding: '6px'}} onClick={postLikeHandler}>
                                                <ThumbUp fontSize={'small'} color={'primary'}/>
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container alignItems={'center'}>
                                        <Grid item className={classes.likDlkCounter}>
                                            <Typography color={'primary'}
                                                        variant={'body2'}>{(post?.dislikes.length < 1000) ? post?.dislikes.length : '1k+'}</Typography>
                                        </Grid>
                                        <Grid>
                                            <IconButton style={{padding: '6px'}} onClick={postDislikeHandler}>
                                                <ThumbDown fontSize={'small'} color={'primary'}/>
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className={classes.mainContentContainer} item>
                            <Typography gutterBottom variant={'body2'} color={'primary'}>
                                {post?.displayName}
                            </Typography>
                            <Typography gutterBottom variant={'body2'}>
                                {post?.text}
                            </Typography>
                            <Typography style={{marginTop: '1.5rem'}} color={'primary'} variant={'body2'}>
                                <button onClick={commentsHandler}
                                        className={`${classes.commentBtn} ${classes.btnGreen}`}>
                                    comments
                                </button>
                            </Typography>
                        </Grid>
                    </Grid>
                ) : (
                    <Grid direction={'row'} item container className={`${classes.messageContainer} ${classes.post}`}>
                        <Grid align={'center'} item className={classes.avatarAndBtnsCont}>
                            <Grid justify={'center'} alignItems={'center'} container direction={'column'}>
                                <Grid item>
                                    <Skeleton variant={'circle'}>
                                        <Avatar className={classes.avatar}/>
                                    </Skeleton>

                                </Grid>
                                <Grid style={{margin: '1.5rem 1rem .5rem',}} item>
                                    <Grid container alignItems={'center'}>
                                        <Grid item className={classes.likDlkCounter}>
                                            <Skeleton variant={'text'}>
                                                <Typography color={'primary'}
                                                            variant={'body2'}>100</Typography>
                                            </Skeleton>
                                        </Grid>
                                        <Grid>
                                            <IconButton style={{padding: '6px'}}>
                                                <ThumbUp fontSize={'small'} color={'primary'}/>
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container alignItems={'center'}>
                                        <Grid item className={classes.likDlkCounter}>
                                            <Skeleton variant={'text'}>
                                                <Typography color={'primary'}
                                                            variant={'body2'}>100</Typography>
                                            </Skeleton>
                                        </Grid>
                                        <Grid>
                                            <IconButton style={{padding: '6px'}}>
                                                <ThumbDown fontSize={'small'} color={'primary'}/>
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className={classes.mainContentContainer} item>
                            <Skeleton>
                                <Typography gutterBottom variant={'body2'} color={'primary'}>
                                    name
                                </Typography>
                            </Skeleton>
                            <Skeleton variant={'text'}/>
                            <Skeleton variant={'text'}/>
                            <Skeleton variant={'text'}/>


                            <Typography style={{marginTop: '1.5rem'}} color={'primary'} variant={'body2'}>
                                    <span className={classes.commentBtn}>
                                         comments
                                    </span>
                            </Typography>


                        </Grid>
                    </Grid>
                )
            }


            {/*message reply*/}

            {
                postData?.isCommentsShown ? (
                    post.comments.map((comment, index) => {
                        return (
                            <Grid component={motion.div} layout key={index} direction={'row'} item container
                                  className={`${classes.messageContainer} ${classes.reply}`}>
                                <Grid align={'center'} item className={classes.avatarAndBtnsCont}>
                                    <Grid justify={'center'} alignItems={'center'} container direction={'column'}>
                                        <Grid item>
                                            <Avatar className={classes.avatar} src={comment.photoURL}>
                                                {comment?.displayName[0]}
                                            </Avatar>
                                        </Grid>
                                        <Grid style={{margin: '1.5rem 1rem .5rem',}} item>
                                            <Grid container alignItems={'center'}>
                                                <Grid item className={classes.likDlkCounter}>
                                                    <Typography color={'primary'}
                                                                variant={'body2'}>{(comment.likes.length < 1000) ? comment.likes.length : '1k+'}</Typography>
                                                </Grid>
                                                <Grid>
                                                    <IconButton onClick={commentLikeHandler.bind(this, comment.id)}
                                                                style={{padding: '6px'}}>
                                                        <ThumbUp fontSize={'small'} color={'primary'}/>
                                                    </IconButton>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Grid container alignItems={'center'}>
                                                <Grid item className={classes.likDlkCounter}>
                                                    <Typography color={'primary'}
                                                                variant={'body2'}>{(comment.dislikes.length < 1000) ? comment.dislikes.length : '1k+'}</Typography>
                                                </Grid>
                                                <Grid>
                                                    <IconButton onClick={commentDislikeHandler.bind(this, comment.id)}
                                                                style={{padding: '6px'}}>
                                                        <ThumbDown fontSize={'small'} color={'primary'}/>
                                                    </IconButton>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid xs={10} className={classes.mainContentContainer} item>
                                    <Typography gutterBottom variant={'body2'} color={'primary'}>
                                        {comment.displayName}
                                    </Typography>
                                    <Typography variant={'body2'}>
                                        {comment.text}
                                    </Typography>
                                </Grid>
                            </Grid>
                        )
                    })

                ) : (
                    ''
                )
            }

            {
                postData?.isCommentsShown ? (
                    <ForumReply post={post}/>
                ) : (
                    ''
                )
            }


            {/*    message reply end*/}

        </>
    );
};

export default React.memo(ForumMessage);
