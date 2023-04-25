import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import { CartProvider } from './context/CartContext'
import ItemListContainer from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { CartContainer } from './components/CartContainer'
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

/* function App() {
  return (
    <>
      <NavBar background={'transparent'} />
      <Hero title="CoolCase" />
      <ItemListContainer greeting="Lista de Productos" />

    </>
  )
} */

/* RUTAS */
function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
            <div>
                <NavBar/>
                <Routes>
                  <Route path='/' element={<ItemListContainer />}/>
                  <Route path="/productos/:tipoProducto" element={<ItemListContainer />}/>
                  <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
                  <Route path="/cart" element={<CartContainer/>}/>
             {/*      <Route path='*' element={<ItemListContainer />}/> */}
                  {/*  // cualquier otra ruta me reenderiza este componente */}
                </Routes>
            </div>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App
