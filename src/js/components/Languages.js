import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "1200px",
        margin: "0 auto",
    },
    paper: {
        textAlign: 'left',
        color: theme.palette.text.secondary,
        MinHeight: "400px",
        background: "#f6f6f6",
        padding: "60px 45px",
    },
    h2: {
        fontSize: "30px",
        color: "#356277",
    },
    p: {
        lineHeight: "30px",
        color: "#666"
    },
    title: {
        fontSize: "50px",
        color: "#356277",
    },
}));

function Languages() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={0} alignItems="baseline" justify="center">
                <Grid item xs={12} sm={6} md={4} style={{ padding: 10 }} >
                    <h2 className={classes.h2}>Språkkunskaper</h2>
                    <p className={classes.p}><strong>Spanska</strong>, modersmål, talar samt skriver mycket bra.</p>
                    <p className={classes.p}><strong>Svenska</strong>, talar samt skriver mycket bra.</p>
                    <p className={classes.p}><strong>Engelska</strong>, talar samt skriver bra, Teknisk engelska mycket bra</p>
                </Grid>
                <Grid item xs={12} sm={6} md={4} style={{ padding: 10 }}>
                    <h2 className={classes.h2}>Körkort:</h2>
                    <p className={classes.p}><strong>Innehar</strong>: AM + B</p>
                </Grid>
                <Grid item xs={12} sm={6} md={4} style={{ padding: 10 }}>
                    <h2 className={classes.h2}>Referenser</h2>
                    <p className={classes.p}>Lämnas på förfrågan.</p>
                </Grid>
            </Grid>
        </div>
    )
}

export default Languages
