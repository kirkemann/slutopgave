import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home';
import Navbar from './components/Header/Navbar';





function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Navbar />

        <Route exact path='/' component={Home} />


        
      </div>
    </BrowserRouter>
  );
}

export default App;