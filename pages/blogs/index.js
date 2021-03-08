import React from 'react';
import {Box, Container, Divider, Grid, makeStyles, Typography} from "@material-ui/core";
import Blog from "../../components/LandingPage/Blog";

const useStyles = makeStyles(theme => ({
    blogsContainer: {
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
            padding: '1rem',
            paddingBottom: '2rem',
        }
    },
    divider: {
        border: `2px solid ${theme.palette.primary.main}`,
        width: '3rem',
        marginTop: '1rem',
        marginBottom: '1rem'
    },
    blogsCardContainer: {
        ...theme.blogsCardContainer,
    }
}))

const Index = () => {

    const classes = useStyles();

    return (
        <Container component={Grid} maxWidth={'xl'} container justify={'center'} className={classes.blogsContainer}>
            <Grid item>
                <Box>
                    <Typography color={'primary'} variant={'h1'}>
                        Blogs
                    </Typography>
                    <Divider className={classes.divider}/>
                </Box>
            </Grid>

            <Grid item>
                <Typography align={'center'} variant={'body2'}>
                    It is interesting to read a blog when you know it is written by a person like you who shares their ups and downs, tips and hacks for life. You can always read relevant blogs written with compassion and love for a personal touch.
                </Typography>
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
                      '                                nihil, nostrum quam voluptates! Aliquid blanditiis ex impedit, maxime molestiae natus,\n' +
                      '                                nobis officiis reprehenderit sed similique sit.'}
                />
                <Blog imageSrc={'/avatar.jpg'}
                      disease={'disease'}
                      description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere fugiat itaque iure modi\n' +
                      '                                nihil, nostrum quam voluptates! Aliquid blanditiis ex impedit, maxime molestiae natus,\n' +
                      '                                nobis officiis reprehenderit sed similique sit.'}
                />
            </Grid>
        </Container>
    );
};

export default Index;
