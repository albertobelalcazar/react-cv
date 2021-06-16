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

const mySkills = [
    {
        id: 1,
        icon: faHtml5,
        title: "HTML5",
        description: "Det är vitigt att bygga en bra struktur med alla elementer på sajten. Ja gillar att använda det senaste med HTML5",
    },
    {
        id: 2,
        icon: faCss3,
        title: "CSS3",
        description: "Jag älskar att bygga moderna, bygga och responsiva sajter, SASS, CSS är en viktigt del i min vardag",
    },
    {
        id: 3,
        icon: faJs,
        title: "Javascript",
        description: '9 + "1" = "91" eller 9 - "1" = 8 Ja, jag vet så är det med javascript :) och ändå jag gillar utveckla med det',
    },
    {
        id: 4,
        icon: faReact,
        title: "React",
        description: 'Det här CV:et är skapat bland annat med React, Material-UI, och flera verktig som jag använder varje dag',
    },
    {
        id: 5,
        icon: faWindows,
        title: ".NET",
        description: 'Blazor!  - Microsoft vill inte stana och vänta på tekniken, inte jag helller! därför jag jar jobbat med Blazor senaste året',
    },
    {
        id: 6,
        icon: faConnectdevelop,
        title: "CMS",
        description: 'Jag har jobbat med olika CMS system som till exempel, Wordpress, Joomla, Drupal, och flera ehandels plataformar.',
    },

]



const Skills = () => {
    const classes = useStyles();
    return (
        <div className="skills">
            <div className={classes.root}>
                <Grid container spacing={0} alignItems="center" justify="center">
                    {mySkills.map((_, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4} style={{ padding: 10 }}>
                            <Paper className={classes.paper} >
                                <FontAwesomeIcon icon={mySkills[index].icon} style={{ color: "#356277", fontSize: 80 }} />
                                {/* <DevicesOutlined style={{ color: "#356277", fontSize: 80 }} /> */}
                                <h2>{mySkills[index].title}</h2>
                                <p>{mySkills[index].description}</p>
                            </Paper>
                        </Grid>
                    ))}

                </Grid>
            </div>
        </div >
    );
};

export default Skills;