import React from 'react';
import Header from './Header';
import Jumbotron from './Jumbotron';
import Skills from './Skills';
import Carousell from './Carousell';
import FunFacts from './FunFacts';
import Aboutme from './Aboutme';
import Footer from './Footer';
import ExperienceStudies from './ExperienceStudies';
import ScrollToTop from './ScrollToTop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const MainContent = () => {
    return (
        <div className="main-content">
            <Router>
                <Header />
                <Switch>
                    <Route path="/cv/aboutme">
                        <Jumbotron />
                        <Aboutme />
                        <Footer />

                    </Route>
                    <Route path="/cv">
                        <Jumbotron />
                        <Skills />
                        <ExperienceStudies />
                        <Carousell />
                        <FunFacts />
                        <Footer />
                    </Route>
                </Switch>
                <ScrollToTop />
            </Router>
        </div>
    );
};

export default MainContent;