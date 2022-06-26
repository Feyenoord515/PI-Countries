import React from "react";
import CardComponent from "../card/CardComponent";
import './cardsComponent.css'

function CardsComponent({allCountries}) {
    return(
        <div className="cards">
            {allCountries && allCountries.map((country) => { 
                return(
                    <CardComponent 
                    id={country.id}
                    name={country.name}
                    flags={country.flags}
                    continent={country.continent}
                    population={country.population}
                    activities={country.activities}
                    />
                )
            })}
        </div>
    )
}
export default CardsComponent;