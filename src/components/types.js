import React, {useState} from 'react';
import axios from 'axios';

//Components
import TypesData from './types-data';

//data
//import TypesList from '../models/types-list';

function Types(props) {
    //const typesList = TypesList;
    const [entities, setEntities] = useState([]);
    const [trusts, setTrusts] = useState([]);
    const [funds, setFunds] = useState([]);

    const getData = () => {
        axios.get(`http://localhost:5000/api/v1/jurisdictions/${props.selectedCountry}/Entities`).then((entities) => {
            axios.get(`http://localhost:5000/api/v1/jurisdictions/${props.selectedCountry}/Trusts`).then((trusts) => {
                axios.get(`http://localhost:5000/api/v1/jurisdictions/${props.selectedCountry}/Funds`).then((funds) => {
                    setTrusts(trusts.data);
                    setEntities(entities.data);
                    setFunds(funds.data);
                })
            })
        });
    }

    entities.forEach((entity) => {
        console.log(entity);
    });

    trusts.forEach((trust) => {
        console.log(trust);
    });

    funds.forEach((fund) => {
        console.log(fund);
    });
    
    return (
        <div className="type">
            <div className="type-section">
                <h1>Types</h1>
                <h3>Entities</h3>
                <TypesData funds={funds} entities={entities} trusts={trusts}/>
            </div>
            <button onClick={getData}>Get</button>

        </div>
    );
}

export default Types;