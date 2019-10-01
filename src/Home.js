import React from 'react';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import TxtLink from './components/Product/TxtLink';
import Travel from './components/Travel/Travel';
import Ceritifikat from './components/Ceritfikat/Ceritifikat';
import Footer from './components/Footer/Footer';



const Home = () => {
    return ( 
        <div>
            <Header />
            <Product />
            <TxtLink />
            <Travel />
            <Ceritifikat />
            
  
        </div>
     );
}
 
export default Home;