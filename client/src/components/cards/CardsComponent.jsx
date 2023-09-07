// import React from "react";
// import CardComponent from "../card/CardComponent";
// import './cardsComponent.css'

// function CardsComponent({allCountries}) {
//     return(
//         <div className="cards">
//             {allCountries && allCountries.map((country) => { 
//                 return(
//                     <CardComponent 
//                     id={country.id}
//                     name={country.name}
//                     flags={country.flags}
//                     continent={country.continent}
//                     population={country.population}
//                     activities={country.activities}

//                     />
//                 )
//             })}
//         </div>
//     )
// }
// export default CardsComponent;

import React, { useState, useEffect } from "react";
import CardComponent from "../card/CardComponent";

function CardsComponent({ allCountries, sortedCountries }) {
    const [sortedCountriesLocal, setSortedCountriesLocal] = useState(allCountries);

    useEffect(() => {
        setSortedCountriesLocal(sortedCountries);
    }, [sortedCountries]);
    const sortByPopulationAsc = () => {
        const sortedAsc = [...sortedCountriesLocal].sort((a, b) => a.population - b.population);
        setSortedCountriesLocal(sortedAsc);
    };
    
    const sortByPopulationDesc = () => {
        const sortedDesc = [...sortedCountriesLocal].sort((a, b) => b.population - a.population);
        setSortedCountriesLocal(sortedDesc);
    };

    return (
       
            <><div className="flex justify-center mb-4">
            <button onClick={sortByPopulationDesc} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Ordenar por mayor población
            </button>
            <button onClick={sortByPopulationAsc} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Ordenar por menor población
            </button>
        </div><div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 min-h-screen p-8 bg-transparent">
                {sortedCountriesLocal.map((country) => (
                    <CardComponent
                        key={country.id}
                        id={country.id}
                        name={country.name}
                        flags={country.flags}
                        continent={country.continent}
                        population={country.population}
                        activities={country.activities} />
                ))}
            </div></>
    );
}

export default CardsComponent;
