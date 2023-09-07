// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllCountries } from "../../redux/actions";
// import CardsComponent from "../cards/CardsComponent";
// import FiltersIndexComponent from "../filters/FiltersIndexComponent";
// import PaginationComponent from "../pagination/PaginationComponent";
// import './homeComponent.css'

// function HomeComponent() {
//     const dispatch = useDispatch(); 
//     const allCountries = useSelector(state => state.allCountries) // get all countries from redux state
//     const [currentPage, setCurrentPage] = useState(1);
//     const [itemsPerPages] = useState(10); 
//     useEffect(() => { 
//         dispatch(getAllCountries())
//     }, [dispatch]) // use

//     const indexOfLastItem = currentPage * itemsPerPages; 
//     const indexOfFirstItem = indexOfLastItem - itemsPerPages; 
//     const currentItems = allCountries.slice(indexOfFirstItem, indexOfLastItem)


//     return(
//         <div className="home">
            
//             <div className="filters">
//                 <FiltersIndexComponent/>
//             </div>
//             <div className="cards">
//                 <CardsComponent allCountries={currentItems}/>
//             </div>
//             <div className="pagination">
//                 <PaginationComponent allCountries={allCountries} itemsPerPages={itemsPerPages} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
//             </div>
//         </div>
        
//     )
// }

// export default HomeComponent;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../redux/actions";
import CardsComponent from "../cards/CardsComponent";
import FiltersIndexComponent from "../filters/FiltersIndexComponent";
import PaginationComponent from "../pagination/PaginationComponent";
// import './homeComponent.css';

function HomeComponent() {
   const dispatch = useDispatch();
   const allCountries = useSelector(state => state.allCountries);
   const [currentPage, setCurrentPage] = useState(1);
   const [itemsPerPages] = useState(10);
   const sortedCountries = useState();
   useEffect(() => {
      dispatch(getAllCountries());
   }, [dispatch]);
console.log(allCountries)
   const indexOfLastItem = currentPage * itemsPerPages;
   const indexOfFirstItem = indexOfLastItem - itemsPerPages;
   const currentItems = allCountries.slice(indexOfFirstItem, indexOfLastItem);
///ATENCION. PERDI EL PAGINADO
   return (
      <div className="home bg-gradient-to-r from-yellow-300 to-green-400">
         <div className="flex justify-center items-center">
            <FiltersIndexComponent />
         </div>
         <div className="cards">
            <CardsComponent allCountries={currentItems} sortedCountries={allCountries} />
         </div>
         <div className="flex justify-center items-center">
            <PaginationComponent allCountries={allCountries} itemsPerPages={itemsPerPages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
         </div>
      </div>
   );
}

export default HomeComponent;
