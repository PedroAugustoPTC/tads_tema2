import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Data } from './data';

import './styles.css';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const showNavbar = () => setNavbar(!navbar);

    return (
        <>
            <nav className={navbar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showNavbar}>
                    <li className='navbar-toggle'>
                            adskfsadfkfasdkfsdkaç
                    </li>
                    {Data.map((item, index: number) => {
                        return (
                            <li key={index} className={item.cName}>
                                    {item.icon}
                                    <span>{item.title}</span>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Navbar;
