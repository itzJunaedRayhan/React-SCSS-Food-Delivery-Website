import React from 'react';
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
        </div>
    );
};

export default Home;