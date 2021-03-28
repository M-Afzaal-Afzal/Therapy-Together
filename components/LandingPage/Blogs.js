import React from 'react';
import {Button, Container, Divider, Grid, Hidden, makeStyles, Typography} from "@material-ui/core";
import Link from '../../src/utils/Link';

import Blog from "./Blog";
import {firestore} from "../../src/utils/firebaseUtils";
import {useCollectionDataOnce} from "react-firebase-hooks/firestore";

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
        ...theme.blogsCardContainer,
    },
    btnGreen: {
        ...theme.btnGreen,
        marginTop: '4rem',
    },
    mainHeading: {
        [theme.breakpoints.down('xs')]: {
            marginBottom: '2rem',
            textAlign: 'center',
        }
    }
}))

const Blogs = () => {

    const classes = useStyles();

    const query = firestore.collection('blogs').orderBy('createdAt');

    const [blogsData, loading, error] = useCollectionDataOnce(query, {idField: 'id'});

    let blogs = null;

    if (!loading && !error && blogsData) {
        blogs = blogsData;
        blogs = blogs.reverse();
        blogs.length = 3;
    }

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

                    {

                        blogs ? (
                            blogs?.map(blog => {
                                return (
                                    <Blog imageSrc={blog.photoURL}
                                          disease={blog.mainHeading}
                                          description={blog.description}
                                          createdAt={blog.createdAt}
                                          key={blog.id}
                                          id={blog.id}
                                    />
                                )
                            })
                        ) : (
                            ['', '', '', '', '', ''].map((_, i) => {
                                return (
                                    <Blog key={i} isLoading/>
                                )
                            })
                        )
                    }
                </Grid>
                <Grid item>
                    <Button component={Link} href={'/blogs'} style={{textDecoration: 'none'}}
                            className={classes.btnGreen} color={'primary'} variant={'contained'}>
                        Learn More
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default React.memo(Blogs);
