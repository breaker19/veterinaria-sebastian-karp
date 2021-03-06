import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/error';
import ItemDetailContainer from './components/itemDetailContainer';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';





function App() {
  

  return (
    
    
    <div className="App">
<CartContextProvider>
  <BrowserRouter>
  <NavBar/>
  <Routes>
<Route path="/" element={<ItemListContainer />} />
<Route path= "*" element={<Error />} /> 
<Route path='/category/:categoryId' element={<ItemListContainer />} />
<Route path='/item/:itemId' element={<ItemDetailContainer />} />
<Route path='/cart' element={<Cart />} />

      </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>

  ) 
 
  
  
}



export default App;
