import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Tourpackges from './pages/Tourpackges';
import { Routes, Route } from 'react-router-dom';
import Gallery from './pages/Gallery';
import TourPackageDetails from './components/TourPackageDetails';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element = { <Home/> }/> 
    <Route path="/About" element = { <About/> }/> 
    <Route path="/Tourpackges" element = { <Tourpackges/> }/> 
    <Route path="/Contact" element = { <Contact/> }/> 
    <Route path="/Gallery" element = { <Gallery/> }/> 
    <Route path="/tour/:id" component={<TourPackageDetails/>} />
    </Routes>
     
    </div>
  );
}

export default App;
