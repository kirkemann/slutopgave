import React, { useState } from 'react';


const Tav = () => {

    const [nyheder]= useState([
       
        {class: 'col-12 col-lg-5 card bg-dark text-white m-5', alt: 'Dykker i et rev', image: 'malta.jpg', rejseoverskrift: 'Malta', rejsetxt: 'Oplev skÃ¸nne Malta og det helt fantasike dyreliv og sammenhold. Vi arrangerer dykkerrejser til malta hele året rundt.' ,  id: 1},
        {class: 'col-12 col-lg-5 card bg-dark text-white m-5', alt: 'Dykker ved et bil vrag', image: 'norge.jpg', rejseoverskrift: 'Norge', rejsetxt: 'Nordeuropas bedste dykkerspots ligger i Norge. Vi har 25års erfaring med dyk i Norge. Oplev det klarest vand i verden.', id: 2},
        
    ]);

    return ( 

        <div className="row mx-md-n5">
        {nyheder.map(n => {
            return ( 
                <div key={n.id} className={n.class}>
                    <img className="img-fluid card-img-top" src={"/images/" + n.image} alt={n.alt} />
                    <h4>{n.rejseoverskrift}</h4>
                    <p> {n.rejsetxt} </p>
                </div>
             );
        })}
        </div>

        
);
}
 
export default Tav;