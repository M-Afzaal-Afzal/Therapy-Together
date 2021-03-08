import React from 'react';
import {Box, Fab, Grid, makeStyles, Typography} from "@material-ui/core";
import Image from "next/image";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";

const useStyles = makeStyles(theme => ({
    blogsCardContainer: {
        marginTop: '6rem',
    },
    blogImage: {
        borderRadius: '27px 27px 0 0',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center'
    },
    cardContainer: {
        background: 'rgba(255, 255, 255, .24)',
        margin: "2.5rem 1rem",
        maxWidth: '20rem',
        borderRadius: '27px',
        paddingBottom:'2.5rem',
        position: 'relative',
        boxShadow: 'rgb(19 15 235 / 10%) 2px 4px 40px',
        transition: 'box-shadow 0.4s ease-in-out 0s',
        // overflow: 'hidden',

        "&:hover": {
            boxShadow: 'rgb(19 15 235 / 30%) 2px 4px 40px',
        }

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
    },
    date: {
        padding: '1.5rem',
        paddingTop: '.5rem',
        color: theme.palette.primary.main,
        position:"absolute",
        bottom:'0',
        left: '0',
    }
}))

const Blog = (props) => {

    const classes = useStyles();

    return (
        <>
            <Grid item className={classes.cardContainer}>
                <Box className={classes.blogImage}>
                    <Image src={props.imageSrc} width={412} height={224}/>
                </Box>
                <Box className={classes.cardText}>
                    <Typography gutterBottom className={classes.cardHeading} variant={'h3'} color={'primary'}>
                        {props.disease}
                    </Typography>
                    <Typography variant={'body2'}>
                        {props.description}
                    </Typography>
                </Box>
                <Box className={classes.date}>20 Jan, 2021</Box>
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
