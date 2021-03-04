import {
    Box,
    Grid,
    makeStyles,
} from "@material-ui/core";
import About from "../components/About";
import TextWithImage from '../components/TextWithImage'
import Forum from "../components/Forum";
import Doctor from "../components/Docotr";
import Blogs from "../components/Blogs";
// import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const useStyles = makeStyles(theme => ({
    sectionContainer: {
     ...theme.sectionContainer,
    },
    lgBackground: {
        background: theme.palette.secondary.main,
    },
    aboutSection: {
        padding: '8rem',
        display: 'flex',
        justifyContent: 'center',
    },
    doctorSection: {
        display: 'flex',
        justifyContent: 'center',
    },
    blogsContainer: {
        background: theme.palette.secondary.main,
        padding: '8rem 2rem',
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

            <Grid item container
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


        </Grid>

    );
}
