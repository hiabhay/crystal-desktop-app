import React, { Component } from 'react';

import LandingPage from "./components/LandingPage"
import AboutMain from "./components/AboutMain"
import ProductsMain from "./components/ProductsMain"
import ManufacturingMain from "./components/ManufacturingMain"
import QualityControlMain from "./components/QualityControlMain"
import ContactMain from "./components/ContactMain"
import { Routes, Route } from 'react-router-dom';
import BulkNailsMain from './components/BulkNailsMain';
import CollatedNailsDetails from './components/CollatedNailsDetails';
import BulkNailsDetails from './components/BulkNailsDetails';
import CollatedNailsMain from './components/CollatedNailsMain';

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
        <Route path='/products/bulknails' element={<BulkNailsMain/>} />
        <Route path='/products/bulknails/:id' element={<BulkNailsDetails />} />
        <Route path='/products/collatednails' element={<CollatedNailsMain />} />
        <Route path='/products/collatednails/:id' element={<CollatedNailsDetails />} />
      </Routes>
    </>
  )
}

export default App
