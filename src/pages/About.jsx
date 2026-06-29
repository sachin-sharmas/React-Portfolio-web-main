import React from 'react'
import Layout from '../components/Layout'
import { Bio, skills, experience, education } from '../Data/info'
import about from '../img/about.avif'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaCertificate, FaMapMarkerAlt, FaCalendarAlt, FaCode } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const SectionHeader = ({ label, title }) => (
  <div className="text-center mb-12">
    <p className="section-label">{label}</p>
    <h2 className="section-title">{title}</h2>
  </div>
);

const About = () => {
  return (
    <Layout>
      <div className="w-full px-5 lg:px-16 xl:px-24 py-12">

        {/* ── About Section ── */}
        <section className="mb-24">
          <motion.div {...fadeUp()}>
            <SectionHeader label="Get to know me" title="About Me" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-gray-300 leading-relaxed text-base mb-5">
                I'm a <span className="text-primary font-semibold">Frontend Developer</span> with
                2 years of experience building responsive, high-performance web applications
                using React.js and modern JavaScript.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm mb-6">
                I've led end-to-end development of projects like{' '}
                <span className="text-secondary">The Maritime Standards (UAE)</span>, delivering
                pixel-perfect UI/UX with Strapi CMS integration, performance optimizations
                (lazy loading, code splitting), and clean component architecture.
              </p>

              <div className="grid grid-cols-2 gap-5">
                {[
                  { label: 'Location', value: Bio.location },
                  { label: 'Experience', value: '1.7+ Years' },
                  { label: 'Email', value: Bio.email },
                  { label: 'Availability', value: 'Open to work' },
                ].map((item, i) => (
                  <div key={i} className="glass-card p-4">
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-white font-medium text-sm truncate" title={item.value}>{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex justify-center"
            >
              <img
                src={about}
                alt="About Sachin"
                className="w-full max-w-sm rounded-2xl object-cover"
                style={{ border: '2px solid rgba(145, 94, 255, 0.3)' }}
              />
            </motion.div>
          </div>
        </section>

        {/* ── Skills Section ── */}
        <section className="mb-24">
          <motion.div {...fadeUp()}>
            <SectionHeader label="What I work with" title="Skills" />
          </motion.div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {skills.map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -4 }}
                className="glass-card p-6"
              >
                <div className="flex items-center gap-2 mb-5">
                  <FaCode className="text-primary" size={16} />
                  <h3 className="font-bold text-white text-base">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <div key={j} className="skill-tag">
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="w-4 h-4 object-contain"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                      {skill.name}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Experience Section ── */}
        <section className="mb-24">
          <motion.div {...fadeUp()}>
            <SectionHeader label="My journey" title="Experience" />
          </motion.div>

          <div className="space-y-6">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex gap-5"
              >
                {/* Timeline column */}
                <div className="hidden md:flex flex-col items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(145, 94, 255, 0.15)', border: '2px solid #915eff' }}
                  >
                    <MdWork size={18} className="text-primary" />
                  </div>
                  {i < experience.length - 1 && (
                    <div
                      className="w-[2px] flex-1 mt-2"
                      style={{ background: 'linear-gradient(180deg, #915eff, rgba(145,94,255,0.1))' }}
                    />
                  )}
                </div>

                {/* Card */}
                <div className="glass-card p-6 flex-1">
                  <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-primary font-semibold text-sm mt-1">{exp.company}</p>
                    </div>
                    <div className="text-right">
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
                          background: 'rgba(0, 212, 255, 0.08)',
                          border: '1px solid rgba(0, 212, 255, 0.25)',
                          color: '#00d4ff',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Education Section ── */}
        <section className="mb-12">
          <motion.div {...fadeUp()}>
            <SectionHeader label="Academic background" title="Education" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ y: -4 }}
                className="glass-card p-6 flex gap-5 items-start"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ background: 'rgba(145, 94, 255, 0.12)', border: '1.5px solid rgba(145,94,255,0.4)' }}
                >
                  {edu.type === 'degree' ? (
                    <FaGraduationCap size={22} className="text-primary" />
                  ) : (
                    <FaCertificate size={20} className="text-secondary" />
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-white text-base leading-snug">{edu.degree}</h3>
                  <p className="text-primary text-sm font-medium mt-1">{edu.school}</p>
                  <p className="text-gray-500 text-xs mt-2 flex items-center gap-1">
                    <FaCalendarAlt size={10} /> {edu.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
