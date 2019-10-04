import React from 'react';
import { HashRouter, Route } from 'react-router-dom'
import Home from './Home';
import Navbar from './components/Header/Navbar';
import Dykkerudstyr from './components/Underside/Dykkerudstyr';
import Dykkerrejser from './components/Underside/Dykkerrejser';
import Dykkerkurser from './components/Underside/Dykkerkurser';
import KontaktOs from './components/Underside/KontaktOs';
import OmOs from './components/Underside/OmOS';
import Login from './components/Login/LoginSite';
import Footer from './components/Footer/Footer';
import Opret from './components/Login/opret';





function App() {
  return (
    <HashRouter>
      <div className="App">

        <Navbar />

        <Route exact path='/' component={Home} />
        <Route path='/Dykkerudstyr' component={Dykkerudstyr} />
        <Route path='/Dykkerrejser' component={Dykkerrejser} />
        <Route path='/Dykkerkurser' component={Dykkerkurser} />
        <Route path='/KontaktOs' component={KontaktOs} />
        <Route path='/OmOs' component={OmOs} />
        <Route path='/Loginsite' component={Login} />
        <Route path='/opret' component={Opret} />
        

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;