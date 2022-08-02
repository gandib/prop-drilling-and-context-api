import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='header-nav'>
            <Link to='/grandpa'>Grandpa</Link>
            <Link to='/father'>Father</Link>
            <Link to='/uncle'>Uncle</Link>
        </nav>
    );
};

export default Header;