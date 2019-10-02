import React from 'react'
import { NavLink } from 'react-router-dom';

const Login = () => {
    return ( 

 
<form className="text-center border border-light p-5 mt-5" action="#!">

    <p className="h4 mb-4">Sign in</p>

    
    <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail" />


    <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password" />

    <div className="d-flex justify-content-around">
        <div>

            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember" />
                <label className="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
            </div>
        </div>
        <div>

            <NavLink to="">Forgot password?</NavLink>
        </div>
    </div>


    <button className="btn btn-info btn-block my-4" type="submit">Sign in</button>


    <p>Not a member?
        <NavLink to="/opret"> Register</NavLink>
    </p>


    <p>or sign in with:</p>

    <NavLink href="#" className="mx-2 text-dark" role="button"><i className="fab fa-facebook-f light-blue-text"></i></NavLink>
    <NavLink href="#" className="mx-2 text-dark" role="button"><i className="fab fa-twitter light-blue-text"></i></NavLink>
    <NavLink href="#" className="mx-2 text-dark" role="button"><i className="fab fa-linkedin-in light-blue-text"></i></NavLink>
    <NavLink href="#" className="mx-2 text-dark" role="button"><i className="fab fa-github light-blue-text"></i></NavLink>

</form>


     );
}
 
export default Login;