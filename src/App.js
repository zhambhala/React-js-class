import './App.css';
import Navbar from './components/Navbar/Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/Main/ItemListContainer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='bg-success'><ItemListContainer/></div>
    </div>
  );
}
export default App;