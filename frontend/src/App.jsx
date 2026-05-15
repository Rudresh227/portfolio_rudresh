import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Users, 
  Mail, 
  ArrowUpRight, 
  Code2, 
  Cpu, 
  Workflow, 
  Award, 
  GraduationCap, 
  ExternalLink,
  ChevronRight,
  Database,
  Cloud,
  Layers,
  Search,
  Calendar,
  Zap,
  Activity,
  Phone,
  Smartphone,
  Sparkles
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const Navbar = () => (
  <nav className="nav">
    <div className="container nav-content">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="display-font" 
        style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text)' }}
      >
        Rudresh<span style={{ color: 'var(--accent)' }}>.</span>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="nav-links"
      >
        <a href="#about">About</a>
        <a href="#projects">Journey</a>
        <a href="#skills">Expertise</a>
        <a href="#contact" className="btn btn-primary" style={{ 
          padding: '0.5rem 1.25rem', 
          fontSize: '0.85rem',
          gap: '0.4rem' 
        }}>
          Let's Connect <ArrowUpRight size={16} />
        </a>
      </motion.div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="container hero">
    <div className="hero-content">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="badge" style={{ marginBottom: '2rem', padding: '0.5rem 1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          <Sparkles size={14} /> Software Development Engineer
        </span>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Engineering <span style={{ color: 'var(--accent)' }}>Smarter</span> Applications with AI and Modern Web.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Software Development Engineer with 1+ year of experience building scalable full-stack applications and intelligent AI agents using React, Flask, and GCP.
      </motion.p>
      <motion.div 
        className="flex gap-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <a href="#projects" className="btn btn-primary">Check Journey <ArrowUpRight size={18} /></a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rudreshvasanth7@gmail.com" target="_blank" rel="noreferrer" className="btn btn-outline">Mail Me</a>
        <a href="/Rudresh_P_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ border: '1px solid var(--accent)', color: 'var(--accent)' }}>Download CV</a>
      </motion.div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="section" style={{ paddingBottom: '2rem' }}>
    <div className="container">
      <motion.div {...fadeInUp} className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Professional <span style={{ color: 'var(--accent)' }}>Summary</span></h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
            Full-Stack Developer passionate about building scalable web applications with React and Python. Exploring AI-assisted development and data engineering to create efficient, performance-driven, and user-focused solutions.
I enjoy transforming ideas into practical products through clean code, modern technologies, and continuous learning. Focused on solving real-world problems while improving performance, usability, and developer workflows.  
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <div style={{ width: '6px', height: '6px', background: 'var(--accent)', borderRadius: '50%' }}></div>
              <span style={{ fontWeight: 500 }}>Focus on clean execution & attention to detail</span>
            </div>
            <div className="flex gap-2 items-center">
              <div style={{ width: '6px', height: '6px', background: 'var(--accent)', borderRadius: '50%' }}></div>
              <span style={{ fontWeight: 500 }}>Passionate about AI-driven workflow optimization</span>
            </div>
          </div>
        </div>
        <div style={{ background: 'var(--accent-soft)', padding: '3rem', borderRadius: '40px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent)' }}>Core Philosophy</h4>
            <p style={{ fontSize: '1rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
              "Taking full ownership of delivery and continuously learning to bridge the gap between complex engineering and simplified user solutions."
            </p>
          </div>
          <div style={{ position: 'absolute', bottom: '-20px', right: '30px', top: '-10px', fontSize: '8rem', opacity: 0.05, fontWeight: 900, color: 'var(--accent)' }}>"</div>
        </div>
      </motion.div>
    </div>
  </section>
);

const TimelineItem = ({ date, title, description, tags, icon: Icon, isLast }) => (
  <div style={{ display: 'flex', gap: '2rem', position: 'relative' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ 
        width: '40px', 
        height: '40px', 
        borderRadius: '12px', 
        background: 'var(--accent-soft)', 
        color: 'var(--accent)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        zIndex: 2,
        boxShadow: '0 4px 12px rgba(37, 99, 235, 0.1)'
      }}>
        <Icon size={20} />
      </div>
      {!isLast && <div style={{ width: '2px', flexGrow: 1, background: 'var(--border)', margin: '0.5rem 0' }}></div>}
    </div>
    <motion.div 
      variants={fadeInUp}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      style={{ paddingBottom: isLast ? '0' : '4rem', flexGrow: 1 }}
    >
      <div className="flex items-center gap-2" style={{ marginBottom: '0.5rem' }}>
        <Calendar size={14} style={{ color: 'var(--text-dim)' }} />
        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-dim)', textTransform: 'uppercase' }}>{date}</span>
      </div>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text)' }}>{title}</h3>
      <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', maxWidth: '600px', lineHeight: 1.6 }}>{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map(t => (
          <span key={t} className="badge" style={{ background: '#f5f5f5', color: '#777', border: 'none', fontSize: '0.75rem' }}>{t}</span>
        ))}
      </div>
    </motion.div>
  </div>
);

