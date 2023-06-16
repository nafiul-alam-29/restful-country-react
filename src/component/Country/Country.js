import React, { useEffect, useState } from 'react';
import Single from '../Single/Single';
import './Country.css';

const Country = () => {
    const [countires, setCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
        
    },[])
    return (
        <div >
            <h1>Un Recognize Country In The World: {countires.length}</h1>
           <div className='country-container'>
           {
                countires.map(country => <Single 
                    country = {country}
                    key = {country.cca3}
                    >
                    </Single>)
            
            }
           </div>
            
        </div>
    );
};

export default Country;