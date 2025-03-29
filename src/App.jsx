import React from 'react';
import { Route, Routes } from 'react-router';

import { Navbar, Footer } from './components';

import { Home, About, Location, Services } from './pages';


const App = () => {
  return (
    <div className="app-container">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/location' element={<Location />} />
        <Route path='/services' element={<Services />} />
      </Routes>

      <Footer />
    </div>
  )
};

export default App;