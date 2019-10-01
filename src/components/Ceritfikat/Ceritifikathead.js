import React from 'react'
import Ceritifikatimg from './CeritfikatImg'
import TextCeritifikat from './TextCeritifikat'

const Ceritifikathead = () => {
    return ( 
      
       <div className="row border p-5 m-5">
           <div className="col-9">
               <TextCeritifikat />
           </div>
           <div className="col-3">
               <Ceritifikatimg />
           </div>
       </div> 
       
     );
}
 
export default Ceritifikathead;