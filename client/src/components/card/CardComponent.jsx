import React from "react";
import { Link } from "react-router-dom"; 
import './cardComponent.css'

function CardComponent({id, name, flags, continent, population, activities, borders }) {
    const truncatedName = name.length > 30 ? name.slice(0, 30) + "..." : name;
    return(
        <Link to={`/country/${id}`} className='linkToDetails'> 
        <div  key={id}>
        <div  class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
        <div>
        <img src={flags} alt='img not found' className='flagImg' />
        </div>
        <div class="py-4 px-4 bg-transparent">
          <h3 class="text-md font-semibold text-gray-600">{truncatedName}</h3>
          <p class="mt-4 text-lg font-thin">Continente: {continent}</p>
          <p class="mt-4 text-lg font-thin">Poblacion:{population}</p>
          <p class="mt-4 text-lg font-thin">{activities?.map(activity => { 
                            return(
                                <li key={activity.id}>Actividades: {activity.name}</li>
                                )
                            })} </p>
         
        </div>
      </div>
      </div>
        
        </Link>
    )
}

export default CardComponent;






