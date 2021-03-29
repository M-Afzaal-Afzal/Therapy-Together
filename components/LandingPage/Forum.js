import React from 'react';
import {
    Button,
    useMediaQuery,
    Container,
    Divider,
    Grid,
    Hidden,
    makeStyles,
    Typography,
    useTheme
} from "@material-ui/core";
import Image from 'next/image';
import Link from '../../src/utils/Link';

const useStyles = makeStyles(theme => ({
    forumImageContainer: {
        position: "absolute",
        left: 0,
        top: 0,
        marginTop: '-45px',
        paddingBottom: '5rem',
    },
    formTextContainer: {
        margin: '5rem 0',
        marginRight: '5rem',
        [theme.breakpoints.down('sm')]: {
            margin: '5rem auto',
            padding: '1rem',
        }
    },
    forumDivider: {
        border: `2px solid ${theme.palette.primary.main}`,
        width: '7.5rem',
        marginTop: '1rem',
        marginBottom: '1rem'
    },
    btnGreen: {
        ...theme.btnGreen,
        marginTop: '2rem',
    },
    formBodyText: {
        textAlign: 'justify',
    }
}))

const Forum = () => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const classes = useStyles();

    return (
        <Grid container justify={'center'} style={{position: 'relative'}}>
            <Hidden smDown>
                    <div className={classes.forumImageContainer}>
                        <Image src={'/forum-icon.svg'} alt={'Forum Image'} width={350} height={500}/>
                    </div>
            </Hidden>
            <Grid item component={Container} maxWidth={'xl'} container style={{display: 'flex', alignItems: 'center',justifyContent:'flex-end'}}>
                <Grid container alignItems={'center'} justify={'flex-end'}>
                    <Grid item className={classes.formTextContainer}>
                        <Container maxWidth={'sm'}>
                            <div>
                                <Typography color={'primary'} variant={'h1'}>
                                    Forum
                                </Typography>
                                <Divider color={'primary'} className={classes.forumDivider}/>
                            </div>
                            <Typography variant={'body2'} className={classes.formBodyText}>
                                Communication problems can raise our stress levels which is why we strongly believe that
                                it
                                is very important to communicate and open up about our sufferings or regrets infront of
                                the
                                right people here you can discuss about your grievances and get help without feeling
                                that
                                your private space is being invaded. You might like to explore more about us through our
                                forum
                            </Typography>
                            <Button style={{textDecoration: 'none'}} component={Link} href={'/forum'}
                                    variant={'contained'} color={'primary'}
                                    className={classes.btnGreen}>Explore</Button>
                        </Container>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default React.memo(Forum);
