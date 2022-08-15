import React from 'react';
import JSXVariables from "./components/JSXVariables";


import About from "./components/about";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import skills from "./components/skills";
import Work from "./components/work";


function App() {
    return(
      <div>
      <JSXVariables />
      <About />
      <Contact />
      <Home />
      <Navbar />
      <skills />
      <Work />

      </div>

    );
    // <div>
    //   <h1 >Hello !$World</h1>
    // </div>
  
}

export default App;
