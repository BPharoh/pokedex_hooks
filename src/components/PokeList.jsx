import React, { useState, useEffect } from 'react';
import classes from './PokeList.module.css';
import Card from './Card';
import axios from 'axios';

const PokeList = () => {  
    const [ data, setData ] = useState([]);
    const [ isLoading, setIsloading ] = useState(false);

    useEffect(() => {
        setIsloading(true);
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
        .then(res => {
            const fetches = res.data.results.map(p => {
                return axios.get(p.url).then(res=>res.data);
            });

            Promise.all(fetches).then((res) => {
            setData(res);
            console.log(res);
            setIsloading(false);
            });
        });
    }, []);

    if (isLoading) {
        return <p> Loading......</p>
    }

        return ( 
        <div className={classes.pokelist}>{data.map((card) => (
        <Card 
        key={card.name} 
        name={card.name} 
        image={card.sprites.other["official-artwork"].front_default} alt={card.name}
        type={card.type}
        />

        ))}
        </div>
        );       
    }  

export default PokeList;