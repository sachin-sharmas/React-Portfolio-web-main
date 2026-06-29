import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Bio } from '../Data/info';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const techStack = [
  { name: 'React.js', highlight: true },
  { name: 'WordPress', highlight: true },
  { name: 'Webflow', highlight: true },
  { name: 'Tailwind CSS', highlight: false },
  { name: 'JavaScript', highlight: false },
  { name: 'Shopify', highlight: true },
  { name: 'Strapi CMS', highlight: false },
  { name: 'Google Tag Manager', highlight: false },
  { name: 'Node.js', highlight: false },
  { name: 'Python', highlight: false },
  { name: 'PHP', highlight: false },
  { name: 'REST APIs', highlight: false },
  { name: 'Git', highlight: false },
];

const Footer = () => {
  return (
    <footer
      style={{
        background: 'rgba(5, 8, 22, 0.97)',
        borderTop: '1px solid rgba(145, 94, 255, 0.2)',
      }}
    >
      <div className="w-full px-5 lg:px-16 xl:px-24 py-12">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mb-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold gradient-text mb-3">Sachin Sharma</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Frontend Developer building responsive and performant web experiences with React.js and modern tooling.
            </p>
            <div className="flex gap-4">
              <a
                href={Bio.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={Bio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href={`mailto:${Bio.email}`}
                className="text-gray-500 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <MdEmail size={21} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech.name}
                  className="text-xs px-3 py-1 rounded-full font-medium transition-all"
                  style={tech.highlight ? {
                    border: '1px solid rgba(145, 94, 255, 0.55)',
                    background: 'rgba(145, 94, 255, 0.14)',
                    color: '#c4b5fd',
                  } : {
                    border: '1px solid rgba(145, 94, 255, 0.2)',
                    background: 'rgba(145, 94, 255, 0.05)',
                    color: '#9ca3af',
                  }}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-6 flex flex-col md:flex-row justify-between items-center gap-3"
          style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}
        >
          <p className="text-gray-600 text-sm">
            © 2026 Sachin Sharma. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-1">
            Made with <FaHeart size={11} className="text-primary mx-1" /> in Mumbai
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
