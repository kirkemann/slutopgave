import React from 'react'
import KontaktOS from './KontaktOs'
import bill from '../img/ScubaLiving_logo.svg'


const OmOs = () => {
    return ( 
        <div className="container">
            <div className="row">
            <div className="col-12 col-lg-6">
                <KontaktOS />
            </div>
            <div className="col-12 col-lg-6">
                <img className="img-fluid bill" src={bill} alt=""/>
            </div>
            </div>
        </div>
     );
}
 
export default OmOs;
