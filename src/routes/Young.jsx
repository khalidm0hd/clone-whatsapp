import React, { useState, useEffect } from 'react';
import './young.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import logo from '../routes/logo.png';

const Young = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // Change nav color scrolling
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  return (
    <div className={color ? 'head head-bg' : 'head'}>
      <div className='inside'>
        <a href='/'>
          <img src={logo} alt='' className='better'/>
        </a>
        <ul className={click ? 'nav-bar active' : 'nav-bar'}>
          <li><a href='/'>Home</a></li>
          <li><a href='/Privacy'>Privacy</a></li>
          <li><a href='/'>Help Center</a></li>
          <li><a href='/blog'>Blog</a></li>
          <li><a href='/'>for business</a></li>
        </ul>
        <div className='btn-big'>
          <button className='btn'><HiDownload className='trip'/></button>
        </div>
        <div className='hamburger' onClick={handleClick}>
          {click ? (<FaTimes size={20} style={{ color: '#333' }} />) : (<FaBars size={20} style={{ color: '#333' }} />)}
        </div>
      </div>
    </div>
  );
};

export default Young;