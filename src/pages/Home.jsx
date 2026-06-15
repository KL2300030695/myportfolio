import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const profileImage = "/My profile.jpg";
const resumePdf = "/Subhash_Vadaparthi_Resume.pdf";

/* ── Animated counter hook ── */
const useCountUp = (target, duration = 1800) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const increment = target / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return [count, ref];
};

/* ── Live clock ── */
const useClock = () => {
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
          timeZone: 'Asia/Kolkata',
        }) + ' IST'
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
};

/* ── Scroll reveal hook ── */
const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    const children = ref.current?.querySelectorAll('.reveal');
    children?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
};

const featuredProjects = [
  {
    id: 1,
    num: '01',
    title: 'SurakshaPay AI',
    subtitle: 'AI-powered fraud detection payment system',
    description:
      'Intelligent fintech security system using computer vision and AI for real-time fraud detection, face verification, and transaction risk scoring.',
    tags: ['Python', 'Computer Vision', 'AI/ML', 'FinTech'],
    metrics: [
      { value: 'Real-time', label: 'fraud detection' },
      { value: 'CV', label: 'face verification' },
    ],
    github: 'https://github.com/KL2300030695/VisionRise-s-SurakshaPay-AI',
    image: '/proj-surakshapay.png',
  },
  {
    id: 2,
    num: '02',
    title: 'AI Placement Copilot',
    subtitle: 'Intelligent HRTech placement dashboard',
    description:
      'HRTech dashboard automating candidate shortlisting, resume parsing, and fitment scoring for academic and enterprise placement activities.',
    tags: ['Python', 'AI/ML', 'NLP', 'React.js'],
    metrics: [
      { value: 'Auto', label: 'shortlisting' },
      { value: 'NLP', label: 'resume parsing' },
    ],
    github: 'https://github.com/KL2300030695/AI-Placement-Copilot',
    image: '/proj-placement.png',
  },
  {
    id: 3,
    num: '03',
    title: 'CodeArena',
    subtitle: 'Client-side coding practice platform',
    description:
      'A premium coding practice platform for TCS NQT prep with a built-in code editor, live execution engine, and test case validation — all in-browser.',
    tags: ['JavaScript', 'HTML/CSS', 'Code Editor', 'Education'],
    metrics: [
      { value: 'Zero', label: 'backend needed' },
      { value: 'Live', label: 'code execution' },
    ],
    github: 'https://github.com/KL2300030695/CodeArena',
    image: '/proj-codearena.png',
  },
];

