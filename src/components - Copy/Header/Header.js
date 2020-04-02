import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="brand-logo">
                <img src={logo} alt=""/>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="/shop">shop</a></li>
                    <li><a href="/review">review orders</a></li>
                    <li><a href="/manage">manage inventory</a></li>
                    {/* <li><a href="/orders">orders</a></li> */}
                </ul>
            </nav>
        </div>
    );
};

export default Header;