import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { Hidden } from '@material-ui/core';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import WorkIcon from '@material-ui/icons/Work';
import BusinessIcon from '@material-ui/icons/Business';
import PhonelinkIcon from '@material-ui/icons/Phonelink';
import logo from '../../assets/logo.png';

import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';




const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: "#1D353E",
    },
    burgerBtn: {
        marginRight: theme.spacing(2),
        color: "#1d353e",
    },
    rightMenu: {
        color: "#fff",
        justifyContent: "space-around",
        marginLeft: 20,
    },
    title: {
        flexGrow: 1,
    },
    appb: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
            background: "#000"
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));


const menulinks = {
    startsida: {
        URL: "/",
        behavior: 'smooth',
        block: 'start'
    },
    aboutme: {
        URL: "/aboutme",
        behavior: 'smooth',
        block: 'start'
    },
    skills: {
        URL: "/#experience",
        behavior: 'smooth',
        block: 'start'
    },
    experience: {
        URL: "/#studies",
        behavior: 'smooth',
        block: 'start'
    },
    portfolj: {
        URL: "/#portfolj",
        behavior: 'smooth',
        block: 'start'
    },
    contact: {
        URL: "/#contact",
        behavior: 'smooth',
        block: 'start'
    }
}



function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};
const Header = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const classes = useStyles();
    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                <ListItem button>
                    <ListItemIcon><InboxIcon /></ListItemIcon>
                    <ListItemText>Startsida</ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><InboxIcon /></ListItemIcon>
                    <ListItemText>Om mig</ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><InboxIcon /></ListItemIcon>
                    <ListItemText>Utbildning</ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><InboxIcon /></ListItemIcon>
                    <ListItemText>Erfarenhet</ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><InboxIcon /></ListItemIcon>
                    <ListItemText>Portofölj</ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><InboxIcon /></ListItemIcon>
                    <ListItemText>Kontakt</ListItemText>
                </ListItem>
            </List>
            <Divider />
        </div>
    );
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <React.Fragment>
            <HideOnScroll {...props}>
                <AppBar className={classes.root}>
                    <div className="menyNav">
                        <Toolbar>
                            <Hidden mdUp>
                                <IconButton edge="start" className={classes.burgerBtn} color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
                                    <MenuIcon />
                                </IconButton>
                            </Hidden>
                            <Typography variant="h6" className={classes.title}><img src={logo} alt="Alberto Belalcázar" /></Typography>
                            <Hidden smDown>
                                <Button style={{ display: 'flex', alignItems: 'center' }} href={menulinks.startsida.URL} className={classes.rightMenu}><HomeIcon style={{ fontSize: 18, margin: '0 5px 2px 5px' }} /> Startsida</Button>
                                <Button href={menulinks.aboutme.URL} className={classes.rightMenu}><FaceIcon style={{ fontSize: 18, margin: '0 5px 2px 5px' }} />Om mig</Button>
                                <Button href={menulinks.skills.URL} className={classes.rightMenu}><CastForEducationIcon style={{ fontSize: 18, margin: '0 5px 2px 5px' }} />Utbildning</Button>
                                <Button href={menulinks.experience.URL} className={classes.rightMenu}><BusinessIcon style={{ fontSize: 18, margin: '0 5px 2px 5px' }} />Erfarenhet</Button>
                                <Button href={menulinks.portfolj.URL} className={classes.rightMenu}><WorkIcon style={{ fontSize: 18, margin: '0 5px 2px 5px' }} />Portofölj</Button>
                                <Button href={menulinks.contact.URL} className={classes.rightMenu}><PhonelinkIcon style={{ fontSize: 18, margin: '0 5px 2px 5px' }} />Kontakt</Button>
                            </Hidden>


                        </Toolbar>
                    </div>
                </AppBar>
            </HideOnScroll>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsUp implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </React.Fragment>
    );
};

export default Header;

