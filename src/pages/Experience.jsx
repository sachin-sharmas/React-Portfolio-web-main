import React, { useState } from 'react'
import Layout from '../components/Layout'
import { experience, seoExpertise } from '../Data/info'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCalendarAlt, FaMapMarkerAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'

const Reveal = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const initial =
    direction === 'up' ? { opacity: 0, y: 40 }
    : direction === 'left' ? { opacity: 0, x: -40 }
    : { opacity: 0 };
  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ExperienceCard = ({ exp, index }) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <Reveal delay={index * 0.12} direction="up">
      <div
        className="glass-card overflow-hidden"
        style={{ borderLeft: exp.current ? '3px solid #915eff' : '3px solid rgba(145,94,255,0.25)' }}
      >
        {/* Header */}
        <div
          className="p-6 lg:p-8 cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
                style={{
                  background: exp.current
                    ? 'linear-gradient(135deg, rgba(145,94,255,0.3), rgba(0,212,255,0.3))'
                    : 'rgba(145,94,255,0.1)',
                  border: exp.current ? '1.5px solid #915eff' : '1.5px solid rgba(145,94,255,0.25)',
                }}
              >
                <MdWork size={22} className="text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-3 flex-wrap mb-1">
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
                <p className="text-primary font-semibold text-base">{exp.company}</p>
                <div className="flex items-center gap-4 mt-2 flex-wrap">
                  <span className="text-gray-500 text-xs flex items-center gap-1">
                    <FaCalendarAlt size={10} className="text-secondary" /> {exp.date}
                  </span>
                  <span className="text-gray-500 text-xs flex items-center gap-1">
                    <FaMapMarkerAlt size={10} /> {exp.location}
                  </span>
                </div>
              </div>
            </div>
            <button className="text-gray-500 hover:text-primary transition-colors self-start lg:mt-2 flex-shrink-0">
              {expanded ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
            </button>
          </div>
        </div>

        {/* Expandable Body */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="body"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
            >
              <div
                className="px-6 pb-6 lg:px-8 lg:pb-8"
                style={{ borderTop: '1px solid rgba(145,94,255,0.12)' }}
              >
                <ul className="space-y-3 mt-5 mb-5">
                  {exp.desc.map((point, j) => (
                    <li key={j} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                      <span className="text-secondary mt-1.5 text-xs flex-shrink-0">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: '1px solid rgba(145,94,255,0.08)' }}>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{
                        background: 'rgba(0,212,255,0.08)',
                        border: '1px solid rgba(0,212,255,0.22)',
                        color: '#00d4ff',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
};

const Experience = () => {
  return (
    <Layout>
      <div className="w-full px-5 lg:px-16 xl:px-24 py-16">

        {/* Page Header */}
        <Reveal className="text-center mb-14">
          <p className="section-label">Career overview</p>
          <h1 className="section-title text-4xl mb-4">Experience</h1>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            A detailed look at my professional journey — frontend development, WordPress &amp; Webflow builds,
            SEO implementation, and digital marketing integrations.
          </p>
        </Reveal>

        {/* ── Work Experience Timeline ── */}
        <Reveal className="mb-4">
          <p className="section-label">Work history</p>
          <h2 className="text-2xl font-bold text-white mb-8">Professional Experience</h2>
        </Reveal>

        <div className="space-y-5 mb-20">
          {experience.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>

        {/* ── SEO & Digital Marketing Section ── */}
        <Reveal className="mb-4">
          <p className="section-label">Beyond frontend</p>
          <h2 className="text-2xl font-bold text-white mb-2">SEO &amp; Digital Marketing</h2>
          <p className="text-gray-400 text-sm mb-8 max-w-2xl">
            Alongside development, I've worked directly with SEO and marketing teams — implementing technical SEO,
            setting up analytics pipelines, and integrating ad tracking to help businesses measure and grow.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-20">
          {seoExpertise.map((area, i) => (
            <Reveal key={area.category} delay={i * 0.1} direction="up">
              <motion.div
                whileHover={{ y: -5 }}
                className="glass-card p-6 h-full"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: 'rgba(145,94,255,0.15)', border: '1px solid rgba(145,94,255,0.3)' }}
                  >
                    {area.icon}
                  </div>
                  <h3 className="font-bold text-white text-sm leading-tight">{area.category}</h3>
                </div>
                <ul className="space-y-2.5">
                  {area.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-400 text-xs leading-relaxed">
                      <span className="text-primary mt-1 flex-shrink-0 text-xs">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* ── Key Highlights ── */}
        <Reveal>
          <div
            className="rounded-2xl p-8 lg:p-10"
            style={{
              background: 'linear-gradient(135deg, rgba(145,94,255,0.1), rgba(0,212,255,0.07))',
              border: '1px solid rgba(145,94,255,0.25)',
            }}
          >
            <h3 className="text-lg font-bold text-white mb-6 text-center">Tools &amp; Platforms Used</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Google Tag Manager', 'Google Analytics 4', 'Google Search Console',
                'Google Ads', 'Meta Pixel', 'Facebook Ads Manager',
                'Ahrefs / SEMrush', 'Screaming Frog', 'PageSpeed Insights',
                'GTM Preview Mode', 'GA4 DebugView', 'Hotjar',
                'WordPress SEO (Yoast)', 'Schema Markup', 'UTM Builder',
              ].map((tool) => (
                <span
                  key={tool}
                  className="text-xs px-3 py-1.5 rounded-full font-medium"
                  style={{
                    background: 'rgba(145,94,255,0.1)',
                    border: '1px solid rgba(145,94,255,0.3)',
                    color: '#c4b5fd',
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </Layout>
  );
};

export default Experience;
