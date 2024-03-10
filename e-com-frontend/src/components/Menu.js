import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
      return location.pathname === path;
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            className={`nav-link ${isActive('/') ? 'active' : ''}`} to="/"
          >
            Home
          </Link>
          
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${isActive('/login') ? 'active' : ''}`} to="/login">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${isActive('/register') ? 'active' : ''}`}
            to="/register"
          >
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
