import React from 'react';
import {Box, Fab, Grid, makeStyles, Typography} from "@material-ui/core";
import Image from "next/image";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";

const useStyles = makeStyles(() => ({
    blogsCardContainer: {
        marginTop: '6rem',
    },
    blogImage: {
        borderRadius: '27px',
        overflow: 'hidden',
    },
    cardContainer: {
        background: 'rgba(255, 255, 255, .24)',
        margin: "2.5rem 1rem",
        maxWidth: '20rem',
        borderRadius: '20px',
        transition: 'all .5s',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
        position: 'relative',
        // "&:hover": {
        //
        // }

    },
    cardText: {
        textAlign: 'justify',
        marginTop: '0rem',
        padding: '1.5rem'
    },
    cardHeading: {
        textAlign: 'left'
    },
    floatingActionButton: {
        position: 'absolute',
        bottom: '-1.8rem',
        right: '2rem'
    }
}))

const Blog = (props) => {

    const classes = useStyles();

    return (
        <>
            <Grid item className={classes.cardContainer}>
                <Box>
                    <Image src={'/Coronavirus.svg'} width={412} height={224}/>
                </Box>
                <Box className={classes.cardText}>
                    <Typography gutterBottom className={classes.cardHeading} variant={'h3'} color={'primary'}>
                        {props.disease}
                    </Typography>
                    <Typography variant={'body2'}>
                        {props.description}
                    </Typography>
                </Box>
                <div className={classes.floatingActionButton}>
                    <Fab color={'primary'}>
                        <ArrowForwardIosOutlinedIcon fontSize={'large'}/>
                    </Fab>
                </div>
            </Grid>
        </>
    );
};

export default Blog;
