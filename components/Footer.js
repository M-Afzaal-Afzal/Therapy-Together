import React from 'react';
import {Box, Divider, Grid, IconButton, makeStyles, Typography} from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import CopyrightIcon from '@material-ui/icons/Copyright';

const useStyles = makeStyles(theme => ({
    footerContainer: {
        padding: '8rem',
        paddingBottom: '4rem',
        [theme.breakpoints.down('sm')]: {
            padding: '4rem',
            paddingBottom: '4rem',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '2rem',
            paddingBottom: '4rem',
        },
    },
    verticalDivider: {
        height: '20px',
        margin: 'auto .7rem',
        display: 'inline-block',
    },
    copyrightContainer: {
        marginTop: '1rem'
    }
}))

const Footer = () => {

    const classes = useStyles();

    return (
        <Grid container direction={'column'} alignItems={'center'} justify={'center'}
              className={classes.footerContainer}>
            <Grid item>
                <Typography gutterBottom variant={'h1'} color={'primary'}>
                    TT
                </Typography>
            </Grid>
            <Grid item container justify={"center"}>
                <Grid item>
                    <IconButton>
                        <FacebookIcon color={'primary'}/>
                    </IconButton>
                </Grid>
                <Grid item>
                    {/*<Box px={3}>*/}
                        <IconButton>
                            <InstagramIcon color={'primary'}/>
                        </IconButton>
                    {/*</Box>*/}
                </Grid>
                <Grid item>
                    <IconButton>
                        <TwitterIcon style={{display: 'flex'}} color={'primary'}/>
                    </IconButton>
                </Grid>
            </Grid>
            <Grid className={classes.copyrightContainer} item container justify={'center'} alignItems={'center'}>
                <Grid item style={{display: 'flex'}}>
                    <CopyrightIcon/>
                </Grid>
                <Grid item>
                    <Typography variant={'body2'}>
                        2021 - From
                    </Typography>
                </Grid>
                <Grid item style={{display: 'flex'}}>
                    <Divider className={classes.verticalDivider} orientation={'vertical'} flexItem/>
                </Grid>
                <Grid item>
                    <Typography variant={'body2'}>
                        All rights reserved
                    </Typography>
                </Grid>
            </Grid>

        </Grid>
    );
};

export default Footer;
