import React, { Component } from 'react';

import LandingPage from "./components/LandingPage"
import AboutMain from "./components/AboutMain"
import ProductsMain from "./components/ProductsMain"
import ManufacturingMain from "./components/ManufacturingMain"
import QualityControlMain from "./components/QualityControlMain"
import ContactMain from "./components/ContactMain"
import { Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<AboutMain />} />
        <Route path='/products' element={<ProductsMain />} />
        <Route path='/manufacturing' element={<ManufacturingMain />} />
        <Route path='/quality' element={<QualityControlMain />} />
        <Route path='/contact' element={<ContactMain />} />
      </Routes>
    </>
  )
}

export default App
