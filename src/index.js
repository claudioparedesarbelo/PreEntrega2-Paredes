import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import AboutUs from './components/aboutUs/AboutUs'
import ItemListContainer from './components/itemListContainer/ItemListContainer';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route exact path='/' element={<ItemListContainer/>}/>
      <Route exact path='/home' element={<Home/>}/>   
      <Route exact path='/productos' element={<ItemListContainer/>}/>  
      <Route exact path='/producto/:productoId' element={<ItemDetailContainer/>}/>    
      <Route exact path='/zapatillas' element={<ItemListContainer/>}/> 
      <Route exact path='/pantalones' element={<ItemListContainer/>}/>
      <Route exact path='/buzos' element={<ItemListContainer/>}/>
      <Route exact path='/aboutUs' element={<AboutUs/>}/>  
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
); 


reportWebVitals();   
