import React from 'react';
import {Divider, Grid, makeStyles, Typography, useMediaQuery} from "@material-ui/core";
import Image from 'next/image';
import theme from "../src/utils/theme";

const useStyles = makeStyles(theme => ({
    errorMainContainer: {
        padding: "8rem",
        paddingTop: '6rem',
        paddingBottom: '4rem',
        [theme.breakpoints.down('sm')]: {
            padding: '4rem',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '1rem',
        }
    },
    divider: {
        marginTop: '.5rem',
        marginBottom: '4rem',
        marginRight: "auto",
        width: '42px',
        border: `2px solid ${theme.palette.primary.main}`,
        align: 'left'
    }
}))

const Error = () => {

    const classes = useStyles();

    const matchesMd = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <>
            <Grid container justify={'center'} className={classes.errorMainContainer}>
                <Grid item>
                    <Typography variant={'h1'} color={'primary'}>Error 404</Typography>
                    <Divider className={classes.divider}/>
                </Grid>
                <Grid item>
                    <Image src={'/error.svg'} alt={'404 image'} width={matchesMd ? 848.91 : 1048.91} height={matchesMd ? 595 : 795}/>
                </Grid>

            </Grid>
        </>
    );
};

export default Error;
