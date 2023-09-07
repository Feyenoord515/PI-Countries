// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {filterByContinent, getAllCountries } from "../../redux/actions";

// export default function FilterByContinentComponent() {
//     const dispatch = useDispatch()
//     const countries = useSelector(state => state.backUpCountries)
//     const [continent, setContinent] = useState('')

//     useEffect(() => { 
//         if(continent !== ''){
//             if(continent === 'Seleccionar'){
//                 dispatch(getAllCountries())
//             } else {
//                 dispatch(filterByContinent(continent))
//             }
//         }
//     }, [dispatch, continent])
//     const continents = () => {
//         let continentsList = countries.map(country => country.continent)
//         let continents = continentsList.filter((continent, index) => {
//             return continentsList.indexOf(continent) === index; 
//         });
//         return continents
//     }

//     function handleByContinent(e) {
//         setContinent(e.target.value) 
//     }

//     return(
//         <div>
//             <div>
//                 <select onChange={e => handleByContinent(e)}>
//                     <option>Seleccionar</option>
//                     {continents().map(cont => { 
//                         return(
//                             <option key={cont} value={cont}>{cont}</option>
//                         )
//                     })}
                    
//                 </select>
//             </div>
//         </div>
//     )
// }
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByContinent, getAllCountries } from "../../redux/actions";

export default function FilterByContinentComponent() {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.backUpCountries);
    const [selectedContinent, setSelectedContinent] = useState(''); // Cambio de nombre a selectedContinent

    const continents = ["Asia", "Africa", "Europe", "North America", "South America", "Oceania", "Antarctica"];

    useEffect(() => {
        if (selectedContinent === '') {
            dispatch(getAllCountries())
        } else {
            dispatch(filterByContinent(selectedContinent));
        }
    }, [dispatch, selectedContinent]);

    function handleByContinent(e) {
        const continent = e.target.value;
        setSelectedContinent(continent);
    }

    return (
        <div>
            <div>
                <select className="text-black" onChange={handleByContinent} value={selectedContinent}>
                    <option value="">Seleccionar</option>
                    {continents.map(continent => (
                        <option key={continent} value={continent}>
                            {continent}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
