import {} from 'react'
import './App.css'
import ShowCard from './Pages/Components/ShowCard'
import TituloProduct from '../src/Pages/Components/TituloProduct'
import Navbar from '../src/Pages/Components/Navbar'

const App = () => {
  return (
<>
  <Navbar />
  <TituloProduct />
  <ShowCard />
</>
  );
}

export default App
