import Container from '@material-ui/core/Container';
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Divider,
    Grid,
    IconButton,
    makeStyles,
    Toolbar,
    Typography
} from "@material-ui/core";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import Image from 'next/Image';

const useStyles = makeStyles(theme => ({
    navbarBtn: {
        fontFamily: 'Montserrat',
        fontSize: '19px',
        fontWeight: 400,
        margin: 'auto .7rem',
    },
    avatar: {
        // margin: 'auto .7rem',
        paddingLeft: '.7rem',
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
    heroSection: {
        width: '100%',
        margin: "auto",
    },
    heroHeading: {
        textAlign: 'start',
    },
    toolbarMargin: {
        ...theme.mixins.toolbar,
    },
    heroTextContainer: {
        padding: '1.5rem'
    },
    heroImageContainer: {
        padding: '3rem',
    },
    hDivider: {
        marginTop: '1rem',
        marginBottom: '1rem',
        marginRight: "auto",
        width: '66px',
        border: `2px solid ${theme.palette.primary.main}`,
        align: 'left'
    },
    heroParagraph: {
        width: '70%',
        marginRight: "auto",
        textAlign: 'start'
    },
    heroBtnContainer: {
        textAlign: "start",
        marginTop: '2rem',
        display: 'flex',

    },
    btnWhite: {
        ...theme.btnWhite,
    },
    btnGreen: {
        ...theme.btnGreen,
        marginRight: '2rem'
    },
    arrowIconContainer: {
        textAlign: 'left',
        position: "relative",
        // marginTop: '5rem'
    },
    arrowIcon: {
        position: "absolute",
        top: '5rem',
        left: '0'
    },
    messageIcon: {
        position: "fixed",
        bottom: theme.spacing(3),
        right: theme.spacing(3),
        background: `linear-gradient(to bottom right,${theme.palette.secondary.main},${theme.palette.primary.main})`,
        borderRadius: '50%',
    }

}))

export default function Index() {

    const classes = useStyles();


    return (
        <Grid container direction={'column'}>
            <Grid item>
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
                            <IconButton>
                                <Avatar className={classes.avatar}>a</Avatar>
                                {/*<SearchOutlinedIcon color={'primary'}/>*/}
                            </IconButton>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Grid>
            <div className={classes.toolbarMargin}/>
            <Container className={classes.heroSection}
                       maxWidth={'xl'}
                       component={Grid} item container align={'center'}
                       alignItems={'center'} justify={'center'}
            >
                <Grid item md={6} className={classes.heroTextContainer}>
                    <Typography color={'primary'} className={classes.heroHeading} variant={'h1'}>Therapy
                        Together</Typography>
                    <Divider color={'primary'} className={classes.hDivider}/>
                    <Typography variant={"body2"} className={classes.heroParagraph}>
                        It is not the the bruises on the body that hurt. It is the wounds of the heart and the scars on
                        the mind.
                    </Typography>
                    <div className={classes.heroBtnContainer}>
                        <Button className={classes.btnGreen} color={'primary'} variant={'contained'}>Explore</Button>
                        <Button className={classes.btnWhite} variant={'outlined'}>Consult</Button>
                    </div>
                    <div className={classes.arrowIconContainer}>
                        <Box className={classes.arrowIcon}>
                            <IconButton><ArrowDownwardOutlinedIcon color={'primary'}/></IconButton>
                        </Box>
                    </div>
                </Grid>
                <Grid item md={6} className={classes.heroImageContainer}>
                    <Image src={'/hero-icon.svg'} width={882.67} height={732}/>
                    <Box className={classes.messageIcon}>
                        <IconButton color={'primary'}>
                            <Image src={'/chatbubbles-icon.svg'} width={30} height={30}/>
                        </IconButton>
                    </Box>

                </Grid>
            </Container>


        </Grid>

    );
}
