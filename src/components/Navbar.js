import { Link, useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import '../styles/Navbar.css';
import { MenuIcon } from './Icons';


function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();
    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

  return (
    <div className='navbar' id={expandNavbar ? 'open' : 'close'}>
        <div className='toggleButton'>
            <button onClick={() => {
                    setExpandNavbar((prev) => !prev);
                }}
            > 
                <MenuIcon />
            </button>
        </div>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar