// 28.5
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

//  28.6
import React, { useContext } from 'react';
import logo from '../../images/logo.png'
import './Header.css'
import { UserContext } from '../../App';

const Header = () => {
    const user = useContext(UserContext);
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
                    <li><a href="#">{user}</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;

//  28.7
import React, { useContext, useState, useRef, useEffect } from 'react';
import logo from '../../images/logo.png'
import './Header.css'
import { UserContext } from '../../App';


const usePrevious = value =>{
    const prev = useRef();
    useEffect( () => {
        console.log(value);
        prev.current = value;
    }, [value])
    return prev.current;
}

const Header = () => {
    const user = useContext(UserContext);
    const[count33, setCount33] = useState(0);

    const previous = usePrevious(count33);

    return (
        <div className="header">
            <div className="brand-logo">
                {/* <img src={logo} alt=""/> */}
                <h1>Count: {count33} previous: {previous}</h1>
                <button onClick={() => setCount33(count33 - 1)}>-</button>
                <button onClick={() => setCount33(count33 + 1)}>+</button>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="/shop">shop</a></li>
                    <li><a href="/review">review orders</a></li>
                    <li><a href="/manage">manage inventory</a></li>
                    {/* <li><a href="/orders">orders</a></li> */}
                    <li><a href="#">{user}</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;

//  28.8

//  28.9
