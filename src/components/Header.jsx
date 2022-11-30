import React from 'react';
import Nav from './Nav';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className={classes.header}>
            <Link to="/">
                 <h1>PokeApi</h1> 
            </Link>
            <Nav />
        </header>
    );
};

export default Header;