import React from 'react';
import Header from "./Header";
import {Grid, makeStyles} from "@material-ui/core";

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
        </>
    );
};

export default Layout;
