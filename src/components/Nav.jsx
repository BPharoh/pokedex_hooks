import React from 'react';
import classes from './Nav.module.css';
import {  NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='Pokelist' >Pokelist</NavLink></li>
                <li><NavLink to='about'>About</NavLink></li>
            </ul>          
        </nav>
    );
};

export default Nav;