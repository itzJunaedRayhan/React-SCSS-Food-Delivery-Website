import React, { useState } from 'react';
import Logo from '../images/grover_logo.svg'
import searchIcon from '../images/icons/search-icon.png';
import cartIcon from '../images/icons/cart-icon.png';
import { BsFillGridFill } from "react-icons/bs";

const Navigation = () => {
    const [state, setstate] = useState(false);
    console.log(state)
    return (
        <div className='nav-wrapper'>
            <nav className='navigation-items'>
                <img className='logo' src={Logo} alt="" />
                <ul>
                    <li><a className='active' href="#">Home</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Shop</a></li>
                </ul>
                <div className='searchbar'>
                    <input type="text" placeholder='Search' />
                    <img className='search-icon' src={searchIcon} alt="" />
                    <img className='cart-icon' src={cartIcon} alt="" />
                    <span>2</span>
                </div>
            </nav>


            
            <div className='mobile-navigation'>
                <img className='logo' src={Logo} alt="" />
                <div className='toggle-icon' ><BsFillGridFill onClick={() => state === true ? setstate(false) : setstate(true)} /></div>
            </div>
            <div className={`mobile-menu-items ${state === true ? 'displayNavigation' : 'hideNavigation'}`}>
                <ul>
                    <li><a className='active' href="#">Home</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Shop</a></li>
                </ul>
                <div className='searchbar'>
                    <input type="text" placeholder='Search' />
                    <img className='search-icon' src={searchIcon} alt="" />
                    <img className='cart-icon' src={cartIcon} alt="" />
                    <span>2</span>
                </div>
            </div>
        </div>
    );
};

export default Navigation;