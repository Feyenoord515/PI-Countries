import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getAllCountries, postActivity } from "../../redux/actions";
import validate from "./validators";
import './newActivityComponent.css'

function NewActivityComponent() {
    const dispatch = useDispatch() //despachar action
    const allCountries = useSelector(state => state.allCountries)//estado de store
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getAllCountries())
    }, [dispatch])

    let countriesList = allCountries.map(country => {
        return({
            name:country.name,
            flag: country.flags
        })
    });
    const [selected, setSelected] = useState("");
    const [errors, setErrors] = useState({});
    const [activity, setActivity] = useState({
        name: '',
        difficulty: '',
        duration: '',
        seasson: '',
        countries: []
    })

    function handleChange(e) {
        setActivity({
            ...activity,
            [e.target.name]: e.target.value
        });
        if(!errors){
            setErrors(validate({
                ...activity,
                [e.target.name]: e.target.value
            }))
        }
    }

    function handleSeasons(e) {
        if(e.target.value !== 'Seleccionar' && !activity.seasson.includes(e.target.value)){
            setActivity({
                ...activity,
                season: e.target.value
            })
            if(!errors){
            setErrors(validate({
                ...activity,
                season: e.target.value
            }))
            }
        }
    }

    function handleCountries(e) {
        if(e.target.value !== 'Seleccionar' && !activity.countries.includes(e.target.value)){
            setActivity({
                ...activity,
                countries: [...activity.countries, e.target.value]
            })
            if(!errors){
            setErrors(validate({
                ...activity,
                countries: [...activity.countries, e.target.value]
            }))
            }
            
        }
    }

    function deleteCountry(e) {
        setActivity({
            ...activity,
            countries: activity.countries.filter(country => country !== e.target.value)
        })
        if(!errors){
            setErrors(validate({
                ...activity,
                countries: activity.countries.filter(country => country !== e.target.value)
            }))
        }
    };

    function handleCheckErrors(e) {
        e.preventDefault();
        setErrors(validate({
            ...activity,
            [e.target.name]: e.target.value,
            countries: [...activity.countries, e.target.value]
        }))
        handleSubmit(e)
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(activity.name && activity.difficulty && activity.duration && activity.seasson && activity.countries.length >= 1){
        dispatch(postActivity(activity));
        alert('Actividad creada exitosamente');
        setActivity({
            name: '',
                difficulty: '',
                duration: '',
                seasson: '',
                countries: []
            });
     
        navigate('/home')
        }
        if(errors){
            alert('Completar los campos correspondientes')
        }
    }


    return(
        <div className="newActivity">
            <div>
                <h1>Nueva Actividad</h1>
                <form className="formActivity" onSubmit={e => handleSubmit(e)}>
                    <div>
                        <div className="info">
                            <label>Nombre</label>
                            <input
                            type='text'
                            name='name'
                            value={activity.name}
                            onChange={e => handleChange(e)}
                            />
                        </div>
                            {errors.name && (<p>{errors.name}</p>)}
                        <div className="info">
                            <label>Dificultad (De 1 a 5)</label>
                            <input
                            type='text'
                            name='difficulty'
                            value={activity.difficulty}
                            onChange={e => handleChange(e)}
                            />
                        </div>
                            {errors.difficulty && (<p>{errors.difficulty}</p>)}
                        <div className="info">
                            <label>Duracion (Formato 24hs)</label>
                            <input
                            type='text'
                            name='duration'
                            value={activity.duration}
                            onChange={e => handleChange(e)}
                            />
                        </div>
                            {errors.duration && (<p>{errors.duration}</p>)}
                    </div>
                    <div>
                        <div>
                            <div className="info">
                                <h3>Temporada</h3>
                                <select onChange={e => handleSeasons(e)}>
                                    <option>Seleccionar</option>
                                    <option value='Spring'>Primavera</option>
                                    <option value='Summer'>Verano</option>
                                    <option value='Autumn'>Otoño</option>
                                    <option value='Winter'>Invierno</option>
                                </select>
                            </div>
                                {errors.season && (<p>{errors.season}</p>)}
                        </div>
                        <div>
                            <div className="info">
                                <h3>Paises</h3>
                                <select value={selected} onChange={e => [handleCountries(e), setSelected(e)]}>
                                    <option>Seleccionar</option>
                                    {countriesList?.map(country => {
                                        return(
                                            <option key={country.name}>
                                                {country.name}
                                            </option>
                                        )
                                    })}
                                </select>
                            </div>
                                {errors.countries && (<p>{errors.countries}</p>)}
                            <div className="displayCountries">
                                {activity.countries.map((country) => {
                                    return(
                                        <div className="eachCountry" key={country}>
                                            <p className="countryName">{country}</p>
                                            <button className="closeButton" onClick={e => {deleteCountry(e)}} value={country}>X</button>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div>
                    {errors.name || 
                    errors.activity || 
                    errors.duration || 
                    errors.season || 
                    errors.countries ?
                    <button disabled>Crear Actividad</button>
                    :<button className="crearActividad" onClick={e => handleCheckErrors(e)}>Crear Actividad</button>}
                    </div>
                </form>
            </div>
        </div>
    )
};

export default NewActivityComponent;