import React from 'react'
import Allproduct from '../Product/Allproduct'

const DykkerVare = () => {
    return ( 
        <div className="container">
            <h3 className="border text-white bg-dark p-5 vare">Et lille udvalg af vores produkter </h3>
            <Allproduct />
            <Allproduct />
        </div>
     );
}
 
export default DykkerVare;