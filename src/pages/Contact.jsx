import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    const children = ref.current?.querySelectorAll('.reveal');
    children?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
};

const Contact = () => {
  const pageRef = useReveal();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can hook up a backend/service here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container" ref={pageRef}>
      <section className="contact-hero reveal">
        <div className="section-head">
          <span className="section-num">04</span>
          <h1 className="section-title">Contact</h1>
          <span className="section-rule" aria-hidden="true"></span>
          <span className="section-meta">// let's connect</span>
        </div>

        <h2 className="contact-heading">
          Let's build something<br />
          <span className="accent-text">amazing together.</span>
        </h2>

        <p className="contact-sub">
          Have a project idea, a collaboration opportunity, or just want to say hi? 
          I'm always open to discussing new projects and creative ideas.
        </p>
      </section>

      <div className="contact-grid">
        {/* ── Contact Cards ── */}
        <div className="contact-cards reveal">
          <a href="mailto:subhashvadaparthi@gmail.com" className="contact-card glass-panel">
            <div className="contact-card-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="contact-card-info">
              <h3>Email</h3>
              <p>subhashvadaparthi@gmail.com</p>
            </div>
            <i className="fas fa-arrow-up-right-from-square contact-card-arrow"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/vadaparthisubhash/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card glass-panel"
          >
            <div className="contact-card-icon linkedin">
              <i className="fab fa-linkedin"></i>
            </div>
            <div className="contact-card-info">
              <h3>LinkedIn</h3>
              <p>vadaparthisubhash</p>
            </div>
            <i className="fas fa-arrow-up-right-from-square contact-card-arrow"></i>
          </a>

          <a
            href="https://github.com/KL2300030695"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card glass-panel"
          >
            <div className="contact-card-icon github">
              <i className="fab fa-github"></i>
            </div>
            <div className="contact-card-info">
              <h3>GitHub</h3>
              <p>KL2300030695</p>
            </div>
            <i className="fas fa-arrow-up-right-from-square contact-card-arrow"></i>
          </a>

          <a
            href="https://www.youtube.com/@ThinkingUpgraded"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card glass-panel"
          >
            <div className="contact-card-icon youtube">
              <i className="fab fa-youtube"></i>
            </div>
            <div className="contact-card-info">
              <h3>YouTube</h3>
              <p>ThinkingUpgraded</p>
            </div>
            <i className="fas fa-arrow-up-right-from-square contact-card-arrow"></i>
          </a>

          {/* Availability */}
          <div className="availability-card glass-panel">
            <div className="availability-header">
              <span className="dot dot-live" aria-hidden="true"></span>
              <span className="availability-status">Available for Opportunities</span>
            </div>
            <p className="availability-desc">
              Open to AI/ML engineering, computer vision, and full-stack development roles. 
              Let's connect if you have something interesting!
            </p>
          </div>
        </div>

        {/* ── Contact Form ── */}
        <div className="contact-form-wrapper reveal">
          <form className="contact-form glass-panel" onSubmit={handleSubmit}>
            <h3 className="form-title">Send a Message</h3>

            <div className="form-group">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about your project or idea..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary form-submit" disabled={submitted}>
              {submitted ? (
                <>
                  <i className="fas fa-check"></i> Message Sent!
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <i className="fas fa-paper-plane"></i>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;