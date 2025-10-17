import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Skills.css'

const Skills = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const colsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const tl = gsap.timeline()
          
          tl.fromTo(titleRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
          )
          .fromTo(colsRef.current.children,
            { opacity: 0, y: 30, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power2.out", stagger: 0.2 },
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
    <section className="competences-section" id="competences" ref={sectionRef}>
      <h2 className="competences-title" ref={titleRef}>Compétences</h2>
      <div className="competences-cols" ref={colsRef}>
        <div className="competence-col">
          <h3>Front end</h3>
          <ul>
            <li><img src="images/html.png" alt="html" /> HTML</li>
            <li><img src="images/css.png" alt="css" /> CSS</li>
            <li><img src="images/js.png" alt="javascript" /> JavaScript</li>
          </ul>
        </div>
        <div className="vertical-bar"></div>
        <div className="competence-col">
          <h3>Back end</h3>
          <ul>
            <li><img src="images/php.png" alt="php" /> PHP</li>
            <li><img src="images/c.png" alt="csharp" /> C#</li>
            <li><img src="images/sql.png" alt="mysql" /> MySQL</li>
            <li><img src="images/python.png" alt="python" /> Python</li>
            <li><img src="images/nodejs.png" alt="nodejs" /> Node.js</li>
          </ul>
        </div>
        <div className="vertical-bar"></div>
        <div className="competence-col">
          <h3>Framework</h3>
          <ul>
            <li><img src="images/react.png" alt="react" /> React</li>
            <li><img src="images/express.png" alt="express" /> Express</li>
         
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills
