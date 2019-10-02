import React from 'react'
import { NavLink } from 'react-router-dom';

const Opret = () => {
    return ( 
      
       <form className="text-center border border-light p-5 mt-5" action="#!">
          <p className="h4 mb-4">Sign up</p>

          <div className="form-row mb-4">
              <div className="col">
                  
                  <input type="text" id="defaultRegisterFormFirstName"  title="Fornavn"className="form-control" placeholder="First name"  required />
              </div>
              <div className="col">
                
                  <input type="text" id="defaultRegisterFormLastName" title="Efternavn" className="form-control" placeholder="Last name" required />
              </div>
          </div>


          <input type="email" id="defaultRegisterFormEmail" title="e-mail" className="form-control mb-4" placeholder="E-mail" />


          <input type="password" id="defaultRegisterFormPassword" title="password" className="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" required />
          <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
              At least 8 characters and 1 digit
          </small>


          <input type="text" id="defaultRegisterPhonePassword" title="telefonnummer" className="form-control" placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock" required />
          <small id="defaultRegisterFormPhoneHelpBlock" className="form-text text-muted mb-4">
              Optional - for two step authentication
          </small>


          <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" title="check til nyhedsmail" id="defaultRegisterFormNewsletter" />
              <label className="custom-control-label" for="defaultRegisterFormNewsletter">Subscribe to our newsletter</label>
          </div>


          <button className="btn btn-dark my-4 btn-block" type="submit">Sign in</button>


          <p>or sign up with:</p>

          <NavLink to="#" className="mx-2 text-dark" title="Facebook" role="button"><i className="fab fa-facebook-f light-blue-text"></i></NavLink>
          <NavLink to="#" className="mx-2 text-dark" title="Twitter" role="button"><i className="fab fa-twitter light-blue-text"></i></NavLink>
          <NavLink to="#" className="mx-2 text-dark" title="Linkedin" role="button"><i className="fab fa-linkedin-in light-blue-text"></i></NavLink>
          <NavLink to="#" className="mx-2 text-dark" title="Github" role="button"><i className="fab fa-github light-blue-text"></i></NavLink>

          <hr/>


          <p>By clicking
              <em>Sign up </em> you agree to our 
              <NavLink to="" target="_blank"> terms of service</NavLink>
          </p>
        </form>
     );
}
 
export default Opret;