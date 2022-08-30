//import logo from './logo.svg';

import './App.css';
import Navbar from './components/Navbar/Navbar.jsx'
import Container from './components/Main/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Container />
    </div>
  );
}
export default App;