import React, {useState} from 'react';
import Header from "./Header";
import {Box, IconButton, makeStyles} from "@material-ui/core";
import Footer from "./Footer";
import Image from "next/image";
import ChatRoom from "../Chat/ChatRoom";

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
    },
    messageIcon: {
        position: "fixed",
        bottom: theme.spacing(3),
        right: theme.spacing(3),
        background: `linear-gradient(136.25deg, #ffffff 0%, #6d9773 100%)`,
        borderRadius: '50%',
        zIndex: '30',

        [theme.breakpoints.down('xs')]: {
            bottom: theme.spacing(1.5),
            right: theme.spacing(1.5),
        }
    },
}))

const Layout = (props) => {

    const classes = useStyles();

    const [isChatOpened, setIsChatOpened] = useState(false);

    const toggleIsChatOpened = () => {
        setIsChatOpened(!isChatOpened);
    }

    return (
        <>
            <Header/>

            <div className={classes.toolbarMargin}/>

            {props.children}

            <Box className={classes.messageIcon}>
                <IconButton color={'primary'} onClick={toggleIsChatOpened}>
                    <Image priority style={{zIndex: 50}} src={'/chatbubbles-icon.svg'} width={30} height={30}/>
                </IconButton>
            </Box>

            <ChatRoom isChatOpened={isChatOpened} toggleIsChatOpened={toggleIsChatOpened}/>

            <Footer/>
        </>
    );
};

export default Layout;
