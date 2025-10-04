import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from './Pages/Home'
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import Projects from "./Pages/Projects"

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
