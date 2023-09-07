// import React, {useState} from "react";
// import FilterByActivities from "./FilterByActivities";
// import FilterByContinentComponent from "./FilterByContinentComponent";
// import OrderNamesComponent from "./OrderNamesComponent";
// import OrderPopulationComponent from "./OrderPopulationComponent";
// import './filterIndexComponent.css'
// import RightArrow from '../../assets/arrow-icon-1177.png'

// export default function FiltersIndexComponent() { 
//     const [selectedContinent, setSelectedContinent] = useState('');
//     console.log(selectedContinent)
//     return(
//         <div className="filters">
//             <input id="filtersDisplay" type='checkbox'></input>
//             <label className="titleDisplay" htmlFor="filtersDisplay"><h2 className="titleFilters">Filtros </h2><img className="imageRightArrow" src={RightArrow} alt='img not found' width='45px' height='45px'/></label>
//             <div className="hiddenFilters">
//                 <div className="filterContinent">
//                     <h3>Continentes</h3>
//                     <FilterByContinentComponent setSelectedContinent={setSelectedContinent} /> 
//                 </div>
//                 <div className="OrderByPopulation">
//     <h3>Poblacion</h3>
//     <OrderPopulationComponent selectedContinent={selectedContinent} />
// </div>
//                 <div className="filterActivities">
//                     <h3>Actividades</h3>
//                     <FilterByActivities />
//                 </div>
//                 <div className="OrderByName">
//                     <h3>Nombres</h3>
//                     <OrderNamesComponent/>
//                 </div>
        
//             </div>
//         </div>
//     )
// } 

import React, { useState } from "react";
import FilterByActivities from "./FilterByActivities";
import FilterByContinentComponent from "./FilterByContinentComponent";
import OrderNamesComponent from "./OrderNamesComponent";
import OrderPopulationComponent from "./OrderPopulationComponent";
import RightArrow from '../../assets/arrow-icon-1177.png';

export default function FiltersIndexComponent() { 
    const [selectedContinent, setSelectedContinent] = useState('');

    return (
        <div className="filters w-full flex flex-row text-white border-2 border-black bg-black rounded-full p-4">
            <input id="filtersDisplay" type='checkbox' className="hidden"></input>
            <label className=" cursor-pointer flex items-center" htmlFor="filtersDisplay">
                <h2 className="titleFilters">Filtros</h2>
                <img className="imageRightArrow ml-2" src={RightArrow} alt='img not found' width='5px' height='5px' />
            </label>
            <div className="hiddenFilters flex flex-row ml-2 transition-all duration-500">
                <div className=" mx-2 my-2">
                    <h3 className="mb-2">Continentes</h3>
                    <FilterByContinentComponent setSelectedContinent={setSelectedContinent} /> 
                </div>
                <div className="OrderByPopulation mx-2 my-2">
                    <h3 className="mb-2">Poblacion</h3>
                    <OrderPopulationComponent selectedContinent={selectedContinent} />
                </div>
                <div className="filterActivities mx-2 my-2">
                    <h3 className="mb-2">Actividades</h3>
                    <FilterByActivities />
                </div>
                <div className="OrderByName mx-2 my-2">
                    <h3 className="mb-2">Nombres</h3>
                    <OrderNamesComponent/>
                </div>
            </div>
        </div>
    )
}
