import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

// Import images from public folder
const profileImage = process.env.PUBLIC_URL + "/My profile.jpg";
const h1Image = process.env.PUBLIC_URL + "/h1.jpg";
const h2Image = process.env.PUBLIC_URL + "/h2.png";
const portImage = process.env.PUBLIC_URL + "/port.png";
const resumePdf = process.env.PUBLIC_URL + "/Subhash_Vadaparthi_Resume.pdf";

const Home = () => {
    const featuredProjects = [
        {
            id: 1,
            title: "Hospital Appointment System",
            description: "Full-stack system using Spring Boot, React.js, and MySQL. Features include RESTful APIs, real-time notifications, and automated appointment confirmations.",
            technologies: ["Spring Boot", "React.js", "MySQL", "RESTful APIs", "Postman"],
            image: h1Image,
            github: "https://github.com/KL2300030695/HealthcareAppointmentSystem",
            demo: "#"
        },
        {
            id: 2,
            title: "Hand Tracking and Finger Counting",
            description: "Python-based application using OpenCV and Mediapipe for real-time hand and finger landmark detection, gesture recognition, and performance optimization.",
            technologies: ["Python", "OpenCV", "Mediapipe", "Computer Vision", "AI"],
            image: h2Image,
            github: "https://github.com/KL2300030695/FingerCounting",
            demo: "#"
        },
        {
            id: 3,
            title: "Portfolio Website",
            description: "A modern, responsive portfolio website built with React.js, featuring a dark theme with cyan accents, smooth animations, and interactive components.",
            technologies: ["React.js", "CSS3", "JavaScript", "Responsive Design", "Modern UI"],
            image: portImage,
            github: "https://github.com/KL2300030695/react-portfolio",
            demo: "#"
        }
    ];

    return (
        <div className="home-container">
            <section className="profile-section">
                <div className="profile-image">
                    <img src={profileImage} alt="Subhash Vadaparthi" />
                </div>
                <div className="profile-content">
                    <h1>Subhash Vadaparthi</h1>
                    <p className="profile-title">Full Stack Developer</p>
                    <p className="profile-location">Kakinada, Andhra Pradesh</p>
                    <div className="profile-links">
                        <a href="https://www.linkedin.com/in/subhash-vadaparthi-0a0a2a2a2a/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/KL2300030695" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.youtube.com/@ThinkingUpgraded" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                    <a href={resumePdf} download="Subhash_Vadaparthi_Resume.pdf" className="resume-btn">
                        <i className="fas fa-download"></i> Download Resume
                    </a>
                </div>
            </section>

            <section className="about-section">
                <h2>About Me</h2>
                <p>
                    I am a passionate Full Stack Developer with expertise in Java, Spring Boot, React.js, and various web technologies. 
                    I have a strong foundation in data structures, algorithms, and problem-solving. 
                    My experience includes developing full-stack applications, implementing RESTful APIs, and working with databases.
                </p>
            </section>

            <section className="projects-section">
                <h2>Featured Projects</h2>
                <div className="projects-grid">
                    {featuredProjects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="technologies">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                                        <i className="fab fa-github"></i> GitHub
                                    </a>
                                    {project.demo !== "#" && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="demo-link">
                                            <i className="fas fa-external-link-alt"></i> Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Link to="/projects" className="view-all-btn">
                    View All Projects
                </Link>
            </section>

            <section className="skills-section">
                <h2>Skills</h2>
                <div className="skills-grid">
                    <div className="skill-category">
                        <h3>Languages</h3>
                        <div className="skills-list">
                            <span>Java</span>
                            <span>Python</span>
                            <span>JavaScript</span>
                            <span>C</span>
                            <span>SQL</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3>Web Development</h3>
                        <div className="skills-list">
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>React.js</span>
                            <span>Spring Boot</span>
                            <span>RESTful APIs</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3>Databases</h3>
                        <div className="skills-list">
                            <span>MySQL</span>
                            <span>MongoDB</span>
                            <span>PostgreSQL</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3>Tools & Others</h3>
                        <div className="skills-list">
                            <span>Git</span>
                            <span>Docker</span>
                            <span>Postman</span>
                            <span>AWS</span>
                            <span>Linux</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;