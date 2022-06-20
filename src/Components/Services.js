import React from 'react';
import shipping from '../images/free_shipping_icon.svg';
import MoneyBack from '../images/money_back_guarantee_icon.svg';
import checkout from '../images/secure_checkout_icon.svg';

const Services = () => {
    return (
        <div className='service-section'>
            <div className='service-wrapper'>
                <div className='service-title'>
                    <h4>What We Serve</h4>
                    <h2>fruit and vegetable delivered to your home</h2>
                </div>
                <div className='service-content'>
                    <div className='card'>
                        <img src={shipping} alt="" />
                        <div className='card-text'>
                            <h3>Free Shipping</h3>
                            <p>Enjoy Order in a hand using the fresness of groceries</p>
                        </div>
                        <span></span>
                    </div>

                    <div className='card'>
                        <img src={MoneyBack} alt="" />
                        <div className='card-text'>
                            <h3>15 Days Return</h3>
                            <p>Order in a handy way using the freshness of the groceries.</p>
                        </div>
                    </div>

                    <div className="card">
                        <img src={checkout} alt="" />
                        <div className='card-text'>
                            <h3>Secure Checkout</h3>
                            <p>If you get rotten items - return immediately to us.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;