import React from 'react';
import Container from "@material-ui/core/Container";
import {AppBar, Avatar, Box, Button, Divider, IconButton, makeStyles, Toolbar} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
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
        margin: '.7rem auto'
    },
    verticalDivider: {
        height: '25px',
        margin: 'auto .7rem'
    },
}))

const Header = () => {

    const classes = useStyles();

    return (
        <>
            <AppBar className={classes.appBar} elevation={0}>
                <Container maxWidth={'xl'}>
                    <Toolbar>
                        <IconButton color={'primary'} className={classes.logo}>
                            TT
                        </IconButton>
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
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default Header;
