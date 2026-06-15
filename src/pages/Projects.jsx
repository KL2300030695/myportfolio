import React, { useEffect, useRef } from 'react';
import './Projects.css';

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

const projects = [
  {
    num: '01',
    title: 'SurakshaPay AI',
    subtitle: 'AI-Powered Fraud Detection Payment System',
    period: '2025',
    description:
      'An intelligent fintech security system by VisionRise that uses computer vision and AI to detect fraudulent transactions in real-time. Features face verification, anomaly detection alerts, transaction monitoring dashboards, and real-time fraud risk scoring for secure digital payments.',
    tags: ['Python', 'Computer Vision', 'AI/ML', 'Fraud Detection', 'FinTech', 'Deep Learning'],
    metrics: [
      { value: 'Real-time', label: 'fraud detection' },
      { value: 'CV', label: 'face verification' },
      { value: 'AI', label: 'risk scoring' },
    ],
    github: 'https://github.com/KL2300030695/VisionRise-s-SurakshaPay-AI',
    image: '/proj-surakshapay.png',
  },
  {
    num: '02',
    title: 'AI Placement Copilot',
    subtitle: 'Intelligent HRTech Placement Dashboard',
    period: '2025',
    description:
      'An intelligent HRTech dashboard designed to automate candidate shortlisting, resume parsing, and fitment scoring for academic institutions and enterprise placement activities. Features automated candidate ranking, skills-match visualization, and data-driven placement insights.',
    tags: ['Python', 'AI/ML', 'NLP', 'React.js', 'Resume Parsing', 'Dashboard'],
    metrics: [
      { value: 'Auto', label: 'shortlisting' },
      { value: 'NLP', label: 'resume parsing' },
      { value: 'Smart', label: 'fitment scoring' },
    ],
    github: 'https://github.com/KL2300030695/AI-Placement-Copilot',
    image: '/proj-placement.png',
  },
  {
    num: '03',
    title: 'CodeArena',
    subtitle: 'Client-Side Coding Practice Platform',
    period: '2025',
    description:
      'A premium, fully client-side coding practice platform for TCS NQT 2026 preparation featuring a built-in code editor with syntax highlighting, live execution engine, test case validation, and a curated problem bank — all running entirely in the browser with zero backend.',
    tags: ['JavaScript', 'HTML/CSS', 'Code Editor', 'WebAssembly', 'UI/UX', 'Education'],
    metrics: [
      { value: 'Zero', label: 'backend needed' },
      { value: 'Live', label: 'code execution' },
      { value: 'TCS NQT', label: 'preparation' },
    ],
    github: 'https://github.com/KL2300030695/CodeArena',
    image: '/proj-codearena.png',
  },
  {
    num: '04',
    title: 'OpenEnv Hackathon',
    subtitle: 'RL Environment for Healthcare Scheduling',
    period: '2025',
    description:
      'An OpenEnv reinforcement learning environment for healthcare appointment scheduling. Features custom RL tasks, reward functions, grading systems, and API deployment — enabling AI agents to learn optimal scheduling strategies for doctors and patients.',
    tags: ['Python', 'Reinforcement Learning', 'OpenAI Gym', 'FastAPI', 'Healthcare', 'AI'],
    metrics: [
      { value: 'RL', label: 'environment' },
      { value: 'Custom', label: 'reward functions' },
      { value: 'API', label: 'deployment' },
    ],
    github: 'https://github.com/KL2300030695/openenv-hackathon',
    image: '/proj-openenv.png',
  },
  {
    num: '05',
    title: 'Airbnb Smart Search Agent',
    subtitle: 'AI-Powered Natural Language Search',
    period: '2025',
    description:
      'An AI-powered tool that enables users to search Airbnb listings using natural language and receive personalized accommodation recommendations based on preferences like location, price, amenities, and guest reviews. Built with intelligent agent architecture.',
    tags: ['Python', 'LLM', 'NLP', 'AI Agents', 'Search', 'Recommendations'],
    metrics: [
      { value: 'NLP', label: 'search queries' },
      { value: 'AI', label: 'recommendations' },
      { value: 'Smart', label: 'agent' },
    ],
    github: 'https://github.com/KL2300030695/AirbnbSmartSearchAgent',
    image: '/proj-airbnb.png',
  },
  {
    num: '06',
    title: 'Driver Drowsiness Detection',
    subtitle: 'Real-Time Computer Vision Safety System',
    period: '2024',
    description:
      'A real-time computer vision system that detects driver drowsiness using facial landmark analysis. Monitors eye aspect ratio, blink frequency, and yawn detection to trigger alerts when drowsiness is detected — helping prevent road accidents.',
    tags: ['Python', 'OpenCV', 'dlib', 'Computer Vision', 'Deep Learning', 'Safety'],
    metrics: [
      { value: '68', label: 'facial landmarks' },
      { value: 'Real-time', label: 'detection' },
      { value: 'Alert', label: 'system' },
    ],
    github: 'https://github.com/KL2300030695/DriverDrowsinessDetection',
    image: '/proj-drowsiness.png',
  },
  {
    num: '07',
    title: 'InfoFlow AI',
    subtitle: 'AI Information Flow & Knowledge Management',
    period: '2024',
    description:
      'An AI-powered information flow and knowledge management system that processes, analyzes, and organizes data through intelligent pipelines. Features document analysis, AI-generated summaries, semantic search, and connected knowledge graphs.',
    tags: ['Python', 'AI/ML', 'NLP', 'Knowledge Graph', 'Data Pipeline', 'Search'],
    metrics: [
      { value: 'AI', label: 'summaries' },
      { value: 'Semantic', label: 'search' },
      { value: 'Smart', label: 'pipelines' },
    ],
    github: 'https://github.com/KL2300030695/InfoFlowAI',
    image: '/proj-infoflow.png',
  },
  {
    num: '08',
    title: 'Ferender',
    subtitle: 'Frontend Rendering & Development Tool',
    period: '2024',
    description:
      'A frontend rendering engine and development tool designed for rapid prototyping and component visualization. Features a visual component builder, live preview system, component tree navigation, and style inspection capabilities.',
    tags: ['JavaScript', 'React.js', 'CSS', 'UI/UX', 'Developer Tools', 'Rendering'],
    metrics: [
      { value: 'Live', label: 'preview' },
      { value: 'Visual', label: 'builder' },
      { value: 'Fast', label: 'rendering' },
    ],
    github: 'https://github.com/KL2300030695/ferender',
    image: '/proj-ferender.png',
  },
];

