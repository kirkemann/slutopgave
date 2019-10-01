import React, { useState } from 'react';


const Travelplacetxt = () => {

    const [nyheder]= useState([
       
        {class: 'col-12 col-lg-6 card bg-dark text-white', rejseoverskrift: 'Malta', rejsetxt: 'Oplev skønne Malta og det helt fantasike dyreliv og sammenhold. Vi arrangerer dykkerrejser til malta hele året rundt.' ,  id: 1},
        {class: 'col-12 col-lg-6 card bg-dark text-white', rejseoverskrift: 'Norge', rejsetxt: 'Nordeuropas bedste dykkerspots ligger i Norge. Vi har 25års erfaring med dyk i Norge. Oplev det klarest vand i verden.', id: 2},
        
    ]);

    return ( 

        <div className="row mx-md-n5">
        {nyheder.map(n => {
            return ( 
                <div key={n.id} className={n.class}>
                    <h4>{n.rejseoverskrift}</h4>
                    <p> {n.rejsetxt} </p>
                </div>
             );
        })}
        </div>

        
);
}

export default Travelplacetxt;