const SkillChip = ({ children }) => (
  <span style={{ 
    display: 'inline-flex', 
    alignItems: 'center',
    padding: '0.4rem 1rem', 
    background: '#ffffff', 
    border: '1px solid var(--border)', 
    borderRadius: '100px', 
    fontSize: '0.85rem', 
    fontWeight: 500, 
    color: 'var(--text-muted)',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap',
    boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
  }} className="skill-chip">
    {children}
  </span>
);

const App = () => {
  const squareshiftProjects = [
// ... (omitting projects for brevity)
    {
      date: "Mar 2026",
      title: "Status Report Reviewer Agent",
      description: "Architected an AI-driven solution to provide management-caliber feedback on weekly project status reports, ensuring quality consistency and red-flag detection.",
      tags: ["AI Agents", "LLMs", "Prompt Engineering", "Python", "Automation"],
      icon: Sparkles
    },
    {
      date: "Jan 2026 - Feb 2026",
      title: "Productivity Apps",
      description: "Focused on optimization, project management, and implementing critical new features to enhance internal organizational workflows.",
      tags: ["React", "Flask", "PostgreSQL", "Fullstack", "Docker", "GCP"],
      icon: Users
    },
    {
      date: "Nov 2025 - Dec 2025",
      title: "Website Search Automation",
      description: "Designed an automated AI-driven workflow using n8n to analyze websites, extract company details, and evaluate search efficiency.",
      tags: ["n8n", "AI Agents", "Python", "Automation"],
      icon: Search
    },
    {
      date: "Sept - Oct 2025",
      title: "Productivity Apps",
      description: "Developing robust internal productivity solutions to manage organizational workflows, roles, and data with a focus on consistency and seamless user experiences.",
      tags: ["React", "Flask", "PostgreSQL", "Fullstack", "Docker", "GCP"],
      icon: Activity
    },
    {
      date: "Aug 2025",
      title: "Presales - Singapore Gala Event",
      description: "Developed a web solution for 'Food From The Heart' (FFTH) Singapore, showcasing fundraiser donation workflows for a gala event.",
      tags: ["React", "Presales", "Singapore", "NGO"],
      icon: Globe
    },
    {
      date: "May - Aug 2025",
      title: "Operative",
      description: "Frontend development on a client-facing project, resolving visualization issues and enhancing dashboard reliability using TypeScript and Looker.",
      tags: ["TypeScript", "Looker", "Frontend", "Viz"],
      icon: Zap
    },
    {
      date: "Mar - May 2025",
      title: "Tableau to Looker AI Migration",
      description: "Leveraged LLM prompt chaining to translate complex Tableau calculations into LookML, reducing hallucinations in metric translation.",
      tags: ["Gen AI", "Prompt Chaining", "Looker", "BI"],
      icon: Workflow
    }
  ];

  return (
    <div style={{ scrollBehavior: 'smooth' }}>
      <Navbar />
      
      <Hero />
      <AboutSection />

      <section id="projects" className="section">
        <div className="container">
          <motion.div {...fadeInUp} style={{ marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Experience <span style={{ color: 'var(--accent)' }}>Timeline</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>A chronological journey of my key technical contributions and projects.</p>
          </motion.div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {squareshiftProjects.map((p, i) => (
              <TimelineItem 
                key={i} 
                {...p} 
                isLast={i === squareshiftProjects.length - 1} 
              />
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section" style={{ background: '#f9f9f9', py: '6rem' }}>
        <div className="container">
          <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Technical <span style={{ color: 'var(--accent)' }}>Arsenal</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto' }}>
              A multi-disciplinary stack combining modern web engineering with AI-driven automation and cloud architecture.
            </p>
          </motion.div>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            <motion.div {...fadeInUp} className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Code2 size={40} style={{ color: 'var(--accent)', marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.25rem' }}>Languages & Frontend</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flexGrow: 1 }}>
                <div style={{ width: '100%' }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.05em' }}>Programming</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {["Python", "JavaScript", "SQL"].map(s => <SkillChip key={s}>{s}</SkillChip>)}
                  </div>
                </div>
                <div style={{ width: '100%' }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.05em' }}>Frontend</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {["React JS", "HTML", "CSS", "Tailwind CSS"].map(s => <SkillChip key={s}>{s}</SkillChip>)}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Cpu size={40} style={{ color: 'var(--accent)', marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.25rem' }}>AI & Automation</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flexGrow: 1 }}>
                <div style={{ width: '100%' }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.05em' }}>AI Tools</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {["Vertex AI", "LLMs", "Google ADK"].map(s => <SkillChip key={s}>{s}</SkillChip>)}
                  </div>
                </div>
                <div style={{ width: '100%' }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.05em' }}>Automation</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {["ETL Pipelines", "Airflow", "n8n"].map(s => <SkillChip key={s}>{s}</SkillChip>)}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Database size={40} style={{ color: 'var(--accent)', marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.25rem' }}>Data & Cloud</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flexGrow: 1 }}>
                <div style={{ width: '100%' }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.05em' }}>Databases</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {["MySQL", "PostgreSQL", "Cloud SQL", "Firestore", "BigQuery"].map(s => <SkillChip key={s}>{s}</SkillChip>)}
                  </div>
                </div>
                <div style={{ width: '100%' }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.05em' }}>Cloud & DevOps</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {["GCP", "Cloud Run", "Storage", "Docker", "GitHub"].map(s => <SkillChip key={s}>{s}</SkillChip>)}
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Layers size={40} style={{ color: 'var(--accent)', marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.25rem' }}>Backend & API</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flexGrow: 1 }}>
                <div style={{ width: '100%' }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.05em' }}>Backend</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {["Flask", "Node JS", "Express JS"].map(s => <SkillChip key={s}>{s}</SkillChip>)}
                  </div>
                </div>
                <div style={{ width: '100%' }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.05em' }}>Arch</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {["RESTful APIs", "API Design"].map(s => <SkillChip key={s}>{s}</SkillChip>)}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <motion.div {...fadeInUp} style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Achievements <span style={{ color: 'var(--accent)' }}>& Education</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Recognitions, certifications, and academic background.</p>
          </motion.div>
          
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <motion.div {...fadeInUp} className="card" style={{ background: 'var(--accent-soft)', borderColor: 'rgba(37, 99, 235, 0.1)' }}>
              <div className="flex justify-between items-start" style={{ marginBottom: '1.5rem' }}>
                <Award size={32} style={{ color: 'var(--accent)' }} />
                <span className="badge" style={{ background: 'rgba(37, 99, 235, 0.1)', color: 'var(--accent)', border: 'none' }}>Award</span>
              </div>
              <h4 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Warrior Award</h4>
              <p style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Squareshift • Jan 2026</p>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem', marginTop: '1rem', lineHeight: 1.6 }}>
                Awarded for steady execution, meticulous attention to detail, and taking end-to-end ownership of project delivery.
              </p>
            </motion.div>
            
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="card">
              <div className="flex justify-between items-start" style={{ marginBottom: '1.5rem' }}>
                <Cloud size={32} style={{ color: 'var(--accent)' }} />
                <span className="badge" style={{ background: '#f5f5f5', color: '#777', border: 'none' }}>Certified</span>
              </div>
              <h4 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Professional Data Engineer</h4>
              <p style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Google Cloud • Feb 2026</p>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem', marginTop: '1rem', lineHeight: 1.6 }}>
                Validity: 2026 - 2028. Expertise in designing, building, and maintaining data processing systems on GCP.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="card">
              <div className="flex justify-between items-start" style={{ marginBottom: '1.5rem' }}>
                <GraduationCap size={32} style={{ color: 'var(--text-dim)' }} />
                <span className="badge" style={{ background: '#f5f5f5', color: '#777', border: 'none' }}>Education</span>
              </div>
              <h4 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>B.Tech in Information Technology</h4>
              <p style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Velammal Institute • 2021 - 2025</p>
              <div style={{ marginTop: '1rem' }}>
                <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: 'var(--accent-soft)', color: 'var(--accent)', borderRadius: '8px', fontWeight: 700, fontSize: '0.9rem' }}>
                  8.75 CGPA
                </div>
                {/* <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem', marginTop: '0.75rem', lineHeight: 1.6 }}>
                  Focused on software architecture, data structures, and modern web engineering.
                </p> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <motion.div 
            {...fadeInUp}
            style={{ 
              background: 'var(--text)', 
              color: 'white', 
              padding: '4rem', 
              borderRadius: '40px',
              textAlign: 'center'
            }}
          >
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Get in <span style={{ color: 'var(--accent)' }}>Touch</span></h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.7, marginBottom: '3rem', maxWidth: '500px', margin: '0 auto' }}>
              Feel free to reach out for any professional inquiries or just to connect.
            </p>
            
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '4rem' }}>
              <motion.a 
                whileHover={{ y: -5 }}
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rudreshvasanth7@gmail.com" target="_blank" rel="noreferrer" 
                className="card" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: 'white', textDecoration: 'none', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem' }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={20} style={{ color: 'var(--accent)' }} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <p style={{ fontSize: '0.65rem', opacity: 0.4, textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.25rem', letterSpacing: '0.1em' }}>Email</p>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', wordBreak: 'break-all' }}>rudreshvasanth7@gmail.com</p>
                </div>
              </motion.a>
              
              <motion.a 
                whileHover={{ y: -5 }}
                href="tel:+919514517883" 
                className="card" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: 'white', textDecoration: 'none', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem' }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={20} style={{ color: 'var(--accent)' }} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <p style={{ fontSize: '0.65rem', opacity: 0.4, textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.25rem', letterSpacing: '0.1em' }}>Phone</p>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>+91 9514517883</p>
                </div>
              </motion.a>

              <motion.a 
                whileHover={{ y: -5 }}
                href="http://linkedin.com/in/rudresh-vasanth/" target="_blank" rel="noreferrer" 
                className="card" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: 'white', textDecoration: 'none', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem' }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Users size={20} style={{ color: 'var(--accent)' }} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <p style={{ fontSize: '0.65rem', opacity: 0.4, textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.25rem', letterSpacing: '0.1em' }}>Linkedin</p>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>Rudresh Vasanth</p>
                </div>
              </motion.a>
            </div>

            {/* <motion.div {...fadeInUp} style={{ marginTop: '3rem' }}>
              <a href="#" className="btn" style={{ background: 'white', color: 'var(--text)', padding: '1rem 3rem', borderRadius: '50px', fontWeight: 600 }}>Download Resume</a>
            </motion.div> */}
          </motion.div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© 2026 Rudresh Vasanth</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
