import React from 'react'
import Layout from '../components/Layout'
import { Bio, allSkillsFlat, experience, projects, seoExpertise } from '../Data/info'
import hero from '../img/h3.jpg'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaDownload, FaExternalLinkAlt, FaMapMarkerAlt, FaCalendarAlt, FaArrowRight, FaBriefcase, FaHandshake, FaLaptopCode } from "react-icons/fa";
import { MdEmail, MdWork } from "react-icons/md";
import { Link } from 'react-router-dom'

/* ── reusable scroll-reveal wrapper ── */
const Reveal = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const initial =
    direction === 'up' ? { opacity: 0, y: 50 }
    : direction === 'left' ? { opacity: 0, x: -50 }
    : direction === 'right' ? { opacity: 0, x: 50 }
    : { opacity: 0 };
  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const SectionHeader = ({ label, title, subtitle }) => (
  <Reveal className="text-center mb-12">
    <p className="section-label">{label}</p>
    <h2 className="section-title">{title}</h2>
    {subtitle && <p className="text-gray-400 mt-3 text-sm">{subtitle}</p>}
  </Reveal>
);

/* ── marquee row ── */
const MarqueeRow = ({ items, direction = 'left' }) => {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-wrapper py-2">
      <div className={direction === 'left' ? 'marquee-left' : 'marquee-right'}>
        {doubled.map((skill, i) => (
          <div
            key={i}
            className="flex items-center gap-2 mx-3 px-4 py-2 rounded-full text-sm font-medium text-gray-300 flex-shrink-0"
            style={{
              background: 'rgba(145, 94, 255, 0.08)',
              border: '1px solid rgba(145, 94, 255, 0.25)',
            }}
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-5 h-5 object-contain"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const row1 = allSkillsFlat.slice(0, 11);
  const row2 = allSkillsFlat.slice(11);
  const featuredProjects = projects.slice(0, 6);

  return (
    <Layout>

      {/* ════════════════════════════════════════
          1. HERO
      ════════════════════════════════════════ */}
      <section className="flex items-center" style={{ minHeight: 'calc(100vh - 80px)' }}>
        <div className="w-full px-5 lg:px-16 xl:px-24 w-full py-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="section-label"
              >
                Welcome to my portfolio
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3"
              >
                Hi, I'm <span className="gradient-text">Sachin Sharma</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="text-lg lg:text-xl font-medium text-gray-300 mb-6 h-8"
              >
                <TypeAnimation
                  sequence={[
                    'Frontend Developer', 1600,
                    'Web Developer', 1600,
                    'React Developer', 1600,
                    'WordPress Developer', 1600,
                    'Webflow Developer', 1600,
                    'UI Developer', 1600,
                  ]}
                  wrapper="span"
                  cursor={true}
                  speed={55}
                  repeat={Infinity}
                  style={{ color: '#915eff' }}
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="text-gray-400 text-base leading-relaxed mb-8 max-w-lg"
              >
                {Bio.description} From headless React apps and Strapi-powered platforms to custom WordPress themes and Webflow builds — I deliver clean, scalable solutions for real businesses.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="flex flex-wrap gap-4 mb-10"
              >
                <motion.a
                  href={Bio.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-primary"
                >
                  <FaDownload size={13} /> Download CV
                </motion.a>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/contact" className="btn-outline">Contact Me</Link>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
                className="flex items-center gap-5"
              >
                <span className="text-gray-600 text-xs uppercase tracking-wider">Find me on</span>
                <div className="flex gap-4">
                  {[
                    { icon: <FaGithub size={20} />, href: Bio.github, label: 'GitHub' },
                    { icon: <FaLinkedin size={20} />, href: Bio.linkedin, label: 'LinkedIn' },
                    { icon: <MdEmail size={20} />, href: `mailto:${Bio.email}`, label: 'Email' },
                  ].map((s, i) => (
                    <motion.a
                      key={i}
                      href={s.href}
                      target={s.href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      whileHover={{ y: -4 }}
                      className="text-gray-500 hover:text-primary transition-colors"
                    >
                      {s.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right – profile image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative float-animation" style={{ width: 'fit-content' }}>
                <div
                  className="w-64 h-64 lg:w-72 lg:h-72 rounded-full glow-ring"
                  style={{ background: 'linear-gradient(135deg, #915eff, #00d4ff)', padding: '3px' }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden" style={{ background: '#050816', padding: '5px' }}>
                    <img src={hero} alt="Sachin Sharma" className="w-full h-full rounded-full object-cover" />
                  </div>
                </div>

                {/* Badge: 1.7+ Yrs Exp – top right */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, type: 'spring', stiffness: 200 }}
                  className="glass-card absolute text-center px-4 py-2"
                  style={{ top: '-10px', right: '-60px' }}
                >
                  <p className="text-xl font-bold gradient-text">1.7+</p>
                  <p className="text-xs text-gray-400">Yrs Exp</p>
                </motion.div>

                {/* Badge: 3 Companies – left middle */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.05, type: 'spring', stiffness: 200 }}
                  className="glass-card absolute text-center px-4 py-2"
                  style={{ left: '-65px', top: '50%', transform: 'translateY(-50%)' }}
                >
                  <p className="text-xl font-bold gradient-text">3</p>
                  <p className="text-xs text-gray-400">Companies</p>
                </motion.div>

                {/* Badge: 10+ Projects – bottom right */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
                  className="glass-card absolute text-center px-4 py-2"
                  style={{ bottom: '-10px', right: '-60px' }}
                >
                  <p className="text-xl font-bold gradient-text">10+</p>
                  <p className="text-xs text-gray-400">Projects</p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex flex-col items-center gap-2 mt-16"
          >
            <span className="text-gray-600 text-xs tracking-widest uppercase">Scroll down</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-5 h-8 rounded-full flex items-start justify-center pt-1"
              style={{ border: '1.5px solid rgba(145,94,255,0.4)' }}
            >
              <div className="w-1 h-2 rounded-full" style={{ background: '#915eff' }} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          2. TECH STACK MARQUEE
      ════════════════════════════════════════ */}
      <section className="py-20" style={{ borderTop: '1px solid rgba(145,94,255,0.12)', borderBottom: '1px solid rgba(145,94,255,0.12)' }}>
        <div className="w-full px-5 lg:px-16 xl:px-24">
          <SectionHeader label="What I work with" title="Tech Stack" subtitle="All the technologies and tools I use to build great products" />
        </div>
        <div className="space-y-4">
          <MarqueeRow items={row1} direction="left" />
          <MarqueeRow items={row2} direction="right" />
        </div>
      </section>

      {/* ════════════════════════════════════════
          3. EXPERIENCE
      ════════════════════════════════════════ */}
      <section className="py-20">
        <div className="w-full px-5 lg:px-16 xl:px-24">
          <SectionHeader label="My journey" title="Work Experience" />

          <div className="space-y-6">
            {experience.map((exp, i) => (
              <Reveal key={exp.id} delay={i * 0.15} direction="up">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card p-6 lg:p-8"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-5">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: exp.current
                            ? 'linear-gradient(135deg, rgba(145,94,255,0.3), rgba(0,212,255,0.3))'
                            : 'rgba(145,94,255,0.12)',
                          border: exp.current ? '1.5px solid #915eff' : '1.5px solid rgba(145,94,255,0.3)',
                        }}
                      >
                        <MdWork size={22} className="text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                          {exp.current && (
                            <span
                              className="text-xs px-2 py-0.5 rounded-full font-semibold"
                              style={{ background: 'rgba(0,212,255,0.15)', color: '#00d4ff', border: '1px solid rgba(0,212,255,0.3)' }}
                            >
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-primary font-semibold mt-0.5">{exp.company}</p>
                      </div>
                    </div>
                    <div className="text-right lg:flex-shrink-0">
                      <p className="text-gray-400 text-xs flex items-center gap-1 justify-end">
                        <FaCalendarAlt size={10} className="text-secondary" /> {exp.date}
                      </p>
                      <p className="text-gray-500 text-xs flex items-center gap-1 justify-end mt-1">
                        <FaMapMarkerAlt size={10} /> {exp.location}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.desc.map((point, j) => (
                      <li key={j} className="text-gray-400 text-sm flex gap-2 leading-relaxed">
                        <span className="text-secondary mt-1.5 text-xs flex-shrink-0">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, j) => (
                      <span
                        key={j}
                        className="text-xs px-3 py-1 rounded-full font-medium"
                        style={{
                          background: 'rgba(0,212,255,0.08)',
                          border: '1px solid rgba(0,212,255,0.25)',
                          color: '#00d4ff',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          4. SEO & DIGITAL MARKETING
      ════════════════════════════════════════ */}
      <section className="py-20" style={{ borderTop: '1px solid rgba(145,94,255,0.12)' }}>
        <div className="w-full px-5 lg:px-16 xl:px-24">
          <SectionHeader
            label="Beyond frontend"
            title="SEO & Digital Marketing"
            subtitle="I work alongside SEO and marketing teams — from technical on-page SEO to analytics setup and ad tracking."
          />

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-10">
            {seoExpertise.map((area, i) => (
              <Reveal key={area.category} delay={i * 0.1} direction="up">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 h-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: 'rgba(145,94,255,0.15)', border: '1px solid rgba(145,94,255,0.3)' }}
                    >
                      {area.icon}
                    </div>
                    <h3 className="font-bold text-white text-sm">{area.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {area.points.slice(0, 5).map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-400 text-xs leading-relaxed">
                        <span className="text-primary mt-1 flex-shrink-0">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center">
            <Link to="/experience">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline inline-flex items-center gap-2"
              >
                View Full Experience <FaArrowRight size={13} />
              </motion.button>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          5. FEATURED PROJECTS
      ════════════════════════════════════════ */}
      <section className="py-20" style={{ borderTop: '1px solid rgba(145,94,255,0.12)' }}>
        <div className="w-full px-5 lg:px-16 xl:px-24">
          <SectionHeader
            label="My work"
            title="Featured Projects"
            subtitle="A selection of projects I've built"
          />

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-10">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.id} delay={i * 0.08} direction="up">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="glass-card overflow-hidden group h-full flex flex-col"
                >
                  <div className="relative overflow-hidden h-44 flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(135deg,rgba(145,94,255,0.3),rgba(0,212,255,0.2))';
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement.style.background = 'linear-gradient(135deg,rgba(145,94,255,0.3),rgba(0,212,255,0.2))';
                      }}
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3"
                      style={{ background: 'rgba(5,8,22,0.88)' }}
                    >
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                          className="btn-outline" style={{ padding: '7px 14px', fontSize: '0.72rem' }}>
                          <FaGithub size={12} /> Code
                        </a>
                      )}
                      <a href={project.webapp} target="_blank" rel="noopener noreferrer"
                        className="btn-primary" style={{ padding: '7px 14px', fontSize: '0.72rem' }}>
                        <FaExternalLinkAlt size={10} /> Live Demo
                      </a>
                    </div>
                    {/* Client badge */}
                    {project.client && (
                      <div className="absolute top-2 right-2">
                        <span className="text-xs px-2 py-0.5 rounded-full font-semibold"
                          style={{ background: 'rgba(0,212,255,0.2)', border: '1px solid rgba(0,212,255,0.5)', color: '#00d4ff' }}>
                          Live Site
                        </span>
                      </div>
                    )}
                    <div className="absolute top-2 left-2 flex gap-1 flex-wrap">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-0.5 rounded-md font-medium"
                          style={{ background: 'rgba(5,8,22,0.85)', border: '1px solid rgba(145,94,255,0.4)', color: '#d1c4e9' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-bold text-white text-sm mb-1">{project.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed flex-1">{project.description}</p>
                    <div className="flex gap-4 mt-3">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-gray-400 hover:text-primary transition-colors font-medium">
                          <FaGithub size={11} /> GitHub
                        </a>
                      )}
                      <a href={project.webapp} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-gray-400 hover:text-secondary transition-colors font-medium">
                        <FaExternalLinkAlt size={10} /> Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center">
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline inline-flex items-center gap-2"
              >
                View All Projects <FaArrowRight size={13} />
              </motion.button>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          6. OPEN TO OPPORTUNITIES CTA
      ════════════════════════════════════════ */}
      <section className="py-20" style={{ borderTop: '1px solid rgba(145,94,255,0.12)' }}>
        <div className="w-full px-5 lg:px-16 xl:px-24">
          <Reveal>
            <div
              className="rounded-3xl p-6 sm:p-10 lg:p-14 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(145,94,255,0.12) 0%, rgba(0,212,255,0.08) 100%)',
                border: '1px solid rgba(145,94,255,0.28)',
              }}
            >
              {/* blobs */}
              <div className="absolute top-0 left-0 w-64 h-64 rounded-full pointer-events-none"
                style={{ background: 'rgba(145,94,255,0.12)', filter: 'blur(70px)', transform: 'translate(-40%,-40%)' }} />
              <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full pointer-events-none"
                style={{ background: 'rgba(0,212,255,0.1)', filter: 'blur(70px)', transform: 'translate(40%,40%)' }} />

              <div className="relative z-10 text-center mb-10">
                <p className="section-label mb-2">Let's work together</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Open to New Opportunities
                </h2>
                <p className="text-gray-400 text-base max-w-xl mx-auto">
                  I'm actively looking for <span className="text-primary font-semibold">Frontend Developer roles</span> where
                  I can build great products and grow with the team. Also available for contract work and freelance projects.
                </p>
              </div>

              {/* 3 opportunity types */}
              <div className="relative z-10 grid lg:grid-cols-3 gap-4 mb-10">
                {[
                  {
                    icon: <FaBriefcase size={22} className="text-primary" />,
                    title: 'Full-Time Role',
                    desc: 'Looking for a permanent Frontend Developer position at a product company, agency, or startup where I can grow and contribute long-term.',
                  },
                  {
                    icon: <FaHandshake size={22} className="text-secondary" />,
                    title: 'Contract / Remote',
                    desc: 'Available for short to mid-term contracts and remote engagements, bringing focused expertise to deliver results on schedule.',
                  },
                  {
                    icon: <FaLaptopCode size={22} className="text-primary" />,
                    title: 'Freelance Projects',
                    desc: 'Open to building websites, web apps, and landing pages for businesses — from concept to deployment with clean, maintainable code.',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    className="glass-card p-6 text-center"
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ background: 'rgba(145,94,255,0.12)', border: '1px solid rgba(145,94,255,0.3)' }}>
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-white text-sm mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="relative z-10 flex flex-wrap justify-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/contact" className="btn-primary">
                    <MdEmail size={16} /> Hire Me
                  </Link>
                </motion.div>
                <motion.a
                  href={Bio.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-outline"
                >
                  <FaDownload size={14} /> Download CV
                </motion.a>
                <motion.a
                  href={Bio.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-outline"
                >
                  <FaLinkedin size={14} /> LinkedIn
                </motion.a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </Layout>
  );
};

export default Home;
