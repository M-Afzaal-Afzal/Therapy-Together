import React from 'react';
import {
    Avatar,
    Box, Button,
    Container,
    Divider,
    Grid,
    IconButton,
    InputAdornment,
    makeStyles,
    TextField,
    Typography
} from "@material-ui/core";
import Image from 'next/image';
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import Blog from '../../components/LandingPage/Blog';

const useStyles = makeStyles(theme => ({
    blogContainer: {
        padding: '8rem',
        [theme.breakpoints.down('sm')]: {
            padding: '4rem',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '1rem',
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
        marginBottom:'3rem',
        fontSize: '4.375rem',
        [theme.breakpoints.down('md')]: {
            marginTop: '6rem',
            fontSize: '3.125rem',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '4rem',
            fontSize: '2.5rem',
        },
    }
}))

const BlogPage = () => {

    const classes = useStyles();

    return (
        <Container maxWidth={'xl'} className={classes.blogContainer}>
            <Grid container justify={'center'} alignItems={'center'} direction={'column'}>
                <Grid item>
                    <Box>
                        <Typography color={'primary'} variant={'h1'}>Disease</Typography>
                        <Divider className={classes.divider}/>
                    </Box>
                </Grid>
                <Grid item>
                    <Image src={'/Coronavirus.svg'} width={758} height={482}/>
                </Grid>
                <Grid item>
                    <Avatar className={classes.avatar} src={'/avatar.jpg'}/>
                </Grid>
                <Grid item>
                    <Typography className={classes.authorName} variant={'body2'}>
                        Areej Anjum
                    </Typography>
                </Grid>
                <Grid item container justify={"center"}>
                    <Grid item>
                        <IconButton className={classes.paddingBtn}>
                            <FacebookIcon color={'primary'}/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        {/*<Box px={3}>*/}
                        <IconButton className={classes.paddingBtn}>
                            <InstagramIcon color={'primary'}/>
                        </IconButton>
                        {/*</Box>*/}
                    </Grid>
                    <Grid item>
                        <IconButton className={classes.paddingBtn}>
                            <TwitterIcon style={{display: 'flex'}} color={'primary'}/>
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid item container className={classes.blogMainContent}>
                    <Grid item lg={6} className={classes.blogText}>
                        <Typography style={{textAlign: 'justify'}} variant={'body2'}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi corporis illo laborum! Ab
                            accusamus amet culpa doloribus eligendi harum in nemo odio provident quia quibusdam quo,
                            recusandae reiciendis reprehenderit tenetur.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque commodi consequatur
                            dolorem, eligendi et expedita iure minima, nam, neque nisi nulla numquam optio quo rem sed
                            similique temporibus voluptate.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae corporis doloremque,
                            ducimus eligendi expedita hic natus placeat quibusdam sit! Animi deleniti distinctio laborum
                            minima modi obcaecati pariatur tempore voluptatibus.
                        </Typography>
                    </Grid>
                    <Grid item lg={6} className={classes.blogResponse}>
                        <Grid container>
                            <Grid item container>
                                <TextField
                                    variant={'outlined'}
                                    color={'secondary'}
                                    className={classes.margin}
                                    id="input-with-icon-textfield"
                                    // label="Type Your Feedback"
                                    placeholder={'Type Your Feedback'}
                                    multiline
                                    rows={8}
                                    rowsMax={8}
                                    fullWidth
                                    style={{background: 'white'}}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment style={{marginBottom: '9rem'}} position="start">
                                                <Avatar src={'/avatar.jpg'}/>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item align={'center'} style={{width: '100%'}}>
                                <Button color={'primary'} className={classes.btnGreen}
                                        variant={'contained'}>Send</Button>
                            </Grid>
                            <Grid item>
                                <Grid container direction={'row'} className={classes.postResponse}>
                                    <Grid item className={classes.avatarWithNameContainer}>
                                        <Box className={classes.avatarContainer}>
                                            <Avatar src={'/avatar.jpg'}/>
                                        </Box>
                                        <Typography color={'primary'} variant={'h3'}>
                                            Areej Anjum
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant={'body2'}>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dignissimos
                                            earum, in labore magnam molestias necessitatibus nisi numquam odio
                                            officia,
                                            pariatur quos ratione repudiandae rerum, veniam! Aspernatur atque est
                                            inventore!
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container justify={'center'}>
                    <Grid item >
                        <Typography className={classes.recentPost} color={'primary'} variant={'h3'}>Recent Posts</Typography>
                    </Grid>
                    <Grid item container justify={'space-evenly'} className={classes.blogsCardContainer}>

                        <Blog imageSrc={'/avatar.jpg'}
                              disease={'disease'}
                              description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere fugiat itaque iure modi\n' +
                              '                                nihil, nostrum quam voluptates! Aliquid blanditiis ex impedit, maxime molestiae natus,\n' +
                              '                                nobis officiis reprehenderit sed similique sit.'}
                        />
                        <Blog imageSrc={'/avatar.jpg'}
                              disease={'disease'}
                              description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere fugiat itaque iure modi\n' +
                              '                                nihil, nostrum quam voluptates! Aliquid blanditiis ex impedit, maxime molestiae natus,\n' +
                              '                                nobis officiis reprehenderit sed similique sit.'}
                        />
                        <Blog imageSrc={'/avatar.jpg'}
                              disease={'disease'}
                              description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere fugiat itaque iure modi\n' +
                              '                                nihil, nostrum d similique sit.'}
                        />
                    </Grid>

                </Grid>
            </Grid>
        </Container>
    );
};

export default BlogPage;
