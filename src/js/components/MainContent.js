import React from 'react';
import Header from './Header';
import Jumbotron from './Jumbotron';
import Skills from './Skills';
import Carousell from './Carousell';
import Boxes from './Boxes';
import Footer from './Footer';

const MainContent = () => {
    return (
        <div className="main-content">
            <Header />
            <Jumbotron />
            <Skills />
            <Carousell />
            <Boxes />
            <Footer />
        </div>
    );
};

export default MainContent;