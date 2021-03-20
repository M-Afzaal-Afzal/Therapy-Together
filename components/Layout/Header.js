import React, {useState} from 'react';
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
    useTheme, useScrollTrigger, Typography, Popover, Grid
} from "@material-ui/core";
import Link from '../../src/utils/Link';

import MenuIcon from '@material-ui/icons/Menu';
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentUser, selectImageUrl} from "../../src/store/user/user.selectors";
import {signOutStart} from "../../src/store/user/user.actions";
import {useRouter} from "next/router";
import Drawer from "../Drawer/SideDrawer";
import Image from "next/image";

function ElevationScroll(props) {
    const {children, window} = props;
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


const useStyles = makeStyles((theme) => ({
    navbarBtn: {
        fontFamily: 'Montserrat',
        fontSize: '19px',
        fontWeight: 400,
        margin: 'auto .7rem',
        textDecoration: 'none',
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

    popupContainer: {
        width: '25rem',
        padding: "3rem",

        // boxShadow: 'rgb(19 15 235 / 10%) 2px 4px 40px',
        // transition: 'box-shadow 0.4s ease-in-out 0s',
        // '&:hover': {
        //     boxShadow: 'rgb(19 15 235 / 30%) 2px 4px 40px',
        // }
    },
    userName: {
        fontSize: '1.5rem'
    },
    userCardAvatar: {
        marginBottom: '1rem',
    },
    userAvatar: {
        width: '80px',
        height: '80px',
    },
    btnGreen: {
        ...theme.btnGreen,
        marginTop: '2rem',
    },
    backgroundGreen: {
        background: theme.palette.primary.main,
    }
}))

const Header = () => {

    const theme = useTheme();
    const dispatch = useDispatch();
    const user = useSelector(selectCurrentUser);
    const imageURL = useSelector(selectImageUrl);
    const router = useRouter();

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const drawerCloseHandler = () => {
        setIsDrawerOpen(false);
    }

    const drawerOpenHandler = () => {
        setIsDrawerOpen(true);
    }

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const classes = useStyles();
    const matchesMdUp = useMediaQuery(theme.breakpoints.up('md'));

    const signOutHandler = async () => {
        await dispatch(signOutStart());
        await router.push('/');
    }

    return (
        <ElevationScroll>
            <AppBar className={classes.appBar} elevation={0}>
                <Container maxWidth={'xl'} style={{padding: '0'}}>
                    <Toolbar>
                        <IconButton style={{padding: 0}} component={Link} href={'/'} color={'primary'}
                                    className={matchesMdUp ? classes.logo : ''}>
                            <Image priority style={{padding: 0}} src={'/logo.png'} width={50} height={50} />
                        </IconButton>
                        <div className={classes.space}/>
                        <Hidden smDown>
                            <div className={classes.space}/>
                            <Button component={Link} style={{textDecoration: 'none'}} href={'/'}
                                    className={classes.navbarBtn} color={'primary'}>Home</Button>
                            <Button component={Link} style={{textDecoration: 'none'}} href={'/blogs'}
                                    className={classes.navbarBtn} color={'primary'}>Blog</Button>
                            <Button component={Link} style={{textDecoration: 'none'}} href={'/about'}
                                    className={classes.navbarBtn} color={'primary'}>About us</Button>
                            <Button component={Link} style={{textDecoration: 'none'}} href={'/contact'}
                                    className={classes.navbarBtn} color={'primary'}>Contact us</Button>
                            <Button component={Link} style={{textDecoration: 'none'}} href={'/forum'}
                                    className={classes.navbarBtn} color={'primary'}>Forum</Button>
                            <Divider className={classes.verticalDivider} style={{textDecoration: 'none'}}
                                     color={'primary'} orientation={'vertical'}/>
                            <Box className={classes.avatarContainer}>
                                <IconButton aria-describedby={id} onClick={handleClick}>
                                    <Avatar src={`${imageURL}`}
                                            className={user ? classes.backgroundGreen : null}
                                    >
                                        {
                                            user ?
                                                <Typography variant={'h2'}>
                                                    {user.displayName[0]}
                                                </Typography>
                                                :
                                                null
                                        }

                                    </Avatar>
                                    {/*<SearchOutlinedIcon color={'primary'}/>*/}
                                </IconButton>
                            </Box>
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                            >
                                <Grid
                                    container
                                    className={classes.popupContainer}
                                    justify={'center'}
                                    direction={'column'}
                                    alignItems={'center'}
                                >
                                    <Grid item className={classes.userCardAvatar}>
                                        <Avatar src={imageURL}
                                                className={`${classes.userAvatar} ${user ? classes.backgroundGreen : null}`}>
                                            {
                                                user ?
                                                    <Typography variant={'h2'}>
                                                        {user.displayName[0]}
                                                    </Typography>
                                                    :
                                                    null
                                            }

                                        </Avatar>
                                    </Grid>
                                    <Grid item>
                                        <Typography className={classes.userName} variant={'h3'} color={'primary'}>
                                            {
                                                user ? user.displayName : 'Unknown'
                                            }
                                        </Typography>
                                    </Grid>
                                    <Grid item container justify={user ? 'center' : 'space-evenly'}>
                                        {
                                            user ?
                                                <Grid item onClick={handleClose}>
                                                    <Button onClick={signOutHandler}
                                                            color={'primary'} variant={'contained'}
                                                            className={classes.btnGreen}>Logout</Button>
                                                </Grid>
                                                :
                                                <>
                                                    <Grid item onClick={handleClose}>
                                                        <Button style={{textDecoration: 'none'}} component={Link}
                                                                href={'/login'} color={'primary'} variant={'contained'}
                                                                className={classes.btnGreen}>Login</Button>
                                                    </Grid>
                                                    <Grid item onClick={handleClose}>
                                                        <Button style={{textDecoration: 'none'}} component={Link}
                                                                href={'/signup'} color={'primary'} variant={'contained'}
                                                                className={classes.btnGreen}>Sign Up</Button>
                                                    </Grid>
                                                </>

                                        }

                                    </Grid>
                                </Grid>
                            </Popover>
                        </Hidden>
                        <Hidden mdUp>
                            <IconButton onClick={drawerOpenHandler} color={'primary'}>
                                <MenuIcon color={'primary'}/>
                            </IconButton>
                            <Drawer open={isDrawerOpen} drawerOpenHandler={drawerOpenHandler}
                                    drawerCloseHandler={drawerCloseHandler}/>
                        </Hidden>
                    </Toolbar>
                </Container>
            </AppBar>
        </ElevationScroll>
    );
};

export default React.memo(Header);
