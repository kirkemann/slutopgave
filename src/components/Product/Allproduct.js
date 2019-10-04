import React, { useState } from 'react';


const Allproduct = () => {

    const [product]= useState([
       
        {class: 'col-12 col-lg-3 col-md-6 card ', alt: 'Rejsefinne', image: 'fine.jpg', producttext: 'Rejsefinne', price: 999,  id: 1},
        {class: 'col-12 col-lg-3 col-md-6 card ', alt: 'Coldwater Gloves', image: 'hanske.jpg', producttext: 'Coldwater Gloves', price: 1499, id: 2},
        {class: 'col-12 col-lg-3 col-md-6 card ', alt: 'Regulator med resist', image: 'reg.jpg', producttext: 'Regulator med resist', price: 899, id: 3},
        {class: 'col-12 col-lg-3 col-md-6 card ', alt: 'Dykker Ur', image: 'ur.jpg', producttext: 'Dykker Ur', price: 1799, id: 4}
       
    ]);

    return ( 

                    <div className="row mt-5">
                    {product.map(n => {
                        return ( 
                            <div key={n.id} className={n.class}>
                                <img className="img-fluid card-img-top" src={"images/" + n.image} alt={n.alt} />
                                <div>
                                    <h4 className="card-title text-center"> {n.producttext} </h4>
                                    <p className="card-text text-center"> KR {n.price} </p>
                                </div>
                            </div>
                         );
                    })}
                    </div>

                    
     );
}

export default Allproduct;