import { useState } from 'react'
import './App.css'
import { Nav } from './components/Nav'
import { ItemListContainer } from './components/ItemListContainer'

function App() {


  return (
    <div>
      <Nav/>
      <ItemListContainer usuario="Horacio"/>
    </div>
  )
}

export default App
