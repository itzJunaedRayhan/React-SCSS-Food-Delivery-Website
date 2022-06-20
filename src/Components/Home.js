import React from 'react';
import CTA from './CTA';
import FeatureOne from './FeatureOne';
import FeatureTwo from './FeatureTwo';
import Header from './Header';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <FeatureOne/>
            <FeatureTwo/>
            <CTA/>
        </div>
    );
};

export default Home;