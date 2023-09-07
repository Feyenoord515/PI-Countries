// import React from "react";
// import { Link } from 'react-router-dom';
// import SearchBarComponent from "../searchBar/SearchBarComponent";
// import logo from '../../assets/pngwing.com.png'

// import './navBar.css'

// ///IMPLEMENTAR BOOTSTARP O MATERIAL UI
// function NavBarCompoment(params) {
//     return(
//         <div className="navbar">

//                 {/* <FiltersIndexComponent/> */}

//                 <div className="links">
//                     <div>
//                         <Link className="Link" to='/home'>
//                             <div className="linkToHome">Inicio</div>
//                         </Link>
//                     </div>
//                     <div>
//                         <Link className="Link" to='/create'>
//                             <div className="linkToCreate">Nueva Actividad</div>
//                         </Link>
//                     </div>
//                     <div className="searchBar">
//                         <SearchBarComponent/>
//                     </div>
//                 </div>
//         </div>
//     )
// };

// export default NavBarCompoment;

import React from "react";
import { Link } from "react-router-dom";
import SearchBarComponent from "../searchBar/SearchBarComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPlus, faCompass, faSailboat } from "@fortawesome/free-solid-svg-icons";
import {  } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/pngwing.com.png";

function NavBarCompoment(params) {
  return (
    <div className="flex flex-row h-20 bg-orange-500 w-full border-4 bg-opacity-90">
    <div className="flex items-center justify-between px-8 w-full">
      
        <Link className="Link" to="/home">
        <div className="linkToHome text-lg text-teal-900 justify-center items-center">
        <FontAwesomeIcon icon={faHouse} className="animate-bounce mr-2" />
        <p className="animate-bounce" >Inicio</p>
          </div>
        </Link>
        <FontAwesomeIcon icon={faCompass} className="animate-spin mr-2" />
        <Link className="Link" to="/create">
          <div className="linkToCreate text-lg text-teal-900 flex items-center">
            <FontAwesomeIcon icon={faPlus} className="animate-bounce mr-2" /> 
            <p className="animate-bounce" >Agregar Actividad</p>
         </div>
        </Link>
        <FontAwesomeIcon icon={faSailboat} className="animate-wobble mr-2" />
      
      <div className="flex justify-center items-center text-xl text-teal-900">
        <SearchBarComponent />
      </div>
    </div>
  </div>
  );
}

export default NavBarCompoment;
