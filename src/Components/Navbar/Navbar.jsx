import React, { useEffect, useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? 'navbar_active' : ''}`}>
      <div className="logo">
        <h1>Manzeel</h1>
      </div>
      <div className={`option ${scrolled ? 'li_active' : ''}`}>
        <ul>
          <li><a className={`${scrolled ? 'li_active' : ''}`} href="#">Home</a></li>
          <li><a className={`${scrolled ? 'li_active' : ''}`} href="#">Portfolio</a></li>
          <li><a className={`${scrolled ? 'li_active' : ''}`} href="#">Blogs</a></li>
          <li><a className={`${scrolled ? 'li_active' : ''}`} href="#">About</a></li>
        </ul>
      </div>
      <div className="call_button">
        <button>Let's talk</button>
      </div>
    </div>
  )
}

export default Navbar