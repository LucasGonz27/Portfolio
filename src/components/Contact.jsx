import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    tel: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const formRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const tl = gsap.timeline()
          
          tl.fromTo(titleRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
          )
          .fromTo(formRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitMessage("L'email a bien été envoyé.")
        setFormData({ nom: '', email: '', tel: '', message: '' })
      } else {
        setSubmitMessage("Erreur lors de l'envoi. Veuillez réessayer.")
      }
    } catch (error) {
      setSubmitMessage("Erreur lors de l'envoi. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact-section" id="contact" ref={sectionRef}>
      <div className="contact-container">
        <h2 className="contact-title" ref={titleRef}>
          Contactez-moi
        </h2>
        
        {submitMessage && (
          <div className={`alert ${submitMessage.includes('bien été envoyé') ? 'alert-success' : 'alert-danger'}`}>
            {submitMessage}
          </div>
        )}

        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nom" className="form-label">
              Nom
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              className="form-control"
              placeholder="John Doe"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="email@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="tel" className="form-label">
              Téléphone
            </label>
            <input
              type="tel"
              id="tel"
              name="tel"
              className="form-control"
              placeholder="06 12 34 56 78"
              value={formData.tel}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="form-control textarea"
              rows="5"
              placeholder="Tapez votre message ici."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          
          <button
            type="submit"
            className="btn-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
