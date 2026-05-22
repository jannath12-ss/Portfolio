import React from "react";
import About from "./components/About";
import"./App.css"
import Education from "./components/Education";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";



function App() {
  return (
    <>
    
    <Hero/>
    <About/>
    <Education/>
    <Skill/>
    <Project/>
    <Contact/>
    <Navbar/>
    <Footer/>
    </>
  )
}

export default App;