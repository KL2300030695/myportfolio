import React, { useEffect, useRef } from 'react';
import './About.css';

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

const About = () => {
  const pageRef = useReveal();

  return (
    <div className="about-container" ref={pageRef}>
      {/* ── INTRO ── */}
      <section className="about-intro reveal">
        <div className="section-head">
          <span className="section-num">00</span>
          <h2 className="section-title">About Me</h2>
          <span className="section-rule" aria-hidden="true"></span>
          <span className="section-meta">// who I am</span>
        </div>

        <div className="about-intro-content">
          <div className="about-text glass-panel">
            <p>
              I'm <strong className="accent-text">Subhash Vadaparthi</strong> — a developer
              passionate about building intelligent systems that bridge AI research and real-world applications.
            </p>
            <p>
              My work spans <span className="accent-text">Computer Vision</span>,{' '}
              <span className="accent-text">Machine Learning</span>, and{' '}
              <span className="accent-text">Full-Stack Development</span>. I believe the best software
              comes from understanding both the algorithm and the user — and I enjoy working at that intersection.
            </p>
            <p>
              When I'm not coding, I'm exploring the latest in AI research, creating tech content,
              and working on projects that push the boundaries of what's possible with modern technology.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW I WORK ── */}
      <section className="approach reveal">
        <div className="section-head">
          <span className="section-num">01</span>
          <h2 className="section-title">How I Work</h2>
          <span className="section-rule" aria-hidden="true"></span>
          <span className="section-meta">// approach</span>
        </div>

        <div className="approach-grid">
          {[
            {
              num: 'i.',
              title: 'Research & understand',
              desc: 'Every project starts with understanding the problem deeply. I study the domain, research existing solutions, and identify the right approach before writing a single line of code.',
              icon: 'fas fa-microscope',
            },
            {
              num: 'ii.',
              title: 'Build & iterate',
              desc: 'I build incrementally — prototyping quickly, testing rigorously, and iterating based on results. Clean architecture and modular code make scaling painless.',
              icon: 'fas fa-hammer',
            },
            {
              num: 'iii.',
              title: 'Deploy & optimize',
              desc: 'The best model is useless if it can\'t run in production. I focus on deployment-ready code, performance optimization, and systems that work reliably at scale.',
              icon: 'fas fa-rocket',
            },
          ].map((item, i) => (
            <article key={i} className="approach-card glass-panel">
              <div className="approach-card-head">
                <span className="approach-num">{item.num}</span>
                <div className="approach-icon">
                  <i className={item.icon}></i>
                </div>
              </div>
              <h3 className="approach-title">{item.title}</h3>
              <p className="approach-desc">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="experience reveal">
        <div className="section-head">
          <span className="section-num">02</span>
          <h2 className="section-title">Experience</h2>
          <span className="section-rule" aria-hidden="true"></span>
          <span className="section-meta">// journey</span>
        </div>

        <div className="timeline">
          <article className="timeline-item">
            <div className="timeline-marker">
              <span className="dot dot-live"></span>
            </div>
            <div className="timeline-content glass-panel">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">AI & Full Stack Developer</h3>
                  <p className="timeline-company">Building Intelligent Systems</p>
                </div>
                <span className="pill pill-live">
                  <span className="dot dot-live" aria-hidden="true"></span>CURRENT
                </span>
              </div>
              <ul className="timeline-details">
                <li>Developing computer vision applications with OpenCV, MediaPipe, and deep learning frameworks</li>
                <li>Building full-stack applications with React.js, Spring Boot, and cloud services</li>
                <li>Creating AI-powered solutions that solve real-world problems</li>
                <li>Contributing to open-source projects and sharing knowledge through tech content</li>
              </ul>
              <div className="timeline-tags">
                {['Python', 'React.js', 'Spring Boot', 'OpenCV', 'TensorFlow', 'AWS'].map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section className="education reveal">
        <div className="section-head">
          <span className="section-num">03</span>
          <h2 className="section-title">Education</h2>
          <span className="section-rule" aria-hidden="true"></span>
          <span className="section-meta">// foundation</span>
        </div>

        <div className="timeline">
          <article className="timeline-item">
            <div className="timeline-marker">
              <span className="dot dot-accent"></span>
            </div>
            <div className="timeline-content glass-panel">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">B.Tech in Computer Science</h3>
                  <p className="timeline-company">KL University · India</p>
                </div>
                <span className="pill pill-accent">2023 — 2027</span>
              </div>
              <ul className="timeline-details">
                <li>Specialization in AI/ML and Computer Vision</li>
                <li>Built multiple projects combining AI with practical applications</li>
                <li>Active member of coding and AI communities</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* ── SKILLS DETAIL ── */}
      <section className="skills-detail reveal">
        <div className="section-head">
          <span className="section-num">04</span>
          <h2 className="section-title">Technical Arsenal</h2>
          <span className="section-rule" aria-hidden="true"></span>
          <span className="section-meta">// skills</span>
        </div>

        <div className="skills-detail-grid">
          {[
            {
              category: 'AI & ML',
              items: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Deep Learning', 'NLP', 'Neural Networks', 'Data Analysis'],
            },
            {
              category: 'COMPUTER VISION',
              items: ['OpenCV', 'MediaPipe', 'YOLO', 'Image Processing', 'Object Detection', 'CNNs', 'Feature Extraction', 'Video Analysis'],
            },
            {
              category: 'FULL STACK',
              items: ['React.js', 'Spring Boot', 'Node.js', 'JavaScript', 'Java', 'HTML/CSS', 'REST APIs', 'Postman'],
            },
            {
              category: 'DATA & CLOUD',
              items: ['MySQL', 'MongoDB', 'AWS', 'Docker', 'Git', 'GitHub', 'CI/CD', 'Linux'],
            },
          ].map((group, i) => (
            <div key={i} className="skills-detail-group">
              <h3 className="skills-detail-cat">{group.category}</h3>
              <div className="skills-detail-tags">
                {group.items.map((s, j) => (
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

export default About;