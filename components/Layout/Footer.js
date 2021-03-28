import React from 'react';
import {Divider, Grid, IconButton, makeStyles, Typography} from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import CopyrightIcon from '@material-ui/icons/Copyright';
import Image from "next/image";
import Link from '../../src/utils/Link';

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
                <IconButton component={Link} href={'/'} color={'primary'}>
                    <Image src={'/logo.png'} alt={"Logo"} width={80} height={80} priority/>
                </IconButton>
            </Grid>
            <Grid item container justify={"center"}>
                <Grid item>

                    <IconButton>
                        <FacebookIcon color={'primary'}/>
                    </IconButton>

                </Grid>
                <Grid item>
                    {/*<Box px={3}>*/}
                    <a target={'_blank'} href="https://instagram.com/therapytogether50?igshid=sthx0npm6wnj">
                        <IconButton>
                            <InstagramIcon color={'primary'}/>
                        </IconButton>
                    </a>
                    {/*</Box>*/}
                </Grid>
                <Grid item>
                    <a target={'_blank'} href="https://twitter.com/TherapyTogether?s=08">
                        <IconButton>
                            <TwitterIcon style={{display: 'flex'}} color={'primary'}/>
                        </IconButton>
                    </a>
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

export default React.memo(Footer);
