import React, { useState, useEffect } from 'react'
import './Navigation.css'

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isSocialOpen, setIsSocialOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.capsule-menu')) {
        setIsNavOpen(false)
        setIsSocialOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const toggleNav = (e) => {
    e.stopPropagation()
    setIsNavOpen(!isNavOpen)
    setIsSocialOpen(false)
  }

  const toggleSocial = (e) => {
    e.stopPropagation()
    setIsSocialOpen(!isSocialOpen)
    setIsNavOpen(false)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsNavOpen(false)
    setIsSocialOpen(false)
  }

  return (
    <nav className="capsule-menu">
      <div className="menu-group">
        <span 
          className="menu-link nav-toggle" 
          onClick={toggleNav}
        >
          Navigation
        </span>
        <div className={`dropdown-menu ${isNavOpen ? 'open' : ''}`}>
          <a 
            href="#competences" 
            className="dropdown-link"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('competences')
            }}
          >
            Compétences
          </a>
          <a 
            href="#projets" 
            className="dropdown-link"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('projets')
            }}
          >
            Projets
          </a>
          <a 
            href="#contact" 
            className="dropdown-link"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('contact')
            }}
          >
            Contact
          </a>
        </div>
        
        <span 
          className="menu-link nav-toggle-social" 
          onClick={toggleSocial}
        >
          Social
        </span>
        <div className={`dropdown-menu-social ${isSocialOpen ? 'open' : ''}`}>
          <a 
            href="https://www.linkedin.com/in/lucas-gonzalez-62a876333/" 
            className="dropdown-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <a 
            href='images/snapcode.png' 
            className="dropdown-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Snapchat
          </a>
          <a 
            href="https://github.com/LucasGonz27" 
            className="dropdown-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
