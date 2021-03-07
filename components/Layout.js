import React from 'react';
import Header from "./Header";
import { makeStyles} from "@material-ui/core";
import Footer from "./Footer";

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
    },
}))

const Layout = (props) => {

    const classes = useStyles();

    return (
        <>
            <Header/>
            <div className={classes.toolbarMargin}/>
            {props.children}
            <Footer/>
        </>
    );
};

export default Layout;
