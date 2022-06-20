import React from 'react';
import FeatureTwoImg from '../images/feat2.png';

const FeatureTwo = () => {
    return (
        <div className='featureTwo-section'>
            <div className='feature-wrapper'>
                <div className='feature-content'>
                    <h4>Home Delivery</h4>
                    <h2>Sit at Home We Will Take Care Your Order</h2>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos </p>
                    <button>Explore Now</button>
                </div>
                <img src={FeatureTwoImg} alt="Feature One" />
            </div>
        </div>
    );
};

export default FeatureTwo;