// import React, { useState} from "react";
// import { Link } from "react-router-dom";
// import './searchBarComponent.css'

// function  SearchBarComponent() { 
//     const [name, setName] = useState('');
//     function handleInputName(e) { 
//         e.preventDefault();
//         setName(e.target.value) 
//     }

//     function handleClick(e){ 
//         setName('');
//     };

//     return( 
//         <div className="searchBarComponent">
//             <form>
//                 <input
//                 className="searchBarInput"
//                 type='text'
//                 value={name}
//                 onChange={e => handleInputName(e)}
//                 placeholder='Buscar paises...'
//                 >
//                 </input>
//                 <Link to={`/search/${name}`}>
//                     <button className="searchBarBtn" onClick={e => handleClick(e)}>Buscar</button>
//                 </Link>
//             </form>
//         </div>
//     )
// };

// export default SearchBarComponent;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // Importa el ícono de búsqueda
import 'tailwindcss/tailwind.css';

function SearchBarComponent() {
  const [name, setName] = useState('');

  function handleInputName(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleClick(e) {
    setName('');
  }

  return (
    <div className="flex items-center">
      <input
        className="searchBarInput px-4 py-2 rounded-lg shadow-md mr-2 focus:outline-none focus:ring focus:border-blue-300"
        type="text"
        value={name}
        onChange={(e) => handleInputName(e)}
        placeholder="Buscar países..."
      />
      <Link to={`/search/${name}`}>
        <button
          className="searchBarBtn px-4 py-2 bg-teal-900 text-white rounded-lg shadow-md focus:outline-none focus:ring focus:border-blue-300 hover:bg-blue-600"
          onClick={(e) => handleClick(e)}
        >
          <FontAwesomeIcon icon={faSearch} className="animate-pulse mr-2" />Buscar
          
        </button>
      </Link>
    </div>
  );
}

export default SearchBarComponent;
