import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faCss3, faJs, faReact, faWindows, faConnectdevelop } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        alignContent: "center",
    },
    paper: {
        textAlign: 'left',
        color: theme.palette.text.secondary,
        MinHeight: "400px",
        background: "transparent",
        padding: "30px 30px",
        boxShadow: "0 0 30px 0 #3e3d3d26",
        '&:hover': {
            '& h2': {
                // color: "#F50057",
                // transition: ".4s"
            },
            '& svg.svg-inline--fa.fa-html5': {
                color: "#DD4B25 !important",
                transition: ".4s",
            },
            '& svg.svg-inline--fa.fa-css3': {
                color: "#224CDD !important",
                transition: ".4s",
            },
            '& svg.svg-inline--fa.fa-js': {
                color: "#CFB430 !important",
                transition: ".4s",
            },
            '& svg.svg-inline--fa.fa-react': {
                color: "#48CEF7 !important",
                transition: ".4s",
            },
            '& svg.svg-inline--fa.fa-windows': {
                color: "#6D409A !important",
                transition: ".4s",
            },
            '& svg.svg-inline--fa.fa-connectdevelop': {
                color: "#DD4B25 !important",
                transition: ".4s",
            },

        },

    },
}));

const Skills = () => {
    const classes = useStyles();
    return (
        <div className="skills">
            <div className={classes.root}>
                <Grid container spacing={0} alignItems="center" justify="center">
                    <Grid item xs={12} sm={6} md={4} style={{ padding: 10 }}>
                        <Paper className={classes.paper} >
                            <FontAwesomeIcon icon={faHtml5} style={{ color: "#356277", fontSize: 80 }} />
                            {/* <DevicesOutlined style={{ color: "#356277", fontSize: 80 }} /> */}
                            <h2>HTML 5</h2>
                            <p>Det är vitigt att bygga en bra struktur med alla elementer på sajten. Ja gillar att använda det senaste med HTML5</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} style={{ padding: 10 }}>
                        <Paper className={classes.paper} elevation={0}>
                            <FontAwesomeIcon icon={faCss3} style={{ color: "#356277", fontSize: 80 }} />
                            {/* <FontAwesomeIcon icon="coffee" /> */}
                            <h2>CSS3</h2>
                            <p>Jag älskar att bygga moderna, bygga och responsiva sajter, SASS, CSS är en viktigt del i min vardag</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} style={{ padding: 10 }}>
                        <Paper className={classes.paper} elevation={0}>
                            <FontAwesomeIcon icon={faJs} style={{ color: "#356277", fontSize: 80 }} />
                            <h2>Javascript</h2>
                            <p>9 + "1" = "91" eller 9 - "1" = 8 Ja, jag vet så är det med javascript :) och ändå jag gillar utveckla med det</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} style={{ padding: 10 }}>
                        <Paper className={classes.paper} elevation={0}>
                            <FontAwesomeIcon icon={faReact} style={{ color: "#356277", fontSize: 80 }} />
                            <h2>React</h2>
                            <p>Det här CV:et är skapat bland annat med React, Material-UI, och flera verktig som jag använder varje dag</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} style={{ padding: 10 }}>
                        <Paper className={classes.paper} elevation={0}>
                            <FontAwesomeIcon icon={faWindows} style={{ color: "#356277", fontSize: 80 }} />
                            <h2>.NET</h2>
                            <p>Blazor!  - Microsoft vill inte stana och vänta på tekniken, inte jag helller! därför jag jar jobbat med Blazor senaste året</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} style={{ padding: 10 }}>
                        <Paper className={classes.paper} elevation={0}>
                            <FontAwesomeIcon icon={faConnectdevelop} style={{ color: "#356277", fontSize: 80 }} />
                            <h2>CMS</h2>
                            <p>Jag har jobbat med olika CMS system som till exempel, Wordpress, Joomla, Drupal, och flera ehandels plataformar. </p>
                        </Paper>
                    </Grid>

                </Grid>
            </div>
        </div >
    );
};

export default Skills;