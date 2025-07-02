import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/" className="logo-link"><h1>TalentFlow</h1></Link>
        </div>
        <nav className="nav-menu">
          <ul className="nav-list">
            <li><Link to="/jobseekers" className="nav-link">For Jobseekers</Link></li>
            <li><Link to="/employers" className="nav-link">For Employers</Link></li>
            <li><Link to="/about" className="nav-link">About Us</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </nav>
        <div className="header-auth-buttons">
          <Link to="/login" className="header-btn header-login">Login</Link>
          <Link to="/signup" className="header-btn header-signup">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
