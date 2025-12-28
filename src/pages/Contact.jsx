import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    const socialLinks = [
        {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/in/vadaparthisubhash/",
            icon: "fab fa-linkedin"
        },
        {
            platform: "GitHub",
            url: "https://github.com/KL2300030695",
            icon: "fab fa-github"
        },
        {
            platform: "YouTube",
            url: "https://www.youtube.com/@ThinkingUpgraded",
            icon: "fab fa-youtube"
        }
    ];

    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1 className="section-title">Get In Touch</h1>
                <p className="contact-subtitle">Let's build something amazing together</p>
            </div>
            <div className="contact-content">
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p>
                        Feel free to reach out to me for any inquiries or opportunities.
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>
                    <div className="contact-details">
                        <div className="detail-item">
                            <i className="fas fa-envelope"></i>
                            <div>
                                <h3>Email</h3>
                                <p>2300030695cseh@gmail.com</p>
                            </div>
                        </div>
                        <div className="detail-item">
                            <i className="fas fa-phone"></i>
                            <div>
                                <h3>Phone</h3>
                                <p>+91 6281949783</p>
                            </div>
                        </div>
                        <div className="detail-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <div>
                                <h3>Location</h3>
                                <p>Kakinada, Andhra Pradesh</p>
                            </div>
                        </div>
                    </div>
                    <div className="social-links">
                        {socialLinks.map((social, index) => (
                            <a 
                                key={index} 
                                href={social.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="social-link"
                            >
                                <i className={social.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;