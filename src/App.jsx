import React, { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="main-bg">
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
