import React, { useState } from 'react'
import Layout from '../components/Layout'
import { projects } from '../Data/info'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const priorityOrder = ['All', 'Live Site', 'WordPress', 'React', 'JavaScript', 'Tailwind CSS', 'Elementor', 'CSS', 'PHP', 'API', 'Redux', 'LocalStorage'];
const existingTags = new Set(projects.flatMap((p) => p.tags));
const allTags = [
  ...priorityOrder.filter((t) => t === 'All' || t === 'Live Site' || existingTags.has(t)),
  ...Array.from(existingTags).filter((t) => !priorityOrder.includes(t)),
];

const Projects = () => {
  const [activeTag, setActiveTag] = useState('All');

  const filtered =
    activeTag === 'All'
      ? projects
      : activeTag === 'Live Site'
      ? projects.filter((p) => p.client)
      : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <Layout>
      <div className="w-full px-5 lg:px-16 xl:px-24 py-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="section-label">My work</p>
          <h2 className="section-title">Projects</h2>
          <p className="text-gray-400 mt-3 text-sm">
            {projects.length}+ projects — client websites, web apps, and personal builds
          </p>
        </motion.div>

        {/* Filter Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className="text-sm px-5 py-2 rounded-full font-medium transition-all duration-300"
              style={
                activeTag === tag
                  ? {
                      background: 'linear-gradient(90deg, #915eff, #00d4ff)',
                      color: 'white',
                      boxShadow: '0 4px 15px rgba(145,94,255,0.4)',
                    }
                  : {
                      background: 'rgba(145,94,255,0.08)',
                      border: '1px solid rgba(145,94,255,0.3)',
                      color: '#aaa6c3',
                    }
              }
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTag}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-3 md:grid-cols-2 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id + project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -8 }}
                className="glass-card overflow-hidden group flex flex-col"
                style={{ cursor: 'default' }}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48 flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement.style.background =
                        'linear-gradient(135deg,rgba(145,94,255,0.25),rgba(0,212,255,0.15))';
                    }}
                  />

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3"
                    style={{ background: 'rgba(5, 8, 22, 0.88)' }}
                  >
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline"
                        style={{ padding: '7px 14px', fontSize: '0.75rem' }}
                      >
                        <FaGithub size={13} /> Code
                      </a>
                    )}
                    <a
                      href={project.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ padding: '7px 14px', fontSize: '0.75rem' }}
                    >
                      <FaExternalLinkAlt size={11} /> Live Demo
                    </a>
                  </div>

                  {/* Live Site badge */}
                  {project.client && (
                    <div className="absolute top-2 right-2">
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-semibold"
                        style={{
                          background: 'rgba(0,212,255,0.2)',
                          border: '1px solid rgba(0,212,255,0.5)',
                          color: '#00d4ff',
                        }}
                      >
                        Live Site
                      </span>
                    </div>
                  )}

                  {/* Tag chips */}
                  <div className="absolute top-2 left-2 flex gap-1 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-md font-medium"
                        style={{
                          background: 'rgba(5,8,22,0.85)',
                          border: '1px solid rgba(145,94,255,0.4)',
                          color: '#d1c4e9',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-white text-base mb-1">{project.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-primary transition-colors font-medium"
                      >
                        <FaGithub size={13} /> GitHub
                      </a>
                    )}
                    <a
                      href={project.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-secondary transition-colors font-medium"
                    >
                      <FaExternalLinkAlt size={11} /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </Layout>
  );
};

export default Projects;
