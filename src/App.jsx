import './App.css'
import { Nav } from './components/Nav'
import { ItemListContainer } from './components/ItemListContainer'
import { Footer } from './Footer'
import { Route,Routes } from "react-router-dom";
import { ItemDetailConteiner} from './components/ItemDetailConteiner'
import { Error } from './components/Error';

function App() {


  return (
    <>
      <Nav/>
      
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/Inicio' element={<ItemListContainer/>}/>
        <Route path='/Sucursales' element={<main><p>Aca vas a encontrar todas nuestras sucursales</p></main>}/>
        <Route path='/Contacto' element={<main><p>Formulario de contacto</p></main>}/>
        <Route path='/Detalle/:id' element={<ItemDetailConteiner/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
