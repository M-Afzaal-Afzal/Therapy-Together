import Container from '@material-ui/core/Container';
import {
    Grid,
    makeStyles,
} from "@material-ui/core";
// import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import About from "../components/about";
import TextWithImage from '../components/TextWithImage'

const useStyles = makeStyles(theme => ({
    sectionContainer: {
        width: '100%',
        minHeight: 'calc(100vh - 4rem)',
        margin: "auto",
    },
    aboutSection: {
        background: theme.palette.secondary.main,
        padding: '8rem',
        display: 'flex',
        justifyContent: 'center',
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

            <Grid item container className={`${classes.sectionContainer} ${classes.aboutSection}`}>
                <About/>
            </Grid>
            <TextWithImage
                mainHeading={'Our Community'}
                bodyTextOne={'We are mainly a forum and blog website who aim to get people speak about their anxiety and trauma without the feeling of being judged or misunderstood. With us you can speak about our problems like a family and understand each others differences, get and provide support to your preferences. Here you can find millions of people like you with whom you can share your personal problems and communicate solutions.'}
                bodyTextTwo={'Communication problems can raise our stress levels which is why we strongly believe that it is very important to communicate and open up about our sufferings or regrets infront of the right people here you can discuss about your grievances and get help without feeling that your private space is being invaded. You might like to explore more about us through our forum'}
                imageSrc={'/community-icon.svg'}
            />


        </Grid>

    );
}
