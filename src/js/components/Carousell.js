import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slider2 from './../../assets/portfolio-2.jpg';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="item"><img src={Slider2} alt="" /></div>,
    <div className="item"><img src={Slider2} alt="" /></div>,
    <div className="item"><img src={Slider2} alt="" /></div>,
    <div className="item"><img src={Slider2} alt="" /></div>,
    <div className="item"><img src={Slider2} alt="" /></div>,
    <div className="item"><img src={Slider2} alt="" /></div>,
];

const Carousell = () => {
    return (
        <div className="custom-carousell">
            <h1>Min Portfölj</h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
            <br />
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                disableButtonsControls={true}>
            </AliceCarousel>
        </div>
    );
};

export default Carousell;
