import React from 'react'
import CeritfikatTxt from './CeritfikatTxt'
import HeadCeritifikat from './headCeritifikat';
import Ceritifikathead from './Ceritifikathead';


const Ceritifikat = () => {
    return ( 
        <div className="container">

            <HeadCeritifikat />
            <Ceritifikathead />
            <CeritfikatTxt />
        </div>
     );
}
 
export default Ceritifikat;