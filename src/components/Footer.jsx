import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p className="footer-text">© 2025 Lucas Gonzalez. Tous droits réservés.</p>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <a href="https://github.com/LucasGonz27" target="_blank" rel="noopener noreferrer" className="footer-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/lucas_gzlez27/?hl" target="_blank" rel="noopener noreferrer" className="footer-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="mailto:lucas.gonzalez@example.com" className="footer-link">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