const Home = () => {
  const clock = useClock();
  const pageRef = useReveal();

  const [projectCount, projectRef] = useCountUp(8);
  const [techCount, techRef] = useCountUp(15);
  const [domainCount, domainRef] = useCountUp(5);

  return (
    <div className="home-container" ref={pageRef}>
      {/* ═══════════ HERO ═══════════ */}
      <section className="hero" aria-labelledby="hero-name">
        <div className="hero-grid" aria-hidden="true"></div>
        <div className="hero-glow" aria-hidden="true"></div>

        <div className="hero-meta">
          <span className="dot dot-live" aria-hidden="true"></span>
          <span>OPERATOR · ON DUTY</span>
          <span className="dim">/</span>
          <span>{clock}</span>
          <span className="dim">/</span>
          <span>INDIA · 17.38°N 78.49°E</span>
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <h1 id="hero-name" className="hero-name">
              <span className="hero-line">Subhash</span>
              <span className="hero-line hero-line-2">
                Vadaparthi<em className="hero-cursor" aria-hidden="true"></em>
              </span>
            </h1>

            <p className="hero-role">
              <span>AI Systems</span>
              <span className="dim">·</span>
              <span>Computer Vision</span>
              <span className="dim">·</span>
              <span>Full Stack Developer</span>
            </p>

            <p className="hero-lede">
              Building intelligent systems that bridge AI research and real-world applications. 
              I turn complex algorithms into practical solutions — combining deep learning expertise 
              with modern web technologies to create applications that make a difference.
            </p>

            <div className="hero-cta">
              <Link to="/projects" className="btn btn-primary">
                <span>View Projects</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
              <Link to="/contact" className="btn btn-ghost">
                <span className="dot dot-warm" aria-hidden="true"></span>
                Contact Me
              </Link>
              <a href={resumePdf} download className="btn btn-ghost">
                <i className="fas fa-download"></i>
                Download CV
              </a>
            </div>

            <div className="hero-social">
              <a href="https://www.linkedin.com/in/vadaparthisubhash/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/KL2300030695" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.youtube.com/@ThinkingUpgraded" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-image-ring" aria-hidden="true"></div>
            <div className="hero-image-container">
              <img src={profileImage} alt="Subhash Vadaparthi" className="hero-image" />
            </div>
          </div>
        </div>

        <div className="hero-stat-strip">
          <div className="stat" ref={projectRef}>
            <span className="stat-num">{projectCount}+</span>
            <span className="stat-label">projects shipped</span>
          </div>
          <div className="stat" ref={techRef}>
            <span className="stat-num">{techCount}+</span>
            <span className="stat-label">technologies</span>
          </div>
          <div className="stat" ref={domainRef}>
            <span className="stat-num">{domainCount}+</span>
            <span className="stat-label">domains covered</span>
          </div>
          <div className="stat stat-accent">
            <span className="stat-num"><i className="fas fa-brain"></i></span>
            <span className="stat-label">AI focused</span>
          </div>
        </div>
      </section>

      {/* ═══════════ CURRENTLY ═══════════ */}
      <section className="signal reveal" aria-labelledby="signal-label">
        <div className="section-head">
          <span className="section-num">00</span>
          <h2 id="signal-label" className="section-title">Currently</h2>
          <span className="section-rule" aria-hidden="true"></span>
          <span className="section-meta">// live status</span>
        </div>

        <div className="signal-grid">
          <article className="signal-card glass-panel">
            <header>
              <span className="pill pill-live">
                <span className="dot dot-live" aria-hidden="true"></span>BUILDING
              </span>
            </header>
            <p className="signal-headline">AI & Computer Vision Projects</p>
            <p className="signal-sub">
              Developing intelligent applications with deep learning, computer vision, 
              and full-stack web technologies. Turning research into production-ready systems.
            </p>
          </article>

          <article className="signal-card glass-panel">
            <header>
              <span className="pill pill-accent">
                <span className="dot dot-accent" aria-hidden="true"></span>LEARNING
              </span>
            </header>
            <p className="signal-headline">Advanced AI & Cloud Architecture</p>
            <p className="signal-sub">
              Deepening expertise in cloud-native architectures, MLOps pipelines, 
              and scalable AI deployment strategies.
            </p>
          </article>

          <article className="signal-card glass-panel">
            <header>
              <span className="pill pill-warm">OPEN</span>
            </header>
            <p className="signal-headline">Open to Opportunities</p>
            <p className="signal-sub">
              Looking for roles in AI/ML engineering, computer vision, or full-stack development
              where I can build impactful intelligent systems.
            </p>
          </article>
        </div>
      </section>

      {/* ═══════════ FEATURED PROJECTS ═══════════ */}
      <section className="dossier reveal" aria-labelledby="dossier-label">
        <div className="section-head">
          <span className="section-num">01</span>
          <h2 id="dossier-label" className="section-title">Projects</h2>
          <span className="section-rule" aria-hidden="true"></span>
          <span className="section-meta">// featured work</span>
        </div>

        <div className="dossier-grid">
          {featuredProjects.map((p) => (
            <article key={p.id} className="dossier-card glass-panel">
              <div className="dossier-card-header">
                <span className="dossier-num">{p.num}</span>
                <div className="dossier-metrics">
                  {p.metrics.map((m, i) => (
                    <div key={i} className="dossier-metric">
                      <span className="dossier-metric-val">{m.value}</span>
                      <span className="dossier-metric-label">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="dossier-card-image">
                <img src={p.image} alt={p.title} />
              </div>

              <h3 className="dossier-title">{p.title}</h3>
              <p className="dossier-subtitle">{p.subtitle}</p>
              <p className="dossier-desc">{p.description}</p>

              <div className="dossier-tags">
                {p.tags.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>

              <div className="dossier-links">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="dossier-link">
                  <i className="fab fa-github"></i> GitHub
                  <i className="fas fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="view-all">
          <Link to="/projects" className="btn btn-ghost">
            View All Projects <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>

      {/* ═══════════ CORE EXPERTISE ═══════════ */}
      <section className="capabilities reveal" aria-labelledby="cap-label">
        <div className="section-head">
          <span className="section-num">02</span>
          <h2 id="cap-label" className="section-title">Skills</h2>
          <span className="section-rule" aria-hidden="true"></span>
          <span className="section-meta">// capabilities</span>
        </div>

        <div className="cap-grid">
          {[
            {
              icon: 'fas fa-brain',
              title: 'AI & Machine Learning',
              skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Deep Learning', 'NLP'],
            },
            {
              icon: 'fas fa-eye',
              title: 'Computer Vision',
              skills: ['OpenCV', 'MediaPipe', 'YOLO', 'Image Processing', 'Object Detection', 'CNNs'],
            },
            {
              icon: 'fas fa-code',
              title: 'Full Stack',
              skills: ['React.js', 'Spring Boot', 'Node.js', 'REST APIs', 'JavaScript', 'Java'],
            },
            {
              icon: 'fas fa-cloud',
              title: 'Cloud & DevOps',
              skills: ['AWS', 'Docker', 'Git', 'MySQL', 'MongoDB', 'CI/CD'],
            },
          ].map((cat, i) => (
            <div key={i} className="cap-card glass-panel">
              <div className="cap-icon">
                <i className={cat.icon}></i>
              </div>
              <h3 className="cap-title">{cat.title}</h3>
              <div className="cap-tags">
                {cat.skills.map((s, j) => (
                  <span key={j} className="tech-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;