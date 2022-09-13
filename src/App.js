import './App.css';
import Navbar from './components/Navbar/Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/Main/ItemListContainer';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/nosotros' element={<div></div>} />
        <Route path='/item/:itemId' element={<div><ItemDetailContainer/></div>} />
        <Route path='/contacto' element={<div></div>} />
        <Route path='/footer' element={<div></div>} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
      
      <div></div>
      </BrowserRouter>
    </div>
  );
}
export default App;