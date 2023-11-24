import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Tourpackges from './pages/Tourpackges';
import { Routes, Route } from 'react-router-dom';
import Gallery from './pages/Gallery';
import TourPackageDetails from './components/TourPackageDetails';
import Gujrat from './pages/Gujrat';
import Rajasthan from './pages/Rajasthan';
import Bhutan from './pages/Bhutan';
import Kashi  from './pages/Kashi';
import Shimla from './pages/Shimla';
import Andaman from './pages/Andaman';
import Hampi from './pages/Hampi';
import Tirupati from './pages/Tirupati';
import Jammu from './pages/Jammu';

 

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
    <Route path='/Gujrat' element={<Gujrat/>}/>
    <Route path='/Rajasthan' element={<Rajasthan/>}/>
    <Route path='/Bhutan' element={<Bhutan/>}/>
    <Route path='/kashi' element={<Kashi/>}/>
    <Route path='/shimla' element={<Shimla/>}/>
    <Route path='/Andaman' element={<Andaman/>}/>
    <Route path='/Hampi' element={<Hampi/>}/>
    <Route path='/Tirupati' element={<Tirupati/>}/>
    <Route path='/jammu' element={<Jammu/>}/>
    </Routes>
    </div>
  );
}

export default App;
