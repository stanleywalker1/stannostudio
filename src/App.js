//import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Index from "./components/Index";
import NYU from "./components/NYU";
import {Routes, Route} from 'react-router-dom'; 

function App() {
  return (
    <div>
      {/* https://www.youtube.com/watch?v=2kg0z1qNrkw */}
      <Navbar/>

      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/NYU' element={<NYU/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
