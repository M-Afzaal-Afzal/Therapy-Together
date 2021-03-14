import React from 'react';
import {Box, Container, Divider, Grid, makeStyles, Typography} from "@material-ui/core";
import Blog from "../../components/LandingPage/Blog";
import {firestore} from "../../src/utils/firebaseUtils";
import {useCollectionDataOnce} from "react-firebase-hooks/firestore";

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

    const query = firestore.collection('blogs').orderBy('createdAt');

    const [blogsData, loading, error] = useCollectionDataOnce(query, {idField: 'id'});

    let blogs = null;

    if (!loading && !error && blogsData) {
        blogs = blogsData;
        blogs = blogs.reverse();
    }

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
                    It is interesting to read a blog when you know it is written by a person like you who shares their
                    ups and downs, tips and hacks for life. You can always read relevant blogs written with compassion
                    and love for a personal touch.
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
                        ['', '', '', '', '', ''].map((_,i) => {
                            return (
                                <Blog key={i} isLoading/>
                            )
                        })
                    )
                }


            </Grid>
        </Container>
    );
};

// export async function getStaticProps() {
//
//     const blogsRef = firestore.collection('blogs').orderBy('createdAt');
//     const snapShot = await blogsRef.get();
//     const blogsData = snapShot.docs.map(blog => {
//         return {
//             ...blog.data(),
//             id: blog.id,
//         }
//     });
//
//     const blogs = blogsData.map(blog => {
//         return {
//             ...blog,
//             createdAt: JSON.parse(JSON.stringify(blog.createdAt)),
//             responses: blog.responses.map(res => {
//                 return {
//                     ...res,
//                     createdAt: JSON.parse(JSON.stringify(res.createdAt)),
//                 }
//             })
//         }
//     })
//
//     return {
//         props: {
//             blogs
//         },
//     }
// }

export default Index;
