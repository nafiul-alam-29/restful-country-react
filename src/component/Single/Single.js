import React from 'react';
import './Single.css';

const Single = (props) => {
    const {name,population,area,flags} = props.country
    
    return (
        <div className='country'>
            <h3>Country Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p> Population: {population}</p>
            <p> Population: {area}</p>
            
            
        </div>
    );
};

export default Single;