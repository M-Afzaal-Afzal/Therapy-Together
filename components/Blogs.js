import React from 'react';
import { Container, Divider, Grid, makeStyles, Typography} from "@material-ui/core";

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
    },
}))

const Blogs = () => {

    const classes = useStyles();

    return (
        <Container maxWidth={'lg'}>
            <Grid container alignItems={'center'} justify={'center'} direction={'column'}>
                <Grid item>
                    <Typography color={'primary'} variant={'h1'}>
                        Learn About Our Blogs
                    </Typography>
                    <Divider className={classes.hDividerBlogs}/>
                </Grid>
                <Grid item align={'center'} style={{maxWidth: '50rem'}}>
                    <Typography variant={'body2'}>
                        It is interesting to read a blog when you know it is written by a person like you who shares
                        their ups and downs, tips and hacks for life. You can always read relevant blogs written with
                        compassion and love for a personal touch.
                    </Typography>
                </Grid>
                <Grid item container justify={'space-evenly'} spacing={2} className={classes.blogsCardContainer}>

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
            </Grid>
        </Container>
    );
};

export default Blogs;
