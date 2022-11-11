import './App.css';
import Navbar from './components/Navbar/Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/Main/ItemListContainer';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { CartProvider } from './components/context/CartContext';
import Cart from './components/Cart/Cart';

function App() {
  
  return (
    <div className="App">

      <CartProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/nosotros' element={<div></div>} />
        <Route path='/item/:itemId' element={<div><ItemDetailContainer/></div>} />
        <Route path='/productos/:categoryId' element={<ItemListContainer/>} />
        <Route path='/cart' element={<div><Cart/></div>} />
      </Routes>
      
      <div></div>
      </BrowserRouter>
      </CartProvider>
   
    </div>
  );
}
export default App;