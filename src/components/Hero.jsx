import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef(null)
  const subtitleRef = useRef(null)
  const titleRef = useRef(null)
  const buttonsRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    
    tl.fromTo(subtitleRef.current, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo(buttonsRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    )
  }, [])

  return (
    <main className="hero-section" ref={heroRef}>
      <p className="subtitle" ref={subtitleRef}>Salut, je suis Lucas Gonzalez. Un développeur passionné.</p>
      <h1 className="hero-title" ref={titleRef}>
        Développeur Web & Logiciel <span className="blinking">|</span>
      </h1>
      <div className="hero-btns" ref={buttonsRef}>
        <a href="#" className="hero-btn">Download CV</a>
        <a href="#contact" className="hero-btn secondary">Contact Me</a>
      </div>
    </main>
  )
}

export default Hero
