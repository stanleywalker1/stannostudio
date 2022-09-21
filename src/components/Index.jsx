import { Home } from "./Home";
import Contact from "./Contact";
import Skills from "./Skills";
import Projects from "./Projects";
import Background from "./Background";
import About from "./About"
import React from "react";

const Index = () => {
    return (
    <React.Fragment>
      <Background/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      </React.Fragment>
    )
}

export default Index