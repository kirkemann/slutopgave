import React from 'react';
import '../../sass/App.scss'


const Headerimg = () => {
    const bgStyle = {
        backgroundImage: "url('images/scuba2.jpg')"
    }
    return ( 
        <section className="position-relative" style={bgStyle} >
            <article className="texth2 position-absolute">
                <h4>THE BEST WAY TO OBSERVE A FISH IS TO BECOME A FICH.</h4>
                <p>JACQUES COUSTEAU</p>
            </article>
        </section>
     
       
     );
}
 
export default Headerimg;