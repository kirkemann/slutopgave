import React from 'react'
import { NavLink } from 'react-router-dom';

const Login = () => {
    return ( 

 
<form class="text-center border border-light p-5 mt-5" action="#!">

    <p class="h4 mb-4">Sign in</p>

    
    <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail" />


    <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password" />

    <div class="d-flex justify-content-around">
        <div>

            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember" />
                <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
            </div>
        </div>
        <div>

            <NavLink to="">Forgot password?</NavLink>
        </div>
    </div>


    <button class="btn btn-info btn-block my-4" type="submit">Sign in</button>


    <p>Not a member?
        <NavLink to="/opret"> Register</NavLink>
    </p>


    <p>or sign in with:</p>

    <a href="#" class="mx-2 text-dark" role="button"><i class="fab fa-facebook-f light-blue-text"></i></a>
    <a href="#" class="mx-2 text-dark" role="button"><i class="fab fa-twitter light-blue-text"></i></a>
    <a href="#" class="mx-2 text-dark" role="button"><i class="fab fa-linkedin-in light-blue-text"></i></a>
    <a href="#" class="mx-2 text-dark" role="button"><i class="fab fa-github light-blue-text"></i></a>

</form>


     );
}
 
export default Login;