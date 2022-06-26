import React from "react";
import { NavLink } from "react-router-dom"; 
import logo from '../../assets/pngwing.com.png'
import './landingPageComponent.css'

function LandingPageComponent() { 
    return(
        <div className="landingPage">
            <h1 className="frase">Bienvenidos al Mundo!!!</h1>
                <NavLink className="linkLading" to='/home'>
                    <h1>Let's Go</h1>
                    <img src={logo} alt="Logo" height='50px'/>
                </NavLink>
        </div>
    )
}

export default LandingPageComponent;