import React from 'react';
import Scuba from '../img/ScubaLiving_logo_small.svg';
import Login from '../img/lock-icon-300x300.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return ( 
            <div className="container">
                <div className="col-12">
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light mb-3">
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav1"><span className="navbar-toggler-icon"></span></button>
                <NavLink className="img navbar-brand" to="/"><img src={Scuba} alt="Scuba Living"/></NavLink>
                <div className="collapse navbar-collapse" id="navbarNav1">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark" to="/">HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark" to="/">DYKKERUDSTYR</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark" to="/">DYKKERREJSER</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark" to="/">DYKKERKURSER</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark" to="/">KONTAKT OS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark" to="/">OM OS</NavLink>
                        </li>
                    </ul>
                    <div className="form-inline form-inline-sm ml-auto formsog">
                        <input title="Search" type="text" className="form-control mr-2"  />
                        <div className="input-group-append">
                             <button className="btn btn-secondary mr-5" type="button">SØG</button>
                        </div>
                    </div>
                    <div className="btn-group">
                        <button  className="btn btn-dark login"><img className="img-fluid" src={Login} alt="Login"/></button>
                        <button className="btn btn-secondary"><NavLink to="./LoginSite">Login</NavLink></button>
                    </div>
                </div>
           
        </nav>
        </div>
        </div>
     );
}
 
export default Navbar;