const Projects = () => {
  const pageRef = useReveal();

  return (
    <div className="projects-container" ref={pageRef}>
      <section className="projects-hero reveal">
        <div className="section-head">
          <span className="section-num">01</span>
          <h1 className="section-title">Projects</h1>
          <span className="section-rule" aria-hidden="true"></span>
          <span className="section-meta">// all work</span>
        </div>

        <p className="projects-intro">
          A collection of {projects.length} projects spanning AI, Computer Vision, Full-Stack Development, 
          and FinTech. Each project represents a challenge solved and a skill sharpened.
        </p>
      </section>

      <div className="projects-list">
        {projects.map((p, index) => (
          <article
            key={p.num}
            className="project-showcase reveal glass-panel"
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <div className="project-showcase-left">
              <div className="project-showcase-head">
                <span className="project-showcase-num">{p.num}</span>
                <span className="project-showcase-period">{p.period}</span>
              </div>

              <div className="project-showcase-image">
                <img src={p.image} alt={p.title} loading="lazy" />
              </div>
            </div>

            <div className="project-showcase-right">
              <h2 className="project-showcase-title">{p.title}</h2>
              <p className="project-showcase-subtitle">{p.subtitle}</p>
              <p className="project-showcase-desc">{p.description}</p>

              <div className="project-showcase-metrics">
                {p.metrics.map((m, i) => (
                  <div key={i} className="project-metric">
                    <span className="project-metric-val">{m.value}</span>
                    <span className="project-metric-label">{m.label}</span>
                  </div>
                ))}
              </div>

              <div className="project-showcase-tags">
                {p.tags.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>

              <div className="project-showcase-actions">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  <i className="fab fa-github"></i>
                  View on GitHub
                  <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '0.7rem', opacity: 0.5 }}></i>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;