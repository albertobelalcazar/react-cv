import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

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
    h2: {
        fontSize: "50px",
        padding: "20px 0",
        color: "rgb(53, 98, 119)",
    },
    p: {
        lineHeight: "30px",
    },
    title: {
        fontSize: "50px",
        color: "#333",
    },
}));


const FunFacts = () => {
    const classes = useStyles();
    return (
        <div className="funfacts-container">
            <div className="funfacts">
                <h2 className={classes.title}>Underhållande fakta</h2>
                <Grid container spacing={0} alignItems="center" justify="center">
                    <Grid item xs={12} sm={6} md={4} style={{ padding: 10 }}>
                        <h2 className={classes.h2}>199+</h2>
                        <p className={classes.p}>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} style={{ padding: 10 }}>
                        <h2 className={classes.h2}>575</h2>
                        <p className={classes.p}>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} style={{ padding: 10 }}>
                        <h2 className={classes.h2}>77</h2>
                        <p className={classes.p}>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default FunFacts;