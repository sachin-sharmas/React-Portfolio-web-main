import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { Bio } from '../Data/info'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 w-full z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(5, 8, 22, 0.92)'
            : 'rgba(5, 8, 22, 0.6)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderBottom: scrolled ? '1px solid rgba(145, 94, 255, 0.2)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 30px rgba(145, 94, 255, 0.08)' : 'none',
        }}
      >
        <div className="w-full px-5 lg:px-16 xl:px-24 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold gradient-text tracking-tight">
            SACHIN.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `nav-link text-sm font-medium transition-colors ${
                    isActive ? 'active text-primary' : 'text-gray-300'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* GitHub Button - Desktop */}
          <a
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 text-sm font-medium text-gray-300 px-4 py-2 rounded-full transition-all duration-300 hover:text-primary"
            style={{
              border: '1px solid rgba(145, 94, 255, 0.4)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#915eff';
              e.currentTarget.style.background = 'rgba(145,94,255,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(145, 94, 255, 0.4)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <FaGithub size={15} /> GitHub
          </a>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-gray-300 text-xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{ backgroundColor: 'rgba(5, 8, 22, 0.98)', backdropFilter: 'blur(20px)' }}
        >
          {navLinks.map((link, i) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-2xl font-bold transition-colors ${
                  isActive ? 'gradient-text' : 'text-gray-300 hover:text-white'
                }`
              }
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {link.name}
            </NavLink>
          ))}
          <a
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 text-base font-medium mt-4 px-6 py-3 rounded-full transition-all"
            style={{
              border: '1px solid #915eff',
              color: '#915eff',
            }}
          >
            <FaGithub size={18} /> GitHub Profile
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
