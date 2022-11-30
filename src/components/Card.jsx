import React from 'react';
import { Link } from  'react-router-dom';

import classes from './Card.module.css';


const Card = ({ image, name, type }) => {
    return (
        <div className={classes.cardContainer}>
            <img src={image} alt={name} />
            <h2>{`${name.charAt(0).toUpperCase() + name.slice(1)}`}</h2> 
            <p>{type}</p>
            <Link to={`${name}`}>See more</Link>
        </div>
    );
};

export default Card;