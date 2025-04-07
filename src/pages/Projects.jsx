import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Hospital Appointment System",
            description: "Full-stack system using Spring Boot, React.js, and MySQL. Features include RESTful APIs, real-time notifications, and automated appointment confirmations.",
            technologies: ["Spring Boot", "React.js", "MySQL", "RESTful APIs", "Postman"],
            image: "/h1.jpg",
            github: "https://github.com/KL2300030695/HealthcareAppointmentSystem",
            demo: "#"
        },
        {
            id: 2,
            title: "Hand Tracking and Finger Counting",
            description: "Python-based application using OpenCV and Mediapipe for real-time hand and finger landmark detection, gesture recognition, and performance optimization.",
            technologies: ["Python", "OpenCV", "Mediapipe", "Computer Vision", "AI"],
            image: "/h2.png",
            github: "https://github.com/KL2300030695/FingerCounting",
            demo: "#"
        },
        {
            id: 3,
            title: "Portfolio Website",
            description: "A modern, responsive portfolio website built with React.js, featuring a dark theme with cyan accents, smooth animations, and interactive components.",
            technologies: ["React.js", "CSS3", "JavaScript", "Responsive Design", "Modern UI"],
            image: "/port.png",
            github: "https://github.com/KL2300030695/react-portfolio",
            demo: "#"
        }
    ];

    const codingProfiles = [
        {
            platform: "CodeChef",
            link: "https://www.codechef.com/users/klu2300030695",
            icon: "fab fa-code"
        },
        {
            platform: "LeetCode",
            link: "https://leetcode.com/KL2300030695",
            icon: "fas fa-code"
        },
        {
            platform: "HackerRank",
            link: "https://www.hackerrank.com/profile/h2300030695",
            icon: "fab fa-hackerrank"
        },
        {
            platform: "GeeksforGeeks",
            link: "https://www.geeksforgeeks.org/user/user_xsh9ho5yu0u/",
            icon: "fas fa-code"
        }
    ];

    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            <div className="projects-grid">
                {projects.map((project) => (
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

            <div className="coding-profiles">
                <h2>Coding Profiles</h2>
                <div className="profiles-grid">
                    {codingProfiles.map((profile, index) => (
                        <a
                            key={index}
                            href={profile.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="profile-card"
                        >
                            <i className={profile.icon}></i>
                            <span>{profile.platform}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;