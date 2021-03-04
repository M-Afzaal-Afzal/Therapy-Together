import React from 'react';
import {Box, Button, Grid, makeStyles, TextField, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    blogSubscribeContainer: {
        background: theme.palette.primary.main,
        borderRadius: '27px',
        padding: '4rem',
        maxWidth: '70rem',
        // position: 'absolute',
        margin: '-2rem 3rem',
        zIndex: 5,

    },
    blogSubscribeHeading: {
        marginBottom: '2rem',
    },
    blogSubscribeText: {
        marginBottom: '3rem',
        color: "white",
    },
    blogSubscribeButton: {
        background: 'white',
        color: theme.palette.primary.main,
        ...theme.btnWhite,
    },
}))

const BlogSubscribe = () => {

    const classes = useStyles();

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
                    <form style={{display: 'flex'}}>
                        <Grid container justify={'center'} alignItems={'center'} style={{margin: '3rem'}}>
                            <Grid item style={{marginRight: '1.5rem'}}>
                                <TextField size={'small'} id="subscribe-email" label="Email" variant="outlined"/>
                            </Grid>
                            <Grid item style={{marginLeft: '1.5rem'}}>
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
