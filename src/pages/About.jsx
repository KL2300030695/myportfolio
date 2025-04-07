import React from 'react';
import './About.css';

// Import images from public folder
const cloudArtImage = "/myportfolio/cloud art.png";
const cloudFounImage = "/myportfolio/cloud foun.png";
const oracleImage = "/myportfolio/oracle.png";
const salesforceImage = "/myportfolio/salesforce.png";

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
            institution: "Sri Chaitanya School",
            year: "2009 - 2021",
            cgpa: "9.67 CGPA"
        }
    ];

    const skills = {
        languages: ["Java", "Python", "JavaScript", "C", "SQL"],
        webDevelopment: ["HTML5", "CSS3", "React.js", "Spring Boot", "RESTful APIs"],
        databases: ["MySQL", "MongoDB", "PostgreSQL"],
        cloud: ["AWS", "Docker", "Linux"],
        tools: ["Git", "Postman", "VS Code", "Eclipse", "IntelliJ IDEA"]
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
            link: "https://www.credly.com/badges/8a8a8a8a-8a8a-8a8a-8a8a-8a8a8a8a8a8a/"
        },
        {
            title: "Salesforce Developer",
            issuer: "Salesforce",
            year: "2024",
            image: salesforceImage,
            link: "https://trailhead.salesforce.com/en/credentials/verification/"
        }
    ];

    return (
        <div className="about-container">
            <section className="about-section">
                <h2>Professional Summary</h2>
                <p>
                    I am a passionate Full Stack Developer with expertise in Java, Spring Boot, React.js, and various web technologies. 
                    I have a strong foundation in data structures, algorithms, and problem-solving. 
                    My experience includes developing full-stack applications, implementing RESTful APIs, and working with databases.
                </p>
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
                <h2>Skills & Expertise</h2>
                <div className="skills-grid">
                    <div className="skill-category">
                        <h3>Languages</h3>
                        <div className="skills-list">
                            {skills.languages.map((skill, index) => (
                                <span key={index} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3>Web Development</h3>
                        <div className="skills-list">
                            {skills.webDevelopment.map((skill, index) => (
                                <span key={index} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3>Databases</h3>
                        <div className="skills-list">
                            {skills.databases.map((skill, index) => (
                                <span key={index} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3>Cloud & Tools</h3>
                        <div className="skills-list">
                            {skills.cloud.map((skill, index) => (
                                <span key={index} className="skill-tag">{skill}</span>
                            ))}
                            {skills.tools.map((skill, index) => (
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