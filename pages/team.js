import React, {useState} from 'react';
import {
    Avatar,
    Box,
    Button,
    Card, CardContent,
    Container,
    Divider,
    Grid,
    Hidden,
    IconButton,
    makeStyles,
    Typography, useMediaQuery, useTheme
} from "@material-ui/core";
import Image from "next/image";
import {AnimateSharedLayout, motion} from "framer-motion";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import {ArrowBack, ArrowForward} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    teamsContainer: {
        padding: '4rem',
        paddingBottom: '2rem',
        paddingTop: '4rem',
        [theme.breakpoints.down('sm')]: {
            padding: '3rem',
            paddingBottom: '2rem',
        },

        [theme.breakpoints.down('md')]: {
            padding: '2rem',
            paddingBottom: '2rem',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '1rem',
            paddingBottom: '2rem',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '.5rem',
            paddingBottom: '2rem',
        },
    },
    divider: {
        border: `2px solid ${theme.palette.primary.main}`,
        width: '3rem',
        marginTop: '1rem',
        marginBottom: '1rem'
    },
    image: {

        width: "100%",
        position: 'relative',
        margin: '0 .5rem',
        marginLeft: '0',
        borderRadius: '10px',
        overflow: 'hidden',
        height: '70%',
    },
    btnGreen: {
        width: "100%",
        padding: '1rem 0'
    },
    card: {
        boxShadow: 'rgb(19 15 235 / 30%) 2px 4px 40px',
        transition: 'box-shadow 0.4s ease-in-out 0s',
        "&:hover": {
            boxShadow: 'rgb(19 15 235 / 50%) 2px 4px 40px',
        }
    }
}))

