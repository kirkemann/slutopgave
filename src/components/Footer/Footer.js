import React from 'react';
import PraktiskeOplysninger from './Praktiskeoplys';
import PraktiskeInfo from './Praktiskeinfo';
import Social from './Social';

const Footer = () => {
    return ( 
        <footer>
            <div className="container mt-5">
                <div className="row">
                <div className="col-12 col-lg-4"> <PraktiskeOplysninger /></div>
                <div className="col-12 col-lg-4"> <PraktiskeInfo /></div>
                <div className="col-12 col-lg-4"><Social /></div>
                </div>
            
            </div>

        </footer>
     );
}
 
export default Footer;