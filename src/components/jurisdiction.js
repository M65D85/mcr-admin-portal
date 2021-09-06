import React from 'react';

//Styles
import '../App.css';

//Components
import Countries from '../components/countries';

//data
import CountryList from '../models/countries-list';

function Jurisidctions() {
    const countries = CountryList;

    return (
        <div>
            <div>
                <p>Select Jurisdition</p>
                <div>
                    <Countries countries={countries}/>
                </div>
            </div>
        </div> 
    )
}


export default Jurisidctions;