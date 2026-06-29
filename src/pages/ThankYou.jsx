import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaHome, FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import Layout from '../components/Layout'

const ThankYou = () => {
  const [count, setCount] = useState(15);

  useEffect(() => {
    if (count <= 0) return;
    const timer = setTimeout(() => setCount(count - 1), 1000);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <Layout>
      <div
        className="min-h-screen flex items-center justify-center px-8"
        style={{ minHeight: 'calc(100vh - 160px)' }}
      >
        <div className="text-center max-w-xl w-full">

          {/* Animated check icon */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
            className="flex justify-center mb-8"
          >
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, rgba(145,94,255,0.25), rgba(0,212,255,0.2))',
                border: '2px solid rgba(145,94,255,0.5)',
                boxShadow: '0 0 50px rgba(145,94,255,0.3)',
              }}
            >
              <FaCheckCircle size={44} style={{ color: '#00d4ff' }} />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            <span className="gradient-text">Message Sent!</span>
          </motion.h1>

          {/* Sub-text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 text-base leading-relaxed mb-2"
          >
            Thanks for reaching out! I've received your message and will get back to you as soon as possible — usually within 24 hours.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="text-gray-600 text-sm mb-10"
          >
            Redirecting you to home in{' '}
            <span className="text-primary font-semibold">{count}s</span>
            {count <= 0 && <RedirectNow />}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/" className="btn-primary">
              <FaHome size={14} /> Back to Home
            </Link>
            <Link to="/projects" className="btn-outline">
              View My Projects <FaArrowRight size={13} />
            </Link>
          </motion.div>

          {/* Decorative blobs */}
          <div
            className="fixed top-1/4 left-1/4 w-72 h-72 rounded-full pointer-events-none -z-10"
            style={{ background: 'rgba(145,94,255,0.07)', filter: 'blur(80px)' }}
          />
          <div
            className="fixed bottom-1/4 right-1/4 w-72 h-72 rounded-full pointer-events-none -z-10"
            style={{ background: 'rgba(0,212,255,0.06)', filter: 'blur(80px)' }}
          />
        </div>
      </div>
    </Layout>
  );
};

// Triggers navigation when countdown hits 0
const RedirectNow = () => {
  useEffect(() => {
    window.location.href = '/';
  }, []);
  return null;
};

export default ThankYou;
