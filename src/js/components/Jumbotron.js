import React from 'react';

const Jumbotron = () => {
    return (
        <div className="jumbotron">
            <div className="jumbotron-cover-image"></div>
            <div className="jumbotron-cover-overlay"></div>
            <div className="jumbotron-cover-legend" id="back-to-top-anchor">
                <div className="jumbotron__legend--name">
                    Hej, Alberto här!
                </div>
                <div className="jumbotron__legend--experience">
                    Webb & Front-End utvecklare
                </div>
                <div className="jumbotron__legend--legacy">
                    med <span style={{ color: "#f50057" }}>&#x2764;</span> för tekniken
                </div>

            </div>
            {/* <div className="jumbotron-cover-legend--two">Wellcome to my World</div> */}
        </div>
    );
};

export default Jumbotron;