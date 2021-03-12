import React from 'react';
import {Avatar, Box, Grid, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    textField: {
        marginBottom: '-2px',
    },
    avatarContainer: {
        marginBottom: '.5rem',
        marginTop: '.5rem'
    },
    msg: {
        padding: '.5rem',
        // textOverflow:"ellipsis",
        // width : '100%',
        overflowWrap: 'anywhere',
        position: 'relative',
        fontSize: '.9375rem'

    },
    msgReceive: {
        background: theme.palette.primary.main,
        borderRadius: '0 18px 18px 18px',
        color: 'white',
        border: `1px solid ${theme.palette.primary.main}`,
    },
    avatarSendContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    msgSend: {
        // background: theme.palette.primary.main,
        borderRadius: '18px 0 18px 18px',
        border: `1px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.main,
        textAlign: 'left',
    },
    msgSendContainer: {
        display: 'flex',
        justifyContent: "flex-end",
    }
}))

const Message = ({sender, text, photoURL, displayName}) => {

    const classes = useStyles();

    return (
        <Grid item>
            <Box>
                <Box className={`${classes.avatarContainer} ${sender ? classes.avatarSendContainer : ''}`}>
                    <Avatar src={photoURL}>{displayName && displayName[0]}</Avatar>
                </Box>
                <Box className={`${sender ? classes.msgSendContainer : ''}`}>
                    <Typography className={`${sender ? classes.msgSend : classes.msgReceive} ${classes.msg}`}
                                style={{display: 'inline-block'}} variant={'body2'}>
                        {text}
                    </Typography>
                </Box>
            </Box>
        </Grid>
    );
};

export default Message;
