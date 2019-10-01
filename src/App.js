import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home';
import Navbar from './components/Header/Navbar';
import Dykkerudstyr from './components/Underside/Dykkerudstyr';
import Dykkerrejser from './components/Underside/Dykkerrejser';
import Footer from './components/Footer/Footer';





function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Navbar />

        <Route exact path='/' component={Home} />
        <Route path='/Dykkerudstyr' component={Dykkerudstyr} />
        <Route path='/Dykkerrejser' component={Dykkerrejser} />


        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;