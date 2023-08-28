import React from 'react';
import Navbar from './Component/Navbar';
import ProductCard from './Component/ProductCard';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CartPage from './Component/CartPage';


function App() {
  return (


    <div>

      <Navbar />
      <Routes>
        <Route exact path='/' element={<ProductCard />} />
        <Route exact path='/cart' element={<CartPage />} />

      </Routes>


    </div>
  );
}

export default App;
