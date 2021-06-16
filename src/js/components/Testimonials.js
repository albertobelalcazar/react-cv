import React from 'react';
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
    testimonialLegend: {
        textAlign: 'justify',

    },
    testimonialUser: {
        textAlign: 'right !important',
        fontStyle: 'italic',
    }

}));




const Testimonials = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 1 },
        1024: { items: 1 },
    };
    const classes = useStyles();
    const items = [
        <div className="item">
            <p className={classes.testimonialLegend}>Alberto is a great guy with a positive attitude, a awesome person to have in the team. Very dedicated and professional in his work (and hobby) and will learn what needs to be learnt to get the job done. He is eager to adopt new technologies and environments and deliver on time. He delivers both in code as a great person to the team.</p>
            <p className={classes.testimonialUser}>Oscar Holmberg / Webbutvecklare</p>
        </div>,
        <div className="item">
            <p className={classes.testimonialLegend}>Working with Alberto was wonderful. He is ambitious, professional, curious and always gets the job done, even though the deadlines was very short. He has also proven to have great teaching skills and his willingness to share it everyone else has been greatly appreciated. A very friendly and lovable colleague to have around.</p>
            <p className={classes.testimonialUser}>Marcus Liljehammar Web Developer & Digital Designer på Granath</p>
        </div>,
        <div className="item">
            <p className={classes.testimonialLegend}>Alberto is such a fast learner, adapts fast and give a 100% from day one. Always a big smile and positive attitude. Alberto has an amazing eye for quality assurance and had several ideas of new interactive ad formats.</p>
            <p className={classes.testimonialUser}>Simon LindahlMedia Production Manager at Game Lounge</p>
        </div>,
    ];

    return (
        <div className="testimonials" id="testimonials">
            <div className="custom-carousell">
                <h1 className={classes.h1}>Rekommendationer</h1>
                {/* <p className={classes.p}>Här är några exempel på arbeter som jag har utfört: </p> */}
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

export default Testimonials;




