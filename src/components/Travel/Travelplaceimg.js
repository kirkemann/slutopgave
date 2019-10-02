import React, { useState } from 'react';


const Travelplaceimg = () => {

    const [product]= useState([
       
        {class: 'col-12 col-lg-6 card p-5 my-5', alt: 'Dykker i et rev', image: 'malta.jpg',  id: 1},
        {class: 'col-12 col-lg-6 card p-5 my-5', alt: 'Dykker ved et bil vrag', image: 'norge.jpg', id: 2},
        
    ]);

    return ( 

                    <div className="row mt-5 mx-md-n5">
                    {product.map(n => {
                        return ( 
                            <div key={n.id} className={n.class}>
                                <img className="img-fluid card-img-top" src={"/images/" + n.image} alt={n.alt} />

                            </div>
                         );
                    })}
                    </div>

                    
     );
}

export default Travelplaceimg;