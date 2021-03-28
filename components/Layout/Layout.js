import React, {useEffect} from 'react';
import Header from "./Header";
import { makeStyles} from "@material-ui/core";
import Footer from "./Footer";
// import Image from "next/image";
// import ChatRoom from "../Chat/ChatRoom";

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

    // const [isChatOpened, setIsChatOpened] = useState(false);

    // const toggleIsChatOpened = () => {
    //     setIsChatOpened(!isChatOpened);
    // }

    useEffect(() => {
    const Tawk_API = '75073c4b3184272df207bc7eefc1f91c42d600d3' || {}, Tawk_LoadStart = new Date();
    (function(){
    const s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/6060d0f8f7ce18270934c991/1f1t30jsk';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();

    },[])


    return (
        <>
            <Header/>

            <div className={classes.toolbarMargin}/>

            {props.children}

            {/*<Box className={classes.messageIcon}>*/}
            {/*    <IconButton color={'primary'} onClick={toggleIsChatOpened}>*/}
            {/*        <Image priority alt={'Chat Icon'} style={{zIndex: 50}} src={'/chatbubbles-icon.svg'} width={30}*/}
            {/*               height={30}/>*/}
            {/*    </IconButton>*/}
            {/*</Box>*/}

            {/*<ChatRoom isChatOpened={isChatOpened} toggleIsChatOpened={toggleIsChatOpened}/>*/}

            <Footer/>
        </>
    );
};

export default React.memo(Layout);
