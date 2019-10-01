import React from 'react'
import HeadTravel from './HeadTravel'
import Travelplaceimg from './Travelplaceimg'
import Travelplacetxt from './Travelplacetxt'
import Txttrav from './Txttrav'

const Travel = () => {
    return ( 
        <div className="container">

            <HeadTravel />
            <Travelplaceimg  />
            <Travelplacetxt  />
            <Txttrav />

        </div>
     );
}
 
export default Travel;