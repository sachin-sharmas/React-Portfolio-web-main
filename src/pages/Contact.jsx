import React, { useState } from 'react'
import Layout from '../components/Layout'
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Bio } from '../Data/info';

const APPS_SCRIPT_URL = process.env.REACT_APP_APPS_SCRIPT_URL
  || 'https://script.google.com/macros/s/AKfycby5tsXUhQsrGk0otTGU2uT4XyN5xyqYs5VTvQoMsBHmva3FzLeMvTTYKzeIWMYaKwIVSg/exec';

const contactInfo = [
  {
    icon: <FaPhoneAlt size={18} />,
    label: 'Phone',
    value: Bio.phone,
    href: 'tel:+917304578100',
  },
  {
    icon: <MdEmail size={20} />,
    label: 'Email',
    value: Bio.email,
    href: `mailto:${Bio.email}`,
  },
  {
    icon: <IoLocation size={20} />,
    label: 'Location',
    value: Bio.location,
    href: null,
  },
];

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  background: 'rgba(5, 8, 22, 0.8)',
  border: '1px solid rgba(145, 94, 255, 0.3)',
  borderRadius: '12px',
  color: 'white',
  fontSize: '0.875rem',
  outline: 'none',
  transition: 'border-color 0.3s',
  fontFamily: 'Poppins, sans-serif',
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      // no-cors is required for Google Apps Script — response will be opaque but data IS saved
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        }),
      });
      navigate('/thankyou');
    } catch {
      setLoading(false);
      setError('Network error. Please check your connection and try again.');
    }
  };

  const handleFocus = (e) => { e.target.style.borderColor = '#915eff'; };
  const handleBlur = (e) => { e.target.style.borderColor = 'rgba(145, 94, 255, 0.3)'; };

  return (
    <Layout>
      <div className="w-full px-5 lg:px-16 xl:px-24 py-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label">Get in touch</p>
          <h2 className="section-title">Contact Me</h2>
          <p className="text-gray-400 mt-3 text-sm max-w-md mx-auto">
            I'm open to new opportunities and collaborations. Let's build something great together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* Left - Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-white mb-2">Let's talk</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Feel free to reach out whether you have a project in mind, want to collaborate, or just want to say hi!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.12 }}
                  className="glass-card p-4 flex items-center gap-4"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(145, 94, 255, 0.12)', color: '#915eff' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white text-sm hover:text-primary transition-colors font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social */}
            <div className="glass-card p-5">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-4">Find me on</p>
              <div className="flex gap-4">
                {[
                  { href: Bio.github, icon: <FaGithub size={20} />, label: 'GitHub' },
                  { href: Bio.linkedin, icon: <FaLinkedin size={20} />, label: 'LinkedIn' },
                  { href: `mailto:${Bio.email}`, icon: <MdEmail size={22} />, label: 'Email' },
                ].map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    target={s.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ y: -4, scale: 1.1 }}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-primary transition-colors"
                    style={{ border: '1px solid rgba(145, 94, 255, 0.3)' }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder="John Doe"
                  required
                  style={inputStyle}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder="john@example.com"
                  required
                  style={inputStyle}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  required
                  onBlur={handleBlur}
                  placeholder="+91 98765 43210"
                  style={inputStyle}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder="Tell me about your project or just say hi..."
                  rows="6"
                  required
                  style={{ ...inputStyle, resize: 'none' }}
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm text-center py-2 px-4 rounded-lg"
                  style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)' }}>
                  {error}
                </p>
              )}

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.97 }}
                className="btn-primary w-full justify-center"
                style={{ opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <><IoIosSend size={17} /> Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </Layout>
  );
};

export default Contact;
