import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import { CartProvider } from './context/CartContext'
import {ItemListContainer} from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { CartContainer } from './components/CartContainer'
import React, { Fragment } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Error from './components/Error'



function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
            <div>
                <NavBar/>
                <Routes>
                <Route path="/" element={
                <Fragment>
                  <Hero />
                  <ItemListContainer />
                </Fragment>
              } />
                  <Route path="/products/:category" element={<ItemListContainer />}/>
                  <Route path="/products/" element={<ItemListContainer />}/>
                  <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                  <Route path="/cart" element={<CartContainer/>}/>
                  <Route path='*' element={<Error />}/> 
                  {/*  // cualquier otra ruta me reenderiza este componente */}
                </Routes>
            </div>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
