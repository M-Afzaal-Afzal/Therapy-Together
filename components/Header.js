import React from 'react';
import Container from "@material-ui/core/Container";
import {
    AppBar,
    useMediaQuery,
    Hidden,
    Avatar,
    Box,
    Button,
    Divider,
    IconButton,
    makeStyles,
    Toolbar,
    useTheme, useScrollTrigger
} from "@material-ui/core";

import MenuIcon from '@material-ui/icons/Menu';

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 12 : 0,
    });
}


const useStyles = makeStyles(() => ({
    navbarBtn: {
        fontFamily: 'Montserrat',
        fontSize: '19px',
        fontWeight: 400,
        margin: 'auto .7rem',
    },
    avatarContainer: {
        // margin: 'auto .7rem',
        marginLeft: '.7rem',
    },
    space: {
        flexGrow: 1,
    },
    appBar: {
        background: '#F2F5F7',
    },
    logo: {
        margin: '.7rem auto',
    },
    verticalDivider: {
        height: '25px',
        margin: 'auto .7rem'
    },
}))

const Header = () => {

    const theme = useTheme();

    const classes = useStyles();
    const matchesMdUp = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <ElevationScroll>
            <AppBar className={classes.appBar} elevation={0}>
                <Container maxWidth={'xl'} style={{padding: '0'}} >
                    <Toolbar>
                        <IconButton color={'primary'} className={ matchesMdUp ?  classes.logo : ''}>
                            TT
                        </IconButton>
                        <div className={classes.space}/>
                        <Hidden smDown>
                            <div className={classes.space}/>
                            <Button className={classes.navbarBtn} color={'primary'}>Home</Button>
                            <Button className={classes.navbarBtn} color={'primary'}>Blog</Button>
                            <Button className={classes.navbarBtn} color={'primary'}>About us</Button>
                            <Button className={classes.navbarBtn} color={'primary'}>Contact us</Button>
                            <Button className={classes.navbarBtn} color={'primary'}>Forum</Button>
                            <Divider className={classes.verticalDivider} color={'primary'} orientation={'vertical'}/>
                            <Box className={classes.avatarContainer}>
                                <IconButton>
                                    <Avatar src={'/avatar.jpg'}/>
                                    {/*<SearchOutlinedIcon color={'primary'}/>*/}
                                </IconButton>
                            </Box>
                        </Hidden>
                        <Hidden mdUp>
                            <IconButton color={'primary'}>
                                <MenuIcon color={'primary'}/>
                            </IconButton>
                        </Hidden>
                    </Toolbar>
                </Container>
            </AppBar>
        </ElevationScroll>
    );
};

export default Header;
