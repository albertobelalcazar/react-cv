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
        background: "#f6f6f6",
        padding: "60px 45px",
    },
}));

const Skills = () => {
    const classes = useStyles();
    return (
        <div className="skills">
            <div className={classes.root}>
                <Grid container spacing={0} alignItems="center" justify="center">
                    <Grid item xs={12} sm={6} md={4} style={{ padding: 10 }}>
                        <Paper className={classes.paper}>
                            <FontAwesomeIcon icon={faHtml5} style={{ color: "#356277", fontSize: 80 }} />
                            {/* <DevicesOutlined style={{ color: "#356277", fontSize: 80 }} /> */}
                            <h2>HTML 5</h2>
                            <p>Det är vitigt att bygga en bra struktur med alla elementer på sajten</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} style={{ padding: 10 }}>
                        <Paper className={classes.paper}>
                            <FontAwesomeIcon icon={faCss3} style={{ color: "#356277", fontSize: 80 }} />
                            {/* <FontAwesomeIcon icon="coffee" /> */}
                            <h2>CSS3</h2>
                            <p>Jag älskar att bygga moderna, bygga och responsiva sajter, SASS, CSS är en viktigt del i min vardag</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} style={{ padding: 10 }}>
                        <Paper className={classes.paper}>
                            <FontAwesomeIcon icon={faJs} style={{ color: "#356277", fontSize: 80 }} />
                            <h2>Javascript</h2>
                            <p>9 + "1" = "91" eller 9 - "1" = 8 Ja, jag vet så är det med javascript :) och ändå jag gillar utveckla med det</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} style={{ padding: 10 }}>
                        <Paper className={classes.paper}>
                            <FontAwesomeIcon icon={faReact} style={{ color: "#356277", fontSize: 80 }} />
                            <h2>React</h2>
                            <p>Det här CV:et är skapat i react</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} style={{ padding: 10 }}>
                        <Paper className={classes.paper}>
                            <FontAwesomeIcon icon={faWindows} style={{ color: "#356277", fontSize: 80 }} />
                            <h2>.NET</h2>
                            <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} style={{ padding: 10 }}>
                        <Paper className={classes.paper}>
                            <FontAwesomeIcon icon={faConnectdevelop} style={{ color: "#356277", fontSize: 80 }} />
                            <h2>CMS</h2>
                            <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                        </Paper>
                    </Grid>

                </Grid>
            </div>
        </div>
    );
};

export default Skills;