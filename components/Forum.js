import React from 'react';
import {Button, Container, Divider, Grid, makeStyles, Typography} from "@material-ui/core";
import Image from 'next/image';

const useStyles = makeStyles(theme => ({
    forumImageContainer: {
        position: "absolute",
        left: 0,
        top: 0,
        marginTop: '-45px',
        paddingBottom: '5rem',
    },
    formTextContainer: {
        margin: '5rem 0',
        marginRight: '5rem'
    },
    forumDivider: {
        border: `2px solid ${theme.palette.primary.main}`,
        width: '7.5rem',
        marginTop: '1rem',
        marginBottom: '1rem'
    },
    btnGreen: {
        ...theme.btnGreen,
        marginTop: '2rem',
    },
    formBodyText: {
        textAlign: 'justify',
    }
}))

const Forum = () => {

    const classes = useStyles();

    return (
        <Grid container>
            <Grid item sm={6} style={{position: 'relative'}}>
                <div className={classes.forumImageContainer}>
                    <Image src={'/forum-icon.svg'} width={350} height={500}/>
                </div>
            </Grid>
            <Grid item sm={6}>
                <Grid container alignItems={'center'}>
                    <Grid item className={classes.formTextContainer}>
                        <Container maxWidth={'sm'}>
                            <Typography color={'primary'} variant={'h1'}>
                                Forum
                            </Typography>
                            <Divider color={'primary'} className={classes.forumDivider}/>
                            <Typography variant={'body2'} className={classes.formBodyText}>
                                Communication problems can raise our stress levels which is why we strongly believe that
                                it
                                is very important to communicate and open up about our sufferings or regrets infront of
                                the
                                right people here you can discuss about your grievances and get help without feeling
                                that
                                your private space is being invaded. You might like to explore more about us through our
                                forum
                            </Typography>
                            <Button variant={'contained'} color={'primary'}
                                    className={classes.btnGreen}>Explore</Button>
                        </Container>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Forum;
