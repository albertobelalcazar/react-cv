import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slider2 from './../../assets/portfolio-2.jpg';
import Svedea from './../../assets/svedea.png';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
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
    h1: {
        fontSize: "50px",
        margin: "50px 0 3px 0",
        padding: "20px 0",
        color: "#356277",
        textAlign: "left",
    },
    p: {
        lineHeight: "30px",
        textAlign: "left",
    },
    title: {
        fontSize: "50px",
        color: "#333",
    },
}));


const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 3 },
};



const items = [
    <div className="item"><img src={Svedea} alt="" /></div>,
    <div className="item"><img src={Slider2} alt="" /></div>,
    <div className="item"><img src={Slider2} alt="" /></div>,
    <div className="item"><img src={Slider2} alt="" /></div>,
    <div className="item"><img src={Slider2} alt="" /></div>,
    <div className="item"><img src={Slider2} alt="" /></div>,
];

const Carousell = () => {
    const classes = useStyles();
    return (
        <div className="carousell-container" id="portfolj">
            <div className="custom-carousell">
                <h1 className={classes.h1}>Min Portfölj</h1>
                <p className={classes.p}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                <br />
                <AliceCarousel
                    mouseTracking
                    items={items}
                    responsive={responsive}
                    disableButtonsControls={true}>
                </AliceCarousel>
            </div>
        </div>
    );
};

export default Carousell;
