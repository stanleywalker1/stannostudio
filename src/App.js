//import About from "./components/About";

import { useLocation } from 'react-router-dom';

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Index from "./components/Index";
import NYU from "./components/NYU";
import MIT from "./components/MIT"
import Temples from './components/Temples';
import {Routes, Route} from 'react-router-dom'; 
import GalleryNavbar from "./components/GalleryNavbar";
import "./customCursor.css";
import "./customCursor"
import GenAIContent from "./components/GenAIContent";

function App() {

  const location = useLocation();
  return (
    <div>
      <div className="cursor-custom">
        <Navbar />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/NYU' element={<NYU />} />
        </Routes>
        <Routes>
          <Route path='/' element={<GalleryNavbar />} />
          <Route path='/mitmedialab' element={<MIT />} />
        </Routes>
        <Routes>
          {/* <Route path='/' element={<GalleryNavbar />} /> */}
          <Route path='/exploration' element={<GenAIContent />} />
        </Routes>
        <Routes>
          <Route path='/' element={<GalleryNavbar />} />
          <Route path='/jewsofnewyork' element={<Temples />} />
        </Routes>
        {/* Conditionally render Footer */}
        {location.pathname !== '/exploration' && <Footer />}
      </div>
  </div>
  );
}

export default App;
