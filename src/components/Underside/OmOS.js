import React, { useState } from 'react';



const OmOS = () => {

    const [dykker]= useState([
       
        {class: 'col-12 col-lg-5 col-md-6 card p-5 m-5', alt: 'Vores dykker joe', image: 'dykker_1.jpg', name: 'Joe joeson', what: 'Her kommer tekst om dykkeren......',  id: 1},
        {class: 'col-12 col-lg-5 col-md-6 card p-5 m-5', alt: 'Vores dykker jullie', image: 'dykker_2.jpg', name: 'Jullie julson', what:'Her kommer tekst om dykkeren......', id: 2},
        {class: 'col-12 col-lg-5 col-md-6 card p-5 m-5', alt: 'Vores dykker dave', image: 'dykker_3.jpg', name: 'Jullie julson', what: 'Her kommer tekst om dykkeren......' , id: 3},
        {class: 'col-12 col-lg-5 col-md-6 card p-5 m-5', alt: 'Vores dykker hans', image: 'dykker_4.jpg', name: 'Hans Hanson', what: 'Her kommer tekst om dykkeren......' , id: 4},
        {class: 'col-12 col-lg-5 col-md-6 card p-5 m-5', alt: 'Vores dykker mette', image: 'dykker_5.jpg', name: 'Mette Metteson', what: 'Her kommer tekst om dykkeren......' , id: 5},
        {class: 'col-12 col-lg-5 col-md-6 card p-5 m-5', alt: 'Vores dykker don', image: 'dykker_6.jpg', name: 'Don Donson', what: 'Her kommer tekst om dykkeren......' , id: 6}
       
    ]);

    return ( 

                    <div className="row mt-5 ml-5">
                    {dykker.map(d => {
                        return ( 
                            <div key={d.id} className={d.class}>
                                <img className="img-fluid card-img-top" src={"/images/" + d.image} alt={d.alt} />
                                <div>
                                    <h4 className="card-title text-center"> {d.name} </h4>
                                    <p className="card-text text-center">{d.what} </p>
                                </div>
                            </div>
                         );
                    })}

                    </div>

                    
     );
}

export default OmOS;
