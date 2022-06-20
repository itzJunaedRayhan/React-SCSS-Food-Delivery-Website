import React from 'react';
import Logo from '../images/grover_logo.svg';

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className="footer-wrapper">
                <div className="footer-left">
                    <div>
                        <img src={Logo} alt="" />
                        <p>Fast delivery, which is active all over the world, serves with many transportation vehicles.</p>
                    </div>
                    <ul>
                        <li className="title">Company</li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">All Product</a></li>
                        <li><a href="#">Locations</a></li>
                    </ul>
                </div>
                <div className='footer-right'>
                    <ul>
                        <li className="title">Services</li>
                        <li><a href="#">Order Tracking</a></li>
                        <li><a href="#">Wish List</a></li>
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>

                    <div>
                        <ul>
                            <li className='title last-title'>Get In Touch</li>
                        </ul>
                        <p>Subscribe to our weekly Newsletter and receive updates via email.</p>
                    </div>
                </div>
            </div>
            <div className='copyright'>
                <p>All Right Reserved &copy; <a href="https://www.facebook.com/JKwebGenesis" target="_blank">WEB Genesis</a> 2022</p>
            </div>
        </div>
    );
};

export default Footer;