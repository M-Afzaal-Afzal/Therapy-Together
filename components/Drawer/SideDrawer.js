import React, {useCallback} from 'react';
import {Box, Divider, List, ListItem, ListItemText, makeStyles, SwipeableDrawer, Typography} from "@material-ui/core";
import Link from '../../src/utils/Link';
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentUser} from "../../src/store/user/user.selectors";
import {signOutStart} from "../../src/store/user/user.actions";
import {useRouter} from "next/router";
import Image from "next/image";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: '15rem',
        background: '#F3F7FB',
        height: '100%',
    },
    divider: {
        backgroundColor: theme.palette.primary.main,
    },
    listItem: {
        padding: ".7rem 2rem",
    },
    listItemText: {
        color: theme.palette.primary.main,
    }
}))

const SideDrawer = (props) => {

    const classes = useStyles();
    const user = useSelector(selectCurrentUser);
    const router = useRouter();

    const dispatch = useDispatch();

    const logoutHandler = useCallback(() => {
        dispatch(signOutStart());
        props.drawerCloseHandler();
        router.push('/');
    }, [])

    return (
        <SwipeableDrawer
            anchor={'left'}
            open={props.open}
            onClose={props.drawerCloseHandler}
            onOpen={props.drawerOpenHandler}
        >
            <Box className={classes.root}>
                <List>
                    <div onClick={props.drawerCloseHandler}>
                        <ListItem component={Link} href={'/'} button className={classes.listItem}>
                            {/*<ListItemText primary={*/}
                            {/*    <Typography className={classes.listItemText} variant={'body2'}>Home</Typography>*/}
                            {/*}/>*/}
                            <Image priority alt={'Logo'} width={70} height={70} src={'/logo.png'}/>
                        </ListItem>
                        <Divider className={classes.divider}/>
                    </div>
                    <div onClick={props.drawerCloseHandler}>
                        <ListItem component={Link} href={'/'} button className={classes.listItem}>
                            <ListItemText primary={
                                <Typography className={classes.listItemText} variant={'body2'}>Home</Typography>
                            }/>
                        </ListItem>
                        <Divider className={classes.divider}/>
                    </div>
                    <div onClick={props.drawerCloseHandler}>
                        <ListItem component={Link} href={'/blogs'} button className={classes.listItem}>
                            <ListItemText primary={
                                <Typography className={classes.listItemText} variant={'body2'}>Blog</Typography>
                            }/>
                        </ListItem>
                        <Divider className={classes.divider}/>
                    </div>
                    <div onClick={props.drawerCloseHandler}>
                        <ListItem component={Link} href={'/about'} button className={classes.listItem}>
                            <ListItemText primary={
                                <Typography className={classes.listItemText} variant={'body2'}>About us</Typography>
                            }/>
                        </ListItem>
                        <Divider className={classes.divider}/>
                    </div>

                    <div onClick={props.drawerCloseHandler}>
                        <ListItem component={Link} href={'/team'} button className={classes.listItem}>
                            <ListItemText primary={
                                <Typography className={classes.listItemText} variant={'body2'}>
                                    Our Team
                                </Typography>
                            }/>
                        </ListItem>
                        <Divider className={classes.divider}/>
                    </div>


                    <div onClick={props.drawerCloseHandler}>
                        <ListItem component={Link} href={'/forum'} button className={classes.listItem}>
                            <ListItemText primary={
                                <Typography className={classes.listItemText} variant={'body2'}>Forum</Typography>
                            }/>
                        </ListItem>
                        <Divider className={classes.divider}/>
                    </div>
                    {
                        user ?
                            <div onClick={logoutHandler}>
                                <ListItem button className={classes.listItem}>
                                    <ListItemText primary={
                                        <Typography className={classes.listItemText}
                                                    variant={'body2'}>Logout</Typography>
                                    }/>
                                </ListItem>
                            </div>
                            :
                            <div onClick={props.drawerCloseHandler}>
                                <ListItem component={Link} href={'/login'} button className={classes.listItem}>
                                    <ListItemText primary={
                                        <Typography className={classes.listItemText}
                                                    variant={'body2'}>Login</Typography>
                                    }/>
                                </ListItem>
                            </div>
                    }

                    <Divider className={classes.divider}/>

                </List>
            </Box>
        </SwipeableDrawer>
    );
};

export default React.memo(SideDrawer);
