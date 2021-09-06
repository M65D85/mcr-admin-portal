import React, { useState } from 'react';

//Styles
import '../App.css';

//Components
import Types from './types';

function Countries(props) {
    const [selectedCountry, setSelectedCountry] = useState();

    let renderCountries = props.countries ? (
        <form>
            <label>Choose </label>
            <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
                {props.countries.map((country) => <option key={country} value={country}>{country}</option>)}
            </select>
        </form>
    ) : <p>Loading...</p>    
    
    return (
        <div>
            {renderCountries}
            <div>
                {selectedCountry}
            </div>
            <Types selectedCountry={selectedCountry}/>
        </div>
    );
}

export default Countries;


