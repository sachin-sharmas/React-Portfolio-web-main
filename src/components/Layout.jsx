import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div style={{ backgroundColor: '#050816', minHeight: '100vh' }}>
      <Navbar />
      <main className="pt-20 text-white">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
