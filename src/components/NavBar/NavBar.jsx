import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Formula One</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarTogglerDemo03" 
          aria-controls="navbarTogglerDemo03" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="/" 
                id="navbarDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                More About
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to='/circuits'>Circuits</Link></li>
                <li><Link className="dropdown-item" to='/schedule'>Schedule</Link></li>
                <li><Link className="dropdown-item" to='/constructors'>Constructors</Link></li>
                <li><Link className="dropdown-item" to='/drivers'>Drivers</Link></li>
                <li><Link className="dropdown-item" to='/laps'>Lap Times</Link></li>
                <li><Link className="dropdown-item" to='/winners'>Winners</Link></li>
                <li><hr className="dropdown-divider"/></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
