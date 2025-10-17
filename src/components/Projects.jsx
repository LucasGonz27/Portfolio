import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Projects.css'

const Projects = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const gridRef = useRef(null)

  const projects = [
    {
      id: 1,
      image: 'images/gonzboutikPhp.jpg',
      title: 'GonzBoutik PHP',
      technologies: 'PHP, MySQL, HTML, CSS',
      link: 'https://github.com/LucasGonz27/GonzBoutikPhp.git'
    },
    {
      id: 2,
      image: 'images/AppliGonzBoutik.jpg',
      title: 'GonzBoutik App',
      technologies: 'C#, MySQL, WPF',
      link: 'https://github.com/LucasGonz27/GonzalezBoutique.git'
    },
    {
      id: 3,
      image: 'images/aacrmi.jpg',
      title: 'AACRMI Association',
      technologies: 'HTML, CSS, JavaScript',
      link: 'https://aacrmi-section-aude.fr/'
    },
    {
      id: 4,
      image: 'images/audrey.jpg',
      title: 'Audrey Garcia',
      technologies: 'HTML, CSS, JavaScript',
      link: 'https://www.audreygarcia.fr/'
    },
    {
      id: 5,
      image: 'images/pdfrename.jpg',
      title: 'Renommage de factures',
      technologies: 'HTML, CSS, JavaScript, API OpenAI, Cursor,',
      link: 'https://www.audreygarcia.fr/'
    },
    {
      id: 6,
      image: 'images/jobboard.jpg',
      title: 'JobBoard',
      technologies: 'React, Node.js, Express, MySQL',
      link: 'https://www.audreygarcia.fr/'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const tl = gsap.timeline()
          
          tl.fromTo(titleRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
          )
          .fromTo(gridRef.current.children,
            { opacity: 0, y: 30, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power2.out", stagger: 0.15 },
            "-=0.4"
          )
        }
      })
    }, { threshold: 0.3 })

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="projets-section" id="projets" ref={sectionRef}>
      <h2 className="projets-title" ref={titleRef}>Projets</h2>
      <div className="projets-grid" ref={gridRef}>
        {projects.map((project) => (
          <a 
            key={project.id} 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="projet-card"
          >
            <img src={project.image} alt={project.title} className="projet-img" />
            <div className="projet-overlay">
              <h3 className="projet-title">{project.title}</h3>
              <p className="projet-tech">{project.technologies}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects
