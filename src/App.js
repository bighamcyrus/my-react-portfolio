import React from 'react';
import JSXVariables from "./components/JSXVariables";

import Home from "./components/Home";
import About from "./components/about";
import Contact from "./components/Contact";

import NavBar from "./components/NavBar"
import Skills from "./components/skills"
import Work from "./components/work";


function App() {
    return(
      <div>
        <NavBar />
        <h1>.</h1>
        <About />
        <Work />
       
        <Home />
        
        <Contact />

        <Skills />
        
     

      </div>

    );
    // <div>
    //   <h1 >Hello !$World</h1>
    // </div>
  
}

export default App;
