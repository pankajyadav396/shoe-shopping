import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Shoecart } from './Components/Shoecart';
import { Footlockersec } from './Components/Footlockersec';
import { Relatedsec } from './Components/Relatedsec';
import { Tabsdec } from './Components/Tabsdec';
import { Footer } from './Components/Footer';
import { Mainnav } from './Components/Mainnav';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>




    </>
  );
}

export default App;
