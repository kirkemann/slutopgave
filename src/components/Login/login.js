import React from 'react'
import { NavLink } from 'react-router-dom';

const Login = () => {
    return ( 

 
<form className="text-center border border-light p-5 mt-5" action="#!">

    <p className="h4 mb-4">Sign in</p>

    
    <input type="email" id="defaultLoginFormEmail" title="Email" className="form-control mb-4" placeholder="E-mail" />


    <input type="password" id="defaultLoginFormPassword" title="Password" className="form-control mb-2" placeholder="Password" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required />
    <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-left text-dark mb-4">At least 8 characters and UpperCase, LowerCase, Number/SpecialChar</small>

    <div className="d-flex justify-content-around">
        <div>

            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember"  />
                <label className="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
            </div>
        </div>
        <div>

            <NavLink to="">Forgot password?</NavLink>
        </div>
    </div>


    <button className="btn btn-dark btn-block my-4" type="submit">Sign in</button>


    <p>Not a member?
        <NavLink to="/opret"> Register</NavLink>
    </p>


    <p>or sign in with:</p>

    <NavLink to="#" className="mx-2 text-dark" role="button" title="Facebook"><i className="fab fa-facebook-f light-blue-text"></i></NavLink>
    <NavLink to="#" className="mx-2 text-dark" role="button" title="Twitter"><i className="fab fa-twitter light-blue-text"></i></NavLink>
    <NavLink to="#" className="mx-2 text-dark" role="button" title="Linkedin"><i className="fab fa-linkedin-in light-blue-text"></i></NavLink>
    <NavLink to="#" className="mx-2 text-dark" role="button" title="Github"><i className="fab fa-github light-blue-text"></i></NavLink>

</form>


     );
}
 
export default Login;