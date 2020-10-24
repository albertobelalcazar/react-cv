import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: "#163643",
    },
    burgerBtn: {
        marginRight: theme.spacing(2),
        color: "white",
    },
    rightMenu: {
        color: "white",
        justifyContent: "space-around",
        marginLeft: 20,
    },
    title: {
        flexGrow: 1,
    },
    appb: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    }
}));

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
    const classes = useStyles();

    return (
        <React.Fragment>
            <HideOnScroll {...props}>
                <AppBar className={classes.root} >
                    <Toolbar>
                        <Hidden mdUp>
                            <IconButton edge="start" className={classes.burgerBtn} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                        </Hidden>
                        <Typography variant="h6" className={classes.title}>Logo</Typography>
                        <Hidden smDown>
                            <Button className={classes.rightMenu}>Startsida</Button>
                            <Button className={classes.rightMenu}>Om mig</Button>
                            <Button className={classes.rightMenu}>Kompetens</Button>
                            <Button className={classes.rightMenu}>Erfarenhet</Button>
                            <Button className={classes.rightMenu}>Portofölj</Button>
                            <Button className={classes.rightMenu}>Kontakt</Button>
                        </Hidden>


                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </React.Fragment>
    );
};

export default Header;

