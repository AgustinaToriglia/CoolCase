import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ItemListContainer from './components/ItemListContainer'
import React from 'react'

function App() {
  return (
    <>
      <NavBar background={'transparent'} />
      <Hero title="CoolCase" />
      <ItemListContainer greeting="Lista de Productos" />

    </>
  )
}

export default App
