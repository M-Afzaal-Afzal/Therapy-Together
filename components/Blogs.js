import React from 'react';
import {Button, Container, Divider, Grid, Hidden, makeStyles, Typography} from "@material-ui/core";

import Blog from "./Blog";

const useStyles = makeStyles(theme => ({
    hDividerBlogs: {
        marginTop: '.5rem',
        marginBottom: '1.5rem',
        marginRight: "auto",
        width: '50px',
        border: `2px solid ${theme.palette.primary.main}`,
        align: 'left'
    },
    blogsCardContainer: {
        marginTop: '6rem',
        [theme.breakpoints.down('xs')]: {
            marginTop: '1rem',
        }
    },
    btnGreen: {
        ...theme.btnGreen,
        marginTop: '4rem',
    },
    mainHeading: {
        [theme.breakpoints.down('xs')]: {
            marginBottom: '2rem',
            textAlign:'center',
        }
    }
}))

const Blogs = () => {

    const classes = useStyles();

    return (
        <Container maxWidth={'lg'}>
            <Grid container alignItems={'center'} justify={'center'} direction={'column'}>
                <Grid item>
                    <Typography className={classes.mainHeading} color={'primary'} variant={'h1'}>
                        Learn About Our Blogs
                    </Typography>
                    <Hidden xsDown>
                        <Divider className={classes.hDividerBlogs}/>
                    </Hidden>
                </Grid>
                <Grid item align={'center'} style={{maxWidth: '50rem'}}>
                    <Typography variant={'body2'}>
                        It is interesting to read a blog when you know it is written by a person like you who shares
                        their ups and downs, tips and hacks for life. You can always read relevant blogs written with
                        compassion and love for a personal touch.
                    </Typography>
                </Grid>
                <Grid item container justify={'space-evenly'} className={classes.blogsCardContainer}>

                    <Blog imageSrc={'/Coronavirus.svg'}
                          disease={'disease'}
                          description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere fugiat itaque iure modi\n' +
                          '                                nihil, nostrum quam voluptates! Aliquid blanditiis ex impedit, maxime molestiae natus,\n' +
                          '                                nobis officiis reprehenderit sed similique sit.'}
                    />
                    <Blog imageSrc={'/Coronavirus.svg'}
                          disease={'disease'}
                          description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere fugiat itaque iure modi\n' +
                          '                                nihil, nostrum quam voluptates! Aliquid blanditiis ex impedit, maxime molestiae natus,\n' +
                          '                                nobis officiis reprehenderit sed similique sit.'}
                    />
                    <Blog imageSrc={'/Coronavirus.svg'}
                          disease={'disease'}
                          description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere fugiat itaque iure modi\n' +
                          '                                nihil, nostrum quam voluptates! Aliquid blanditiis ex impedit, maxime molestiae natus,\n' +
                          '                                nobis officiis reprehenderit sed similique sit.'}
                    />
                </Grid>
                <Grid item>
                    <Button className={classes.btnGreen} color={'primary'} variant={'contained'}>
                        Learn More
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Blogs;