const Team = () => {

    const classes = useStyles();
    const theme = useTheme();

    const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));


    const [selected, setSelected] = useState(0);

    const teamMembers = [
        {
            id: 0,
            name: 'M Afzaal Afzal',
            photoUrl: '',
            role: 'Full Stack Developer & Team Lead',
            desc: 'Highly effective developer committed to learning, developing skills in advance technology. Our team lead, innovative optimized solution seeker and full-stack developer who professionally developed the project grasping full-flagged functionalities. ',
            photoURL: '/author/afzaal.jpg',
            facebookProfile: 'https://www.facebook.com/profile.php?id=100012205356385',
            instagramProfile: 'https://www.instagram.com/m_afzaal_afzal/',
            twitterProfile: 'https://twitter.com/MAfzaalAfzal2',
        },
        {
            id: 1,
            name: 'Areej Anjum',
            role: 'Front-end Developer & Creative Writer',
            desc: 'Highly motivated and enthusiastic front-end-developer, whose pro skills enhanced the front-end development. Besides development, with great research proficiency and technical writing skills, her informative content gave life to our web.',
            photoURL: '/author/areej1.jpeg',
            facebookProfile: null,
            instagramProfile: null,
            twitterProfile: null,

        },
        {
            id: 2,
            name: 'Samia Afzal',
            role: 'Creative manager and Web-Content writer',
            photoURL: '/author/samia.jpeg',
            desc: 'She specializes in providing relevant content for websites to keep the visitors engaged. She has great abilities to write to deadlines and possesses excellent writing skills. She keeps the team organized and manages day-to-day activities in a creative manner.',
            facebookProfile: 'https://www.facebook.com/profile.php?id=100010602847775',
            instagramProfile: 'https://www.instagram.com/samiyaafzal_/',
            twitterProfile: 'https://twitter.com/iamsamiya2',
        },
        {
            id: 3,
            name: 'Ahmed Jahangir',
            role: 'UI/UX Designer',
            desc: 'Our UI/UX designer who is proficient in wireframing and uses his interpersonal skills to create the most interactive and eye-catching UI design. He gave the most professional and attractive look to our web. Hardworking, self-made, dedicated and most skilled person in graphic designing.',
            photoURL: '/author/ahmad.jpg',
            facebookProfile: 'https://www.facebook.com/ajvirk.juttg/',
            instagramProfile: 'https://www.instagram.com/ahmi_s_here/',
            twitterProfile: 'https://twitter.com/AJahangheer',

        }
    ];

    const handleSelected = (id) => {
        setSelected(id);
    }

    return (
        <Container maxWidth={'xl'}>
            <Grid container alignItems={'center'} direction={'column'} className={classes.teamsContainer}>
                <Grid item>
                    <Box>
                        <Typography color={'primary'} variant={'h1'}>
                            Meet Our Team
                        </Typography>
                        <Divider className={classes.divider}/>
                    </Box>
                </Grid>

                <Grid item style={{margin: '2rem 0'}}>
                    <Typography align={'center'} variant={'body2'}>
                        It is interesting to read a blog when you know it is written by a person like you who shares
                        their ups and downs, tips and hacks for life. You can always read relevant blogs written with
                        compassion and love for a personal touch.
                    </Typography>
                </Grid>

                <Hidden mdDown>
                    <Grid container style={{paddingTop: '4rem'}}>
                        <Grid item lg={4} style={{padding: '1rem', paddingBottom: '6rem'}}>
                            <Grid container>
                                <Grid item>
                                    <Typography style={{height: '80px'}} gutterBottom color={'primary'} variant={'h3'}>
                                        {teamMembers[selected].role}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography style={{height: '190px',letterSpacing: 1}} variant={'body2'} >
                                        {teamMembers[selected].desc}
                                    </Typography>
                                </Grid>
                                <Grid item alignItems={'center'} container style={{marginTop: '4rem'}}>
                                    <Grid item>
                                        <a target={'_blank'} href={teamMembers[selected].twitterProfile}>
                                            <IconButton disabled={!teamMembers[selected].twitterProfile} style={{padding: '6px'}}>
                                                <TwitterIcon color={'primary'}/>
                                            </IconButton>
                                        </a>
                                        <a target={'_blank'} href={teamMembers[selected].instagramProfile}>
                                            <IconButton disabled={!teamMembers[selected].instagramProfile} style={{padding: '6px'}}>
                                                <InstagramIcon color={'primary'}/>
                                            </IconButton>
                                        </a>
                                        <a target={'_blank'} href={teamMembers[selected].facebookProfile}>
                                            <IconButton disabled={!teamMembers[selected].facebookProfile} style={{padding: '6px'}}>
                                                <FacebookIcon color={'primary'}/>
                                            </IconButton>
                                        </a>
                                    </Grid>
                                    <Grid item style={{flexGrow: 1}}>
                                        {/*    this is for layout purpose*/}
                                    </Grid>
                                    <Grid item style={{paddingRight: '1rem'}}>
                                        <IconButton disabled={selected === 0} onClick={() => {
                                            setSelected(selected - 1)
                                        }} style={{padding: '6px'}}>
                                            <ArrowBack color={'primary'}/>
                                        </IconButton>
                                        <IconButton disabled={selected === 3} onClick={() => {
                                            setSelected(selected + 1)
                                        }} style={{padding: '6px'}}>
                                            <ArrowForward color={'primary'}/>
                                        </IconButton>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item container lg={8}>
                            <AnimateSharedLayout>
                                {
                                    teamMembers.map((member) => {
                                        return (

                                            <Grid
                                                component={motion.div}
                                                layout
                                                key={member.id}
                                                item lg={3}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'flex-end',
                                                    width: '100%',
                                                    height: '100%',
                                                    position: 'relative',
                                                }}>

                                                <Box
                                                    component={motion.div}
                                                    layout
                                                    animate={{
                                                        height: selected === member.id ? '100%' : '70%',
                                                    }}
                                                    transition={{type: "linear", stiffness: 200}}

                                                    onTap={handleSelected.bind(this, member.id)}
                                                    className={`${classes.image}`}
                                                >
                                                    <Button style={{width: "100%", height: '100%'}}>

                                                        <Image priority component={motion.div} objectFit={'cover'}
                                                               layout={'fill'}
                                                               src={member.photoURL}/>
                                                        <Box
                                                            component={Typography}
                                                            variant={'h3'}
                                                            className={classes.image}
                                                            style={{
                                                                position: 'absolute',
                                                                top: 0, left: 0,
                                                                color: 'white',
                                                                padding: '.5rem',
                                                                textAlign: 'center',
                                                                verticalAlign: 'bottom',
                                                                fontSize: '1.3rem',
                                                                justifyContent: 'center',
                                                                display: 'flex',
                                                                alignItems: 'flex-end',
                                                                width: '100%', height: '100%',
                                                                background: 'linear-gradient(to bottom,transparent 85%,rgba(0,0,0,.8))',
                                                            }}>
                                                            {member.name}
                                                        </Box>
                                                    </Button>
                                                </Box>

                                            </Grid>
                                        )
                                    })
                                }
                            </AnimateSharedLayout>

                        </Grid>

                    </Grid>
                </Hidden>
                <Hidden lgUp>
                    <Grid container justify={'center'}>
                        {
                            teamMembers.map((member => {
                                return (
                                    <Grid xs={12} md={6} item align={'center'}
                                          style={{margin: matchesXs ? "1rem 0" : '2rem 0'}}
                                            key={member.id}
                                    >
                                        <Card
                                            className={classes.card}
                                            style={{
                                            maxWidth: '25rem',
                                            height: '100%',
                                            position: 'relative',
                                            background: theme.palette.secondary.main
                                        }}>
                                            <CardContent style={{padding: matchesXs ? "1rem" : '2rem',}}>
                                                <Box style={{display: 'flex', justifyContent: 'center'}}>
                                                    <Avatar style={{width: 100, height: 100}}
                                                            src={member.photoURL}/>
                                                </Box>
                                                <Box mt={2}>
                                                    <Typography color={'primary'} align={'center'} variant={'h3'}>
                                                        {member.name}
                                                    </Typography>
                                                </Box>
                                                <Box mt={1} align={'center'}>
                                                    <Typography
                                                        align={'center'}
                                                        style={{
                                                            display: 'inline-block',
                                                            align: 'center',
                                                            padding: '.1rem .4rem',
                                                            background: theme.palette.primary.main,
                                                            color: 'white',
                                                            borderRadius: '25px',
                                                            fontSize: '.9rem'
                                                        }}
                                                        variant={'body2'}
                                                    >
                                                        {member.role}
                                                    </Typography>
                                                </Box>
                                                <Box px={1} mt={4} mb={6}>
                                                    <Typography align={'center'} variant={'body2'}>
                                                        {member.desc}
                                                    </Typography>
                                                </Box>
                                            </CardContent>
                                            <Box style={{
                                                position: 'absolute',
                                                width: '100%',
                                                bottom: 0,
                                                left: 0,
                                                background: theme.palette.primary.main
                                            }}>
                                                <Grid align={'center'} container>
                                                    <Grid xs item>
                                                        <a target={'_blank'} href={member.facebookProfile}>
                                                            <Button disabled={!member.facebookProfile} className={classes.btnGreen}
                                                                    style={{width: '100%'}}>
                                                                <FacebookIcon color={'secondary'} fontSize={'default'}/>
                                                            </Button>
                                                        </a>
                                                    </Grid>

                                                    <Grid xs item>
                                                        <a target={'_blank'} href={member.instagramProfile}>
                                                            <Button disabled={!member.instagramProfile} className={classes.btnGreen}
                                                                    style={{width: '100%'}}>
                                                                <InstagramIcon color={'secondary'}
                                                                               fontSize={'default'}/>
                                                            </Button>
                                                        </a>
                                                    </Grid>
                                                    <Grid xs item>
                                                        <a target={'_blank'} href={member.twitterProfile}>
                                                            <Button disabled={!member.twitterProfile} className={classes.btnGreen}
                                                                    style={{width: '100%'}}>
                                                                <TwitterIcon color={'secondary'} fontSize={'default'}/>
                                                            </Button>
                                                        </a>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Card>
                                    </Grid>
                                )
                            }))
                        }

                    </Grid>
                </Hidden>
            </Grid>
        </Container>

    );
};

export default Team;
