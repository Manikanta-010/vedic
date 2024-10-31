import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Home from './pages/Home';




function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/about' element={ <About/>}/>
      <Route path='/portfolio' element={ <Portfolio/>}/>
      <Route path='/contact' element={ <Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
