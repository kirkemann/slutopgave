import React from 'react';
import Ceritifikathead from '../Ceritfikat/Ceritifikathead';
import Login from '../Login/login';

const Dykkerkurser = () => {
    return ( 
        <div className="container">
            <h3 className="text-lg-center p-5 text-white border bg-dark dykkert">Se vores kurser her</h3>
            <Ceritifikathead className="dykkerk" />
            <h3 className="text-lg-center p-5 text-white border bg-dark">Login og bestil her</h3>
            <Login />
        </div>
       
     );
}
 
export default Dykkerkurser;