import React, { useState, useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';


const Pokesingle = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [ data, setData ] = useState([]);
    const [ isLoading, setIsloading ] = useState(false);

    useEffect(() => {
        setIsloading(true);
        axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokesingle}`)
        .then(res => {
            setData(res.data);
            console.log(res.data);
            setIsloading(false);
        });
    }, []);

    if (isLoading) {
        return <p> Loading......</p>
    }

        return ( 
            <div>
            <h2>{data.name}</h2>
            <img  src={data.sprites?.other.dream_world.front_default} alt={data.name}
            />
            <button onClick={()=> navigate(-1)}>Go back</button>
        </div>
        );       
    }  

export default Pokesingle;



