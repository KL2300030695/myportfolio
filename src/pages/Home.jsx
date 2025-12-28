import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

// Import images from public folder
const profileImage = "/myportfolio/My profile.jpg";
const h1Image = "/myportfolio/h1.jpg";
const h2Image = "/myportfolio/h2.png";
const portImage = "/myportfolio/port.png";
const resumePdf = "/myportfolio/Subhash_Vadaparthi_Resume.pdf";

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
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <div className="hero-text">
                        <p className="hero-greeting">Hi, I'm</p>
                        <h1 className="hero-name accent-text">Subhash Vadaparthi</h1>
                        <p className="hero-tagline">AI Systems | Computer Vision | Full Stack Developer</p>
                        <p className="hero-description">
                            Building intelligent systems that bridge the gap between AI research and real-world applications. 
                            Specialized in Computer Vision, Machine Learning, and Full-Stack Development.
                        </p>
                        <div className="hero-buttons">
                            <a href={resumePdf} download="Subhash_Vadaparthi_Resume.pdf" className="btn-primary">
                                <i className="fas fa-download"></i> Download CV
                            </a>
                            <Link to="/myportfolio/projects" className="btn-secondary">
                                <i className="fas fa-code"></i> View Projects
                            </Link>
                        </div>
                        <div className="hero-social">
                            <a href="https://www.linkedin.com/in/vadaparthisubhash/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/KL2300030695" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.youtube.com/@ThinkingUpgraded" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                    <div className="hero-image-wrapper">
                        <div className="profile-image-glow"></div>
                        <div className="profile-image-container">
                            <img src={profileImage} alt="Subhash Vadaparthi" className="profile-image" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Brief Intro */}
            <section className="intro-section glass-panel">
                <p className="intro-text">
                    I'm a passionate developer specializing in <span className="accent-text">AI Systems</span>, 
                    <span className="accent-text"> Computer Vision</span>, and <span className="accent-text">Full-Stack Development</span>. 
                    I transform complex algorithms into practical solutions, combining deep learning expertise with modern web technologies 
                    to create intelligent applications that make a difference.
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
                                <h2>{project.title}</h2>
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
                <div className="view-all-projects">
                    <Link to="/myportfolio/projects" className="view-projects-btn">
                        View All Projects <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
            </section>

            <section className="skills-section">
                <h2 className="section-title">Core Expertise</h2>
                <div className="skills-grid">
                    <div className="skill-category glass-panel">
                        <div className="skill-icon">
                            <i className="fas fa-brain"></i>
                        </div>
                        <h3>AI & Machine Learning</h3>
                        <div className="skills-list">
                            <span className="skill-tag">Python</span>
                            <span className="skill-tag">TensorFlow</span>
                            <span className="skill-tag">PyTorch</span>
                            <span className="skill-tag">Scikit-learn</span>
                            <span className="skill-tag">Deep Learning</span>
                        </div>
                    </div>
                    <div className="skill-category glass-panel">
                        <div className="skill-icon">
                            <i className="fas fa-eye"></i>
                        </div>
                        <h3>Computer Vision</h3>
                        <div className="skills-list">
                            <span className="skill-tag">OpenCV</span>
                            <span className="skill-tag">MediaPipe</span>
                            <span className="skill-tag">YOLO</span>
                            <span className="skill-tag">Image Processing</span>
                            <span className="skill-tag">Object Detection</span>
                        </div>
                    </div>
                    <div className="skill-category glass-panel">
                        <div className="skill-icon">
                            <i className="fas fa-code"></i>
                        </div>
                        <h3>Full Stack</h3>
                        <div className="skills-list">
                            <span className="skill-tag">React.js</span>
                            <span className="skill-tag">Spring Boot</span>
                            <span className="skill-tag">Node.js</span>
                            <span className="skill-tag">RESTful APIs</span>
                            <span className="skill-tag">JavaScript</span>
                        </div>
                    </div>
                    <div className="skill-category glass-panel">
                        <div className="skill-icon">
                            <i className="fas fa-cloud"></i>
                        </div>
                        <h3>Cloud & DevOps</h3>
                        <div className="skills-list">
                            <span className="skill-tag">AWS</span>
                            <span className="skill-tag">Docker</span>
                            <span className="skill-tag">Git</span>
                            <span className="skill-tag">MySQL</span>
                            <span className="skill-tag">MongoDB</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;