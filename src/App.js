
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import ThankYou from './pages/ThankYou';


function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/experience' element={<Experience />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/thankyou' element={<ThankYou />} />
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
