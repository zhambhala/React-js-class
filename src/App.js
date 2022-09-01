import './App.css';
import Navbar from './components/Navbar/Navbar.jsx'
import Container from './components/Main/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/Main/ItemCount';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Container />
      <div className='m-2 p-2 bg-warning w-25'> <ItemCount initial="0"/> </div>
    </div>
  );
}
export default App;