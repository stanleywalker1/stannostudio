import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Background from "./components/Background";
import NYU from "./components/NYU";
import {Routes, Route} from 'react-router-dom'; 

function App() {
  return (
    <div>
      {/* https://www.youtube.com/watch?v=2kg0z1qNrkw */}
      <Navbar/>
      <Routes>
        <Route path='NYU' element={<NYU/>}/>
      </Routes>
      <Background/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
