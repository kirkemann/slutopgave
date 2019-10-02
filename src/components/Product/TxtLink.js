import React from 'react'
import { NavLink } from 'react-router-dom';


const TxtLink = () => {
    return ( 
        <div className="text-center mt-4">
            <NavLink to="/Dykkerudstyr"><h2>SE MERE LÆKKERT UDSTYR HER</h2></NavLink>
        </div>
     );
}
 
export default TxtLink;