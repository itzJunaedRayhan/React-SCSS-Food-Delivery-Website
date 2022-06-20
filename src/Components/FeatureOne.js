import React from 'react';
import FeatureOneImg from '../images/feat.png';

const FeatureOne = () => {
    return (
        <div className='featureOne-section'>
            <div className='feature-wrapper'>
                <img src={FeatureOneImg} alt="Feature One" />
                <div className='feature-content'>
                    <h4>Why Chose us</h4>
                    <h2>Find Favorites and Discover New Ones</h2>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus blanditiis praesen voluptatum deleniti.</p>
                    <button>Explore Now</button>
                </div>
            </div>
        </div>
    );
};

export default FeatureOne;