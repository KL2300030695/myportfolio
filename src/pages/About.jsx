import React from 'react';
import './About.css';

// Import images from public folder
const cloudArtImage = "/cloud art.png";
const cloudFounImage = "/cloud foun.png";
const oracleImage = "/oracle.png";
const salesforceImage = "/salesforce.png";

const About = () => {
    const education = [
        {
            degree: "Bachelor of Technology in Computer Science and Engineering",
            institution: "K L University",
            year: "2023 - 2027",
            cgpa: "9.5 CGPA"
        },
        {
            degree: "Intermediate (MPC)",
            institution: "Aditya Junior College",
            year: "2021 - 2023",
            cgpa: "9.65 CGPA"
        },
        {
            degree: "Secondary School Certificate",
            institution: "Akshara School",
            year: "2009 - 2021",
            cgpa: "9.67 CGPA"
        }
    ];

    const skills = {
        aiMl: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Deep Learning", "Neural Networks"],
        computerVision: ["OpenCV", "MediaPipe", "YOLO", "Image Processing", "Object Detection", "Hand Tracking"],
        fullStack: ["React.js", "Spring Boot", "Node.js", "JavaScript", "RESTful APIs", "MySQL"],
        cloudTools: ["AWS", "Docker", "Git", "MongoDB", "PostgreSQL", "Linux"]
    };

    const certifications = [
        {
            title: "AWS Academy Cloud Architecting",
            issuer: "Amazon Web Services",
            year: "2024",
            image: cloudArtImage,
            link: "https://www.credly.com/badges/a2dc5280-7c94-43ff-a3dd-4040d864731c/"
        },
        {
            title: "AWS Academy Cloud Foundations",
            issuer: "Amazon Web Services",
            year: "2024",
            image: cloudFounImage,
            link: "https://www.credly.com/badges/d4843a9d-cb4f-42a6-adb9-3b2bf5caab4f/"
        },
        {
            title: "Oracle AI Foundations Associate",
            issuer: "Oracle",
            year: "2024",
            image: oracleImage,
            link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=03BA9977CAF87D9D7B6932D33AF45136EC69664482D5D5E342DD7CD1DF343E54"
        },
        {
            title: "Salesforce Developer",
            issuer: "Salesforce",
            year: "2024",
            image: salesforceImage,
            link: "https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=OOHwzBTlMCg+sNyCveLvxLhCBe9hX5XTB899ZsbimVrYgj+d1fQpo8AmDErpCU8h"
        }
    ];

    return (
        <div className="about-container">
            <section className="about-section glass-panel">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <p className="about-text">
                        I'm a passionate developer specializing in <span className="accent-text">AI Systems</span>, 
                        <span className="accent-text"> Computer Vision</span>, and <span className="accent-text">Full-Stack Development</span>. 
                        My journey combines deep learning research with practical software engineering, creating intelligent solutions 
                        that solve real-world problems.
                    </p>
                    <p className="about-text">
                        With expertise in Python, OpenCV, MediaPipe, and modern web technologies, I build systems that process 
                        visual data, understand patterns, and deliver seamless user experiences. My work spans from computer vision 
                        applications to full-stack AI-powered platforms.
                    </p>
                    <div className="interests">
                        <h3>Interests & Focus Areas</h3>
                        <div className="interests-grid">
                            <div className="interest-item">
                                <i className="fas fa-brain"></i>
                                <span>Machine Learning</span>
                            </div>
                            <div className="interest-item">
                                <i className="fas fa-eye"></i>
                                <span>Computer Vision</span>
                            </div>
                            <div className="interest-item">
                                <i className="fas fa-network-wired"></i>
                                <span>Neural Networks</span>
                            </div>
                            <div className="interest-item">
                                <i className="fas fa-code"></i>
                                <span>Full-Stack AI</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="education-section">
                <h2>Education</h2>
                <div className="education-grid">
                    {education.map((edu, index) => (
                        <div key={index} className="education-card">
                            <h3>{edu.degree}</h3>
                            <p className="institution">{edu.institution}</p>
                            <p className="year">{edu.year}</p>
                            <p className="cgpa">{edu.cgpa}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="skills-section">
                <h2 className="section-title">Skills & Expertise</h2>
                <div className="skills-grid">
                    <div className="skill-category glass-panel">
                        <div className="skill-icon">
                            <i className="fas fa-brain"></i>
                        </div>
                        <h3>AI & Machine Learning</h3>
                        <div className="skills-list">
                            {skills.aiMl.map((skill, index) => (
                                <span key={index} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div className="skill-category glass-panel">
                        <div className="skill-icon">
                            <i className="fas fa-eye"></i>
                        </div>
                        <h3>Computer Vision</h3>
                        <div className="skills-list">
                            {skills.computerVision.map((skill, index) => (
                                <span key={index} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div className="skill-category glass-panel">
                        <div className="skill-icon">
                            <i className="fas fa-code"></i>
                        </div>
                        <h3>Full Stack Development</h3>
                        <div className="skills-list">
                            {skills.fullStack.map((skill, index) => (
                                <span key={index} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div className="skill-category glass-panel">
                        <div className="skill-icon">
                            <i className="fas fa-cloud"></i>
                        </div>
                        <h3>Cloud & Tools</h3>
                        <div className="skills-list">
                            {skills.cloudTools.map((skill, index) => (
                                <span key={index} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="certifications-section">
                <h2>Certifications</h2>
                <div className="certifications-grid">
                    {certifications.map((cert, index) => (
                        <a 
                            key={index} 
                            href={cert.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="certification-card"
                        >
                            <div className="cert-image">
                                <img src={cert.image} alt={cert.title} />
                            </div>
                            <div className="cert-content">
                                <h3>{cert.title}</h3>
                                <p className="issuer">{cert.issuer}</p>
                                <p className="year">{cert.year}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;