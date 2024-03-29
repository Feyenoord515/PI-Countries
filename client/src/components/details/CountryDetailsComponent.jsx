import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryById } from "../../redux/actions";
import './countryDetailsComponent.css'

function CountryDetailsComponent() {
    const dispatch = useDispatch(); //dispatching actions
    const country = useSelector(state => state.country); //getting the country from the store
    const { name, flags, continent, capital, subregion, area, population, activities} = country;
    let { id } = useParams(); //traer el id del url
    useEffect(() => {  //cargar el pais al iniciar la pagina
        dispatch(getCountryById(id)) 
    }, [dispatch, id])
    return(
        <div className="details">
            <div className="detailCard" key={id}>
                <div className="columns">
                    <div className="columnLeft">
                        
                    <div className="countryInfo">
                    <img className="detailImg" src={flags} alt={name} />                    
                    </div>
                    <div className="countryInfo">
                        <h1>Pais:</h1>
                        <h1 className="detailTitle">{name}</h1>                        
                    </div>
                    <div className="countryInfo">
                        <h1>ID Pais:</h1>
                        <h1 className="detailid">{id}</h1>                        
                    </div>
                    <div className="countryInfo">
                        <h3>Capital:</h3>
                        <h3 className="detailCapital">{capital}</h3>                      
                    </div>
                    <div className="countryInfo">
                        <h3>Continente:</h3>
                        <h3 className="detailContinent">{continent}</h3>                       
                    </div>
                    <div className="countryInfo">
                        <h3>Subregion:</h3>
                        <h3 className="detailSubregion">{subregion}</h3>                       
                    </div>
                    <div className="countryInfo">
                        <h3>Area:</h3>
                        <h3 className="detailArea">{area} Km²</h3>   
                    </div>
                    <div className="countryInfo">
                        <h3>Poblacion:</h3>
                        <h3 className="detailPopulation">{population} habitantes</h3>        
                    </div>
                    </div>
                    <div className="columnRight">

                        <h2 className="activitiesTitle">Actividades:</h2>
                    <div className="countryInfo">
                        <div className="detailActivities">

                        {activities && activities.map(activity => { 
                            return(
                                <><h2 key={activity.id}>Detalle: {activity.name}</h2>
                                <h2>Temporada: {activity.seasson}</h2>
                                <h2>Dificultad: {activity.difficulty}</h2>
                                <h2>Duracion: {activity.duration} hs</h2></> 
                               
                            )
                            })}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryDetailsComponent;