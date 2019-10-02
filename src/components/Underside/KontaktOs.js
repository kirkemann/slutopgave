import React from 'react'

const KontaktOS = () => {
    return ( 
        <div className="container">

<form class="text-center border border-light p-5 kontakt" action="#!">

    <p class="h4 mb-4">Contact us</p>


    <input type="text" id="defaultContactFormName" title="Navn" class="form-control mb-4" placeholder="Name" />


    <input type="email" id="defaultContactFormEmail" title="Email" class="form-control mb-4" placeholder="E-mail" />


    <label>Subject</label>
    <select title="Vælger emne" class="browser-default custom-select mb-4">
        <option value="" disabled>Choose option</option>
        <option value="1" selected>Vælge her</option>
        <option value="2">Kurser</option>
        <option value="3">Rejser</option>
        <option value="4">Udstyr</option>
    </select>


    <div class="form-group">
        <textarea class="form-control rounded-0" title="Tekst boks til besked" id="exampleFormControlTextarea2" rows="3" placeholder="Message"></textarea>
    </div>


    <div class="custom-control custom-checkbox mb-4">
        <input type="checkbox" class="custom-control-input" title="Check til at sende en kopi " id="defaultContactFormCopy" />
        <label class="custom-control-label" for="defaultContactFormCopy">Send me a copy of this message</label>
    </div>


    <button class="btn btn-dark btn-block" type="submit">Send</button>

</form>

        </div>
     );
}
 
export default KontaktOS;