import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">Formula One</Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <text className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                More About
              </text>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to='/circuits'>Circuits</Link></li>
                <li><Link className="dropdown-item" to='/schedule'>Schedule</Link></li>
                <li><Link className="dropdown-item" to='/constructors'>Constructors</Link></li>
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
