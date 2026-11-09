import React from 'react'
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/ResumeProjects";
import Achievements from './components/Achievements';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Achievements />
      <Contact />
    </>
  );
}

export default App;
