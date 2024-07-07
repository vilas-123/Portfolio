import React from 'react'
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Achievements from './components/Achievements';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Achievements />
      <Contact />
    </>
  );
}

export default App;
