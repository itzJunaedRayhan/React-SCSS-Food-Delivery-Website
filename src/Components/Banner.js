import React from 'react';
import strawberry from '../images/strawberry.svg';
import BannerImg from '../images/hero_image.png';
import ButtonPlay from '../images/button-play.svg';

const Banner = () => {
    return (
        <div className='banner-section'>
            <div className='banner-wrapper'>
                <div className='banner-content'>
                    <span className='SpanBtn'>More Than Faster <img src={strawberry} alt="" /></span>
                    <h1>Groceries delivered in as little as <span>2 hours</span></h1>
                    <p>Grocen atssures fresh grocery every morning to your family without getting out in this pandemic.</p>
                    <div className="buttonGroup">
                        <button className='Btn primary-btn'>Order Now</button>
                        <button className='Btn secondary-btn'> <img src={ButtonPlay} alt="ButtonPlay" /> Order Process</button>
                    </div>
                </div>
                <img className='banner-img' src={BannerImg} alt="Banner" />
            </div>
        </div>
    );
};

export default Banner; <h2>Banner</h2>