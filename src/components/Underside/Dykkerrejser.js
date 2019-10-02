import React from 'react'
import Travelplaceimg from '../Travel/Travelplaceimg'
import LoginSite from '../Login/LoginSite'




const DykkerRejser = () => {
    return ( 
        <div className="container">
            <Travelplaceimg />
            <h3 className="border bg-dark text-white p-5 my-3 text-lg-center">Bestil din rejser her hos os</h3>
            <LoginSite />
        </div>
     );
}
 
export default DykkerRejser;