import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Doge from '../../assets/doge.png';

import { FaPowerOff } from 'react-icons/fa'

import { Data } from './data';

import './styles.css';

const Navbar = () => {
    const navbar = useState(true);
    //const showNavbar = () => setNavbar(!navbar);
    return (
        <>
            <div className="navbar">
                <Link to="/" className="menu-bars">
                    <p>Doggo</p>
                    <FaPowerOff />
                </Link>
            </div>
            <nav className={navbar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items">
                    <Link to="#" className="menu-bars">
                        <img src={Doge} alt="Doggo" />
                    </Link>
                    <li className="navbar-toogle">

                        {Data.map((item, index: number) => {
                            return (
                                <Link
                                    to={item.path}
                                    id={item.id}
                                    key={item.id}
                                >
                                    <li className={item.cName}>
                                        <span>{item.title}</span>
                                    </li>
                                </Link>
                            );
                        })}
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;
