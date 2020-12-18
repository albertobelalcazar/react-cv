import React from 'react';
import Header from './Header';
import Jumbotron from './Jumbotron';
import Skills from './Skills';
import Carousell from './Carousell';
import FunFacts from './FunFacts';
import Footer from './Footer';
import ExperienceStudies from './ExperienceStudies';

const MainContent = () => {
    return (
        <div className="main-content">
            <Header />
            <Jumbotron />
            <Skills />
            <ExperienceStudies />
            <Carousell />
            <FunFacts />
            {/* <Boxes /> */}

            <Footer />
        </div>
    );
};

export default MainContent;