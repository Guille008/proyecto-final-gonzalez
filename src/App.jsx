import './App.css'
import { Nav } from './components/Nav'
import { ItemListContainer } from './components/ItemListContainer'
import { Footer } from './Footer'
import { Route,Routes } from "react-router-dom";
import { ItemDetailConteiner} from './components/ItemDetailConteiner'
import { Error } from './components/Error';
import { FinalizacionCompra } from './components/FinalizacionCompra';
import { Contacto } from './Contacto';
import { Sucursales } from './Sucursales';


function App() {


  return (
    <>
      <Nav/>
      
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/Inicio' element={<ItemListContainer/>}/>
        <Route path='/Sucursales' element={<Sucursales/>}/>
        <Route path='/Contacto' element={<Contacto/>}/>
        <Route path='/Detalle/:id' element={<ItemDetailConteiner/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='/FinalizacionCompra' element={<FinalizacionCompra/>}></Route>
      </Routes>

      <Footer/>
    </>
  )
}

export default App
