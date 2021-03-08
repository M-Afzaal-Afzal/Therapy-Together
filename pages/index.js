import {
    Box,
    Grid,
    makeStyles,
} from "@material-ui/core";
import About from "../components/LandingPage/About";
import TextWithImage from '../components/LandingPage/TextWithImage'
import Forum from "../components/LandingPage/Forum";
import Doctor from "../components/LandingPage/Docotr";
import Blogs from "../components/LandingPage/Blogs";
import BlogSubcribe from "../components/LandingPage/BlogSubscribe";
import ContactUs from "../components/LandingPage/ContactUs";
// import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const useStyles = makeStyles(theme => ({
    sectionContainer: {
     ...theme.sectionContainer,
    },
    lgBackground: {
        background: theme.palette.secondary.main,
    },
    aboutSection: {
        padding: '8rem 0rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            padding: '2rem 0',
        }
    },
    doctorSection: {
        display: 'flex',
        justifyContent: 'center',
    },
    blogsContainer: {
        background: theme.palette.secondary.main,
        padding: '8rem 2rem 10rem',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            padding: '4rem 1rem 5rem',
        }
    },
    greenCircle: {
        background: 'linear-gradient(136.25deg, #ffffff 0%, #6d9773 100%)',
        width: '250px',
        height: '250px',
        position: "absolute",
        borderRadius: '50%',

        bottom: '-125px',
        right: '-125px',
        overflow: 'hidden',
        boxShadow: 'rgba(100, 100, 111, 0.4) 35px 7px 29px 0px;'
    },
    blogsSubscribeContainer: {
        margin: 'auto',
        display: 'flex',
        justifyContent:'center',

        // height: '20rem',
        position: 'relative'
    },
    contactUsContainer: {
        background: theme.palette.secondary.main,
        padding: '12rem 8rem 8rem',
        [theme.breakpoints.down('sm')]: {
            padding: '6rem 4rem 4rem',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '3rem 2rem 2rem',
        }
    }
}))

export default function Index() {

    const classes = useStyles();

    return (
        <Grid container direction={'column'}>
            <TextWithImage
                mainHeading={'Therapy Together'}
                bodyTextOne={'It is not the the bruises on the body that hurt. It is the wounds of the heart and the scars on\n' +
                'the mind.'}
                hasButtons={true}
                imageSrc={'/hero-icon.svg'}
            />

            <Grid item container id={'about'}
                  className={`${classes.sectionContainer} ${classes.aboutSection} ${classes.lgBackground}`}>
                <About/>
            </Grid>
            <TextWithImage
                mainHeading={'Our Community'}
                bodyTextOne={'We are mainly a forum and blog website who aim to get people speak about their anxiety and trauma without the feeling of being judged or misunderstood. With us you can speak about our problems like a family and understand each others differences, get and provide support to your preferences. Here you can find millions of people like you with whom you can share your personal problems and communicate solutions.'}
                imageSrc={'/community-icon.svg'}
            />
            <Grid item container className={`${classes.sectionContainer} ${classes.lgBackground}`}>
                <Forum/>
            </Grid>
            <Grid item container className={`${classes.sectionContainer} ${classes.doctorSection}`}>
                <Doctor/>
            </Grid>
            <Grid item container className={`${classes.sectionContainer} ${classes.blogsContainer}`} >
                <Blogs/>
            </Grid>
            <Grid item container className={` ${classes.blogsSubscribeContainer}`}>
                <BlogSubcribe/>
            </Grid>
            <Grid item className={`${classes.contactUsContainer}`}>
                <ContactUs/>
            </Grid>
        </Grid>

    );
}
