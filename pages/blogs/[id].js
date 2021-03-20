import React from 'react';
import {
    Avatar,
    Box, Button,
    Container,
    Divider,
    Grid,
    IconButton,
    InputAdornment, List, ListItem, ListItemIcon, ListItemText,
    makeStyles, Modal,
    TextField,
    Typography, useMediaQuery, useTheme,
} from "@material-ui/core";
import Image from 'next/image';
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import Blog from '../../components/LandingPage/Blog';
import {firestore} from "../../src/utils/firebaseUtils";
import {useForm} from "react-hook-form";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {selectDisplayName, selectImageUrl} from "../../src/store/user/user.selectors";
import {useCollectionDataOnce, useDocumentData} from "react-firebase-hooks/firestore";
import {useSnackbar} from "notistack";
import Skeleton from "@material-ui/lab/Skeleton";
import Link from '../../src/utils/Link';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';


const useStyles = makeStyles(theme => ({
    blogContainer: {
        padding: '6rem',
        [theme.breakpoints.down('md')]: {
            padding: '4rem',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '2.5rem',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '0rem',
            paddingTop: "2rem"
        }
    },
    divider: {
        marginTop: '.5rem',
        marginBottom: '2rem',
        marginRight: "auto",
        width: '50px',
        border: `2px solid ${theme.palette.primary.main}`,
        align: 'left',
        [theme.breakpoints.down('xs')]: {
            marginBottom: '1rem',
        }
    },
    paddingBtn: {
        padding: '5px',
    },
    blogMainContent: {
        paddingTop: '8rem',
        [theme.breakpoints.down('md')]: {
            paddingTop: '4rem',
        },
        [theme.breakpoints.down('xs')]: {
            paddingTop: '2rem',
        }
    },
    blogText: {
        padding: '2rem',
        [theme.breakpoints.down('xs')]: {
            padding: '1rem',
        }
    },
    blogResponse: {
        padding: '4rem',
        background: theme.palette.secondary.main,
        [theme.breakpoints.down('sm')]: {
            padding: '2rem',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '1rem',
        }
    },
    postResponse: {
        background: 'white',
        margin: '4rem 0',
        padding: '18.5px',
        [theme.breakpoints.down('sm')]: {
            margin: '3rem 0',
            padding: '14.5px',
        },
        [theme.breakpoints.down('xs')]: {
            margin: '1,5rem 0',
            padding: '10.5px',
        }

    },
    btnGreen: {
        ...theme.btnGreen,
        marginTop: '2rem',
    },
    avatarWithNameContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1rem'
    },
    avatarContainer: {
        marginRight: '1rem',
    },
    authorName: {
        marginTop: '1rem',
    },
    recentPost: {
        marginTop: '8rem',
        marginBottom: '3rem',
        fontSize: '4.375rem',
        [theme.breakpoints.down('md')]: {
            marginTop: '6rem',
            fontSize: '3.125rem',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '4rem',
            fontSize: '2.5rem',
        },
    },
    blogParagraph: {
        textAlign: 'justify',
        marginBottom: '2rem',
    },
    avatar: {
        width: '60px',
        height: '60px',
        marginTop: '1rem',
    },
    responseAuthorName: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.2rem',
        }
    },
    responseBody: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '.9rem',

        }
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

