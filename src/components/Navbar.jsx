import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo_white.png'; 

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {}
        <div className="navbar-logo" onClick={() => handleNavigation('/')}>
          <img src={logo} alt="SAFENEX Logo" className="logo-img" />
        </div>

        <ul className="navbar-menu">
          <li onClick={() => handleNavigation('/')}>Home</li>
          <li onClick={() => handleNavigation('/services')}>Services</li>
          <li onClick={() => handleNavigation('/about')}>About</li>
          <li onClick={() => handleNavigation('/combustion')}>Combustion</li>
          <li onClick={() => handleNavigation('/emulsification')}>Emulsification</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
