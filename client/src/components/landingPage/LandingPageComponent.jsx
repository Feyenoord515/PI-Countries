// import React from "react";
// import { NavLink } from "react-router-dom"; 
// import logo from '../../assets/pngwing.com.png'
// import './landingPageComponent.css'

// function LandingPageComponent() { 
//     return(
//         <div className="landingPage">
//             <h1 className="frase">Bienvenidos al Mundo!!!</h1>
//                 <NavLink className="linkLading" to='/home'>
//                     <h1>Let's Go</h1>
//                     {/* <img src={logo} alt="Logo" height='5px'/> */}
//                 </NavLink>
//         </div>
//     )
// }

// export default LandingPageComponent;
import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/pngwing.com.png';

function LandingPageComponent() {
    return (
        <div className="bg-cover bg-center h-screen flex flex-col justify-center items-center"
            style={{
                backgroundImage: `url('../../wp2591764.jpg')`,
            }}
        >
            <h1 className="text-6xl bg-yellow-300 shadow-md p-4 rounded-md font-bold">
                Bienvenidos al Mundo!!!
            </h1>
            <NavLink
                className="text-white bg-green-500 bg-opacity-30 px-8 py-4 mt-8 rounded-lg shadow-md transition-transform hover:scale-110"
                to='/home'
            >
                <h1 className="text-4xl font-bold text-opacity-80 text-green-700">
                    Let's Go
                </h1>
                {/* <img src={logo} alt="Logo" height='5px'/> */}
            </NavLink>
        </div>
    );
}

export default LandingPageComponent;
