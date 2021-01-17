import React from 'react';

const Jumbotron = () => {
    return (
        <div className="jumbotron">
            <div className="jumbotron-cover-image"></div>
            <div className="jumbotron-cover-overlay"></div>
            <div className="jumbotron-cover-legend--one" id="back-to-top-anchor">
                <div className="jumbotron__title-legacy">
                    {/* Hej <span style={{ color: "&#x1F44B" }}>&#x1F44B;</span>,Alberto här!<br /> */}
                    Hej, Alberto här!
                </div>
                Front-End developer <br />
                <div className="jumbotron__legacy">
                    med <span style={{ color: "#f50057" }}>&#x2764;</span> för tekniken
                </div>

            </div>
            {/* <div className="jumbotron-cover-legend--two">Wellcome to my World</div> */}
        </div>
    );
};

export default Jumbotron;