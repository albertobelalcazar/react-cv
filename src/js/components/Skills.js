import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { PaletteOutlined, SettingsOutlined, AccessAlarm, DevicesOutlined } from '@material-ui/icons';
import { pink } from '@material-ui/core/colors';



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
                            <DevicesOutlined style={{ color: pink[500], fontSize: 80 }} />
                            <h2>HTML 5</h2>
                            <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} style={{ padding: 10 }}>
                        <Paper className={classes.paper}>
                            <PaletteOutlined style={{ color: pink[500], fontSize: 80 }} />
                            <h2>CSS3</h2>
                            <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} style={{ padding: 10 }}>
                        <Paper className={classes.paper}>
                            <SettingsOutlined style={{ color: pink[500], fontSize: 80 }} />
                            <h2>Javascript</h2>
                            <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} style={{ padding: 10 }}>
                        <Paper className={classes.paper}>
                            <DevicesOutlined style={{ color: pink[500], fontSize: 80 }} />
                            <h2>Business Stratagy</h2>
                            <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} style={{ padding: 10 }}>
                        <Paper className={classes.paper}>
                            <DevicesOutlined style={{ color: pink[500], fontSize: 80 }} />
                            <h2>Business Stratagy</h2>
                            <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} style={{ padding: 10 }}>
                        <Paper className={classes.paper}>
                            <DevicesOutlined style={{ color: pink[500], fontSize: 80 }} />
                            <h2>Business Stratagy</h2>
                            <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                        </Paper>
                    </Grid>

                </Grid>
            </div>
        </div>
    );
};

export default Skills;