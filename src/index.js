import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import ItemListContainer from './components/itemListContainer/ItemListContainer';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route exact path='/home' element={<Home/>}/>   
      <Route exact path='/productos' element={<ItemListContainer/>}/>    
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
); 


reportWebVitals();
