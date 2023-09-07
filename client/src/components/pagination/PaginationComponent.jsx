// import React, { useState } from "react";
// import './paginationComponent.css'



// export default function PaginationComponent({allCountries, itemsPerPages, setCurrentPage, currentPage}) { 
//     const [pageNumberLimit] = useState(5); 
//     const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5); 
//     const [minPageNumberLimit, setMinPageNumberLimit] = useState(0); 

//     const pages = [] 
//     for (let i = 1; i < Math.ceil(allCountries.length / itemsPerPages); i++) { 
//         pages.push(i) 
//     }

//     const handleClick = (e) => { 
//         setCurrentPage(Number(e.target.id)) 
//         window.scrollTo(0, 0); 
//     }

//     const handleNextbtn = () =>{ 
//         setCurrentPage(currentPage + 1); 

//         if(currentPage + 1 > maxPageNumberLimit){ 
//             setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit); 
//             setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit); 
//         }
//     }
//     const handlePrevbtn = () =>{ 
//         setCurrentPage(currentPage  - 1); 

//         if((currentPage - 1) % pageNumberLimit === 0){ 
//             setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit); 
//             setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit); 
//         }
//     }

//     let pageIncrementBtn = null; 
//     if(pages.length > maxPageNumberLimit) { 
//         pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li> 
//     }

//     let pageDecrementBtn = null; 
//     if(minPageNumberLimit >= 1) { 
//         pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li> 
//     }


//     const renderPageNumbers = pages.map(number => { 
//         if(number < maxPageNumberLimit + 1 && number > minPageNumberLimit){ 
//             return ( 
//                 <li key={number} id={number} onClick={e => handleClick(e)} 
//                 className={currentPage === number ? 'active' : null} 
//                 >
//                     {number}
//                 </li>
//             );
//         } else {
//             return null;
//         }
//     })


//     return(
//     <div>
//         <ul className="pageNumbers"> 
//             <li>
//                 <button
//                 disabled={currentPage === pages[0] ? true : false} 
//                 onClick={handlePrevbtn} 
//                 >
//                     Anterior
//                 </button>
//             </li>
//             {pageDecrementBtn} 
//             {renderPageNumbers}
//             {pageIncrementBtn}
//             <li>
//                 <button
//                 onClick={handleNextbtn}
//                 disabled={currentPage === pages[pages.length - 1] ? true : false}>
//                     Siguiente
//                 </button>
//             </li>
//         </ul>
//     </div>
//     )
// }

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import './paginationComponent.css';

export default function PaginationComponent({allCountries, itemsPerPages, setCurrentPage, currentPage}) { 
    const [pageNumberLimit] = useState(5); 
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5); 
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0); 

    const pages = [] 
    for (let i = 1; i < Math.ceil(allCountries.length / itemsPerPages); i++) { 
        pages.push(i) 
    }

    const handleClick = (e) => { 
        setCurrentPage(Number(e.target.id)) 
        window.scrollTo(0, 0); 
    }

    const handleNextbtn = () => { 
        setCurrentPage(currentPage + 1); 

        if(currentPage + 1 > maxPageNumberLimit) { 
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit); 
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit); 
        }
    }

    const handlePrevbtn = () => { 
        setCurrentPage(currentPage  - 1); 

        if((currentPage - 1) % pageNumberLimit === 0) { 
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit); 
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit); 
        }
    }

    let pageIncrementBtn = null; 
    if(pages.length > maxPageNumberLimit) { 
        pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>; 
    }

    let pageDecrementBtn = null; 
    if(minPageNumberLimit >= 1) { 
        pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>; 
    }

    const renderPageNumbers = pages.map(number => { 
        if(number < maxPageNumberLimit + 1 && number > minPageNumberLimit) { 
            return ( 
                <li key={number} id={number} onClick={e => handleClick(e)} 
                className={`px-3 py-2 border rounded cursor-pointer ${currentPage === number ? 'bg-gray-300 text-black font-bold' : ''}`}
                >
                    {number}
                </li>
            );
        } else {
            return null;
        }
    });

    return (
        <div>
            <ul className="flex items-center space-x-4">
                <li>
                    <button className="rounded-full bg-gray-300 text-black px-4 py-2 transition-colors duration-300 hover:bg-teal-600" 
                            disabled={currentPage === pages[0] ? true : false} 
                            onClick={handlePrevbtn}>
                        <FontAwesomeIcon icon={faArrowLeft} /> Anterior
                    </button>
                </li>
                {pageDecrementBtn} 
                {renderPageNumbers}
                {pageIncrementBtn}
                <li>
                    <button className="rounded-full bg-gray-300 text-black px-4 py-2 transition-colors duration-300 hover:bg-teal-600" 
                            onClick={handleNextbtn}
                            disabled={currentPage === pages[pages.length - 1] ? true : false}>
                        Siguiente <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </li>
            </ul>
        </div>
    );
}