const BlogPage = () => {

    const classes = useStyles();
    const router = useRouter();
    const {id} = router.query;
    const displayName = useSelector(selectDisplayName);
    const photoURL = useSelector(selectImageUrl);
    const theme = useTheme();

    const matchesSmall = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXSmall = useMediaQuery(theme.breakpoints.down('xs'));

    const query = firestore.doc(`/blogs/${id}`)

    // fetching the blog

    const [blog, loading, error] = useDocumentData(query);

    // fetching the latest three blog


    const allBlogsQuery = firestore.collection('/blogs').orderBy('createdAt');

    const [allBlogs, isLatestBlogsLoading, latestBlogsError] = useCollectionDataOnce(allBlogsQuery, {idField: 'id'});

    let latestThreeBlogs = null;

    if (!isLatestBlogsLoading && !latestBlogsError) {
        latestThreeBlogs = allBlogs.reverse();
        latestThreeBlogs.length = 3;
    }


    let errorVal = error;

    // handling snackbars
    const {enqueueSnackbar} = useSnackbar();
    const handleClickVariant = (variant) => () => {
        // variant could be success, error, warning, info, or default
        if (variant === 'success')
            enqueueSnackbar('Thanks for your response', {variant});
        else if (variant === 'error')
            enqueueSnackbar('Sending message failed. Try again!!!', {variant});
    };


    const {register, handleSubmit, errors, control, reset} = useForm();

    const responseReg = register({
        required: "You must specify a response",
        minLength: {
            value: 25,
            message: 'Your feedback must be of 25 characters!!!'
        },
        validate: () => !!displayName || 'Login to send a response',
    })

    const onSubmit = handleSubmit(async data => {
        const {response} = data;
        //  find the prve document

        const docRef = firestore.doc(`/blogs/${id}`);
        const docSnapshot = await docRef.get();
        const prevBlogData = await docSnapshot.data();
        // console.log(prevBlogData);
        // create the doc with response

        const newResponse = {
            createdAt: new Date(),
            photoURL,
            displayName,
            response,
        }

        // update the document

        firestore.doc(`/blogs/${id}`)
            .update({
                responses: [newResponse, ...prevBlogData.responses],
            })
            .then(() => {
                console.log('responses updated successfully');
                handleClickVariant('success')();
                reset({
                    response: '',
                });
            })
            .catch(err => {
                handleClickVariant('error')();

                console.log('Error while updating the response', err.message)
            })

    })

    const mainBlogContent = (
        <Container maxWidth={'xl'} className={classes.blogContainer}>
            <Grid container justify={'center'} alignItems={'center'} direction={'column'}>
                <Grid item>
                    {
                        !loading && !error && blog ? (
                            <Box>
                                <Typography color={'primary'} variant={'h1'}>{blog.mainHeading}</Typography>
                                <Divider className={classes.divider}/>
                            </Box>
                        ) : (
                            <Box>
                                <Skeleton variant={'text'} width={'15rem'} height={'10rem'}/>
                            </Box>
                        )
                    }

                </Grid>
                <Grid item container justify={'center'} direction={'column'} alignItems={'center'}>
                    {
                        !loading && !error && blog ? (
                            <Container style={{width: '100%', height: matchesXSmall ? 350 : 482, position: 'relative'}} maxWidth={'lg'}>
                                <Image src={blog.photoURL} layout={'fill'} objectFit={'cover'}/>
                            </Container>
                        ) : (
                            !matchesXSmall ? (
                                <Skeleton variant={'rect'} width={matchesSmall ? 458 : 758}
                                          height={matchesSmall ? 282 : 482}/>

                            ) : (
                                <Skeleton variant={'rect'} width={258} height={282}/>

                            )

                        )
                    }
                </Grid>
                <Grid item>
                    {
                        !loading && !error && blog ? (
                            <Avatar className={classes.avatar}
                                    src={blog.author.photoURL}>{blog.author.displayName[0]}</Avatar>
                        ) : (
                            <Skeleton className={classes.avatar} variant={'circle'}/>
                        )
                    }

                </Grid>
                <Grid item>
                    {
                        !loading && !error && blog ? (
                            <Typography className={classes.authorName} variant={'body2'}>
                                {blog.author.displayName}
                            </Typography>
                        ) : (
                            <Skeleton variant={'text'} width={'5rem'}/>
                        )
                    }

                </Grid>
                <Grid item container justify={"center"}>
                    <Grid item>
                        {
                            !loading && !error && blog ? (
                                <a target={'_blank'} href={blog.author.facebookProfile}>
                                    <IconButton disabled={!blog.author.facebookProfile} className={classes.paddingBtn}>
                                        <FacebookIcon color={'primary'}/>
                                    </IconButton>
                                </a>
                            ) : (
                                <IconButton className={classes.paddingBtn}>
                                    <FacebookIcon color={'primary'}/>
                                </IconButton>
                            )
                        }

                    </Grid>
                    <Grid item>
                        {
                            !loading && !error && blog ? (
                                <a target={'_blank'} href={blog.author.instagramProfile}>
                                    <IconButton disabled={!blog.author.instagramProfile} className={classes.paddingBtn}>
                                        <InstagramIcon color={'primary'}/>
                                    </IconButton>
                                </a>
                            ) : (
                                <IconButton className={classes.paddingBtn}>
                                    <InstagramIcon color={'primary'}/>
                                </IconButton>
                            )
                        }


                    </Grid>
                    <Grid item>
                        {
                            !loading && !error && blog ? (
                                <a target={'_blank'} href={blog.author.twitterProfile}>
                                    <IconButton disabled={!blog.author.twitterProfile} className={classes.paddingBtn}>
                                        <TwitterIcon style={{display: 'flex'}} color={'primary'}/>
                                    </IconButton>
                                </a>
                            ) : (
                                <IconButton className={classes.paddingBtn}>
                                    <TwitterIcon style={{display: 'flex'}} color={'primary'}/>
                                </IconButton>
                            )
                        }

                    </Grid>
                </Grid>
                <Grid item container justify={'center'} className={classes.blogMainContent}>
                    <Grid item style={{width: '100%'}} lg={6} className={classes.blogText}>
                        {
                            !loading && !error && blog ? (
                                blog.body.map((block, i) => {
                                    return (
                                        <React.Fragment key={i}>
                                            {
                                                block.mainHeading &&
                                                <Typography style={{
                                                    textAlign: "center",
                                                    marginBottom: '3rem',
                                                    marginTop: '1rem',
                                                    fontWeight: 'bold'
                                                }} color={'primary'} gutterBottom variant={'h3'}>
                                                    {block.mainHeading}
                                                </Typography>
                                            }
                                            {
                                                block.heading &&
                                                <Typography color={'primary'} gutterBottom variant={'h3'}>
                                                    {block.heading}
                                                </Typography>

                                            }
                                            {
                                                block.paragraphs.map((parData, index) => {
                                                    return (
                                                        <React.Fragment key={index}>
                                                            <Typography gutterBottom className={classes.blogParagraph}
                                                                        variant={'body2'}>
                                                                {parData.paragraph}
                                                            </Typography>
                                                            {
                                                                parData.bullets &&

                                                                <List style={{marginTop: '-1.5rem'}}
                                                                      className={classes.blogParagraph}>
                                                                    {
                                                                        parData.bullets.map((bullet, i) => (
                                                                            <ListItem style={{
                                                                                paddingLeft: '0',
                                                                                marginLeft: '-14px'
                                                                            }} key={i}>
                                                                                <ListItemIcon color={'primary'}>
                                                                                    <ArrowRightIcon color={'primary'}
                                                                                                    fontSize={'large'}/>
                                                                                </ListItemIcon>
                                                                                <ListItemText primary={bullet}/>
                                                                            </ListItem>

                                                                        ))
                                                                    }
                                                                </List>


                                                            }
                                                        </React.Fragment>
                                                    )
                                                })

                                            }


                                        </React.Fragment>
                                    )
                                })
                            ) : (
                                ['', '', ''].map((_, i) => {
                                    return (
                                        <React.Fragment key={i}>
                                            <Skeleton variant={'text'} width={'10rem'}/>
                                            <Skeleton width={'100%'} variant={'text'}/>
                                            <Skeleton variant={'text'}/>
                                            <Skeleton variant={'text'}/>
                                            <Skeleton variant={'text'}/>
                                            <Skeleton variant={'text'}/>
                                            <Skeleton variant={'text'} className={classes.blogParagraph}/>
                                        </React.Fragment>
                                    )
                                })
                            )
                        }


                    </Grid>
                    <Grid item lg={6} className={classes.blogResponse}>
                        <Grid container>
                            {
                                !loading && !error && blog ? (
                                    <form onSubmit={handleSubmit(onSubmit)} style={{width: '100%'}}>
                                        <Grid item container>
                                            <TextField
                                                variant={'outlined'}
                                                color={'secondary'}
                                                className={classes.margin}
                                                id="input-with-icon-textfield"
                                                // label="Type Your Feedback"
                                                placeholder={displayName ? 'Type Your Feedback of minimum 25 characters' : 'You must have to login to send a response'}
                                                multiline
                                                rows={8}
                                                rowsMax={8}
                                                fullWidth
                                                // style={{background: 'white'}}
                                                name={'response'}
                                                helperText={errors.response ? errors.response.message : ''}
                                                error={Boolean(errors.response)}
                                                // error={true}
                                                inputRef={responseReg}
                                                aria-controls={control}
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment style={{marginBottom: '9rem'}} position="start">
                                                            <Avatar src={photoURL}>
                                                                {displayName ? displayName[0] : null}
                                                            </Avatar>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <Grid item align={'center'} style={{width: '100%'}}>
                                            {
                                                displayName ? (
                                                    <Button type={'submit'} color={'primary'}
                                                            className={classes.btnGreen}
                                                            variant={'contained'}>
                                                        Send
                                                    </Button>
                                                ) : (
                                                    <Button color={'primary'}
                                                            className={classes.btnGreen}
                                                            component={Link}
                                                            style={{textDecoration: 'none'}}
                                                            href={'/login'}
                                                            variant={'contained'}>
                                                        Login
                                                    </Button>
                                                )
                                            }
                                        </Grid>
                                    </form>
                                ) : (
                                    <>
                                        <Grid item container>
                                            <TextField
                                                variant={'outlined'}
                                                color={'secondary'}
                                                className={classes.margin}
                                                id="input-with-icon-textfield"
                                                // label="Type Your Feedback"
                                                placeholder={displayName ? 'Type Your Feedback of minimum 25 characters' : 'You must have to login to send a response'}
                                                multiline
                                                rows={8}
                                                rowsMax={8}
                                                fullWidth
                                                style={{background: 'white'}}
                                                name={'response'}
                                                // helperText={errors.response ? errors.response.message : ''}
                                                // error={Boolean(errors.name)}
                                                inputRef={responseReg}
                                                aria-controls={control}
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment style={{marginBottom: '9rem'}} position="start">
                                                            <Avatar src={photoURL}>
                                                                {displayName ? displayName[0] : null}
                                                            </Avatar>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <Grid item align={'center'} style={{width: '100%'}}>
                                            {
                                                displayName ? (
                                                    <Button color={'primary'} className={classes.btnGreen}
                                                            variant={'contained'}>
                                                        Send
                                                    </Button>
                                                ) : (
                                                    <Button color={'primary'}
                                                            className={classes.btnGreen}
                                                            component={Link}
                                                            style={{textDecoration: 'none'}}
                                                            href={'/login'}
                                                            variant={'contained'}>
                                                        Login
                                                    </Button>
                                                )
                                            }

                                        </Grid>
                                    </>
                                )
                            }

                            <Grid item style={{width: '100%'}}>
                                {
                                    !loading && !error && blog ? (
                                        blog.responses.map((res, i) => {
                                            return (
                                                res &&
                                                <Grid key={i} container direction={'column'}
                                                      className={classes.postResponse}>
                                                    <Grid item className={classes.avatarWithNameContainer}>
                                                        <Box className={classes.avatarContainer}>
                                                            <Avatar src={res.photoURL}>
                                                                {res.displayName[0]}
                                                            </Avatar>
                                                        </Box>
                                                        <Typography color={'primary'} variant={'h3'}
                                                                    className={classes.responseAuthorName}>
                                                            {res.displayName}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        {
                                                            res.response &&
                                                            <Typography variant={'body2'}>
                                                                {res.response}
                                                            </Typography>
                                                        }

                                                    </Grid>
                                                </Grid>
                                            )
                                        })
                                    ) : (
                                        <Grid container direction={'column'}
                                              className={classes.postResponse}>
                                            <Grid item className={classes.avatarWithNameContainer}>
                                                <Box className={classes.avatarContainer}>
                                                    <Skeleton variant={'circle'} width={40} height={40}/>
                                                </Box>
                                                <Skeleton className={classes.responseAuthorName} variant={'text'}
                                                          width={'5rem'}/>
                                            </Grid>
                                            <Grid item>
                                                <Skeleton variant={'text'}/>
                                                <Skeleton variant={'text'}/>
                                                <Skeleton variant={'text'}/>
                                            </Grid>
                                        </Grid>
                                    )
                                }

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container justify={'center'}>
                    <Grid item>
                        <Typography className={classes.recentPost} color={'primary'} variant={'h3'}>Recent
                            Posts</Typography>
                    </Grid>
                    <Grid item container justify={'space-evenly'} className={classes.blogsCardContainer}>

                        {
                            latestThreeBlogs ?
                                latestThreeBlogs?.map((blog) => {
                                    return (
                                        <Blog key={blog.id} imageSrc={blog.photoURL}
                                              disease={blog.mainHeading}
                                              description={blog.description}
                                              createdAt={blog.createdAt}
                                              id={blog.id}
                                        />
                                    )
                                })
                                :
                                ['', '', ''].map((_, i) => {
                                    return (
                                        <Blog key={i} isLoading/>
                                    )
                                })
                        }

                    </Grid>

                </Grid>
            </Grid>
        </Container>
    )

    const handleClose = () => {
        errorVal = null
    }

    const errorContent = (
        <Modal
            open={Boolean(errorVal)}
            onClose={handleClose}
            aria-labelledby="error-modal-title"
            aria-describedby="error-modal-description"
            className={classes.modal}
        >
            <Box className={classes.modalContent}>
                <Typography style={{color: "red"}} variant={'body2'}>
                    {error?.message}
                </Typography>
            </Box>
        </Modal>
    )

    return (
        !error ?
            (
                mainBlogContent
            )
            :
            errorContent
    );
};


export default BlogPage;
