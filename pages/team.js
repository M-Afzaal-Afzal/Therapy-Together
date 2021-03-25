import React, {useState} from 'react';
import {Box, Container, Divider, Grid, IconButton, makeStyles, Typography} from "@material-ui/core";
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
}))

const Team = () => {

    const classes = useStyles();

    const [selected, setSelected] = useState(0);

    const teamMembers = [
        {
            id: 0,
            name: 'M Afzaal Afzal',
            photoUrl: '',
            role: 'Full Stack Developer & Team Lead',
            desc: '',
            photoURL: '/author/afzaal.jpg',
            facebookProfile: '',
            instagramProfile: '',
            twitterProfile: '',
        },
        {
            id: 1,
            name: 'Ahmed Jahangir',
            role: 'UI/UX Designer',
            desc: '',
            photoURL: '/author/ahmad.jpg',
            facebookProfile: '',
            instagramProfile: '',
            twitterProfile: '',
        },
        {
            id: 2,
            name: 'Areej Anjum',
            role: 'Front-end Developer & Creative Writer',
            desc: '',
            photoURL: '/author/areej.jpeg',
            facebookProfile: '',
            instagramProfile: '',
            twitterProfile: '',
        },
        {
            id: 3,
            name: 'Samia Afzal',
            role: 'Creative Manager',
            photoURL: '/author/samia.jpeg',
            desc: '',
            facebookProfile: '',
            instagramProfile: '',
            twitterProfile: '',
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

                <Grid container style={{paddingTop: '4rem'}}>
                    <Grid item lg={4} style={{padding: '1rem', paddingBottom: '6rem'}}>
                        <Grid container>
                            <Grid item>
                                <Typography style={{height: '70px'}} gutterBottom color={'primary'} variant={'h3'}>
                                    {teamMembers[selected].role}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={'body2'} color={'primary'}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum in minus omnis saepe
                                    temporibus voluptate voluptates. Ab aliquam doloremque itaque unde. Aliquam
                                    assumenda enim
                                    error expedita explicabo iure libero maiores.
                                </Typography>
                            </Grid>
                            <Grid item alignItems={'center'} container style={{marginTop: '4rem'}}>
                                <Grid item>
                                    <IconButton style={{padding: '6px'}}>
                                        <TwitterIcon color={'primary'}/>
                                    </IconButton>
                                    <IconButton style={{padding: '6px'}}>
                                        <InstagramIcon color={'primary'}/>
                                    </IconButton>
                                    <IconButton style={{padding: '6px'}}>
                                        <FacebookIcon color={'primary'}/>
                                    </IconButton>
                                </Grid>
                                <Grid item style={{flexGrow: 1}}>

                                </Grid>
                                <Grid item style={{paddingRight: '1rem'}}>
                                    <IconButton disabled={selected === 0} onClick={() => {setSelected(selected - 1)}} style={{padding: '6px'}}>
                                        <ArrowBack color={'primary'}/>
                                    </IconButton>
                                    <IconButton disabled={selected === 3} onClick={() => {setSelected(selected + 1)}} style={{padding: '6px'}}>
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

                                                <Image priority component={motion.div} objectFit={'cover'} layout={'fill'}
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
                                                        display: 'flex',
                                                        alignItems: 'flex-end',
                                                        width: '100%', height: '100%',
                                                        background: 'linear-gradient(to bottom,transparent 65%,rgba(0,0,0,.8))',
                                                    }}>
                                                    {member.name}
                                                </Box>
                                            </Box>
                                        </Grid>
                                    )
                                })
                            }
                        </AnimateSharedLayout>

                    </Grid>

                </Grid>

            </Grid>
        </Container>

    );
};

export default Team;
