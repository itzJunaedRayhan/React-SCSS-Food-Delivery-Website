import React from 'react';
import mobileImg from '../images/phone_app_image.svg';
import appStoreImg from '../images/apple_store.svg';
import playStore from '../images/play_store.svg';

const CTA = () => {
    return (
        <div className='cta-section'>
            <div className='cta-wrapper'>
                <img className="cta-mobile" src={mobileImg} alt="mobile" />
                <div className='cta-content'>
                    <h4>Download Our App</h4>
                    <h2>Get the Groceries app order more easily.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                    <div className='button-group'>
                        <button><img src={appStoreImg} alt="app" /> App Store</button>
                        <button><img src={playStore} alt="play" /> Play Store</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTA;