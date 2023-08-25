import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" className="navbar-logo">
                    My Website
                </Link>
            </div>
            {/* <ul className="navbar-links">
        <li className="navbar-item">
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/services" activeClassName="active">
            Services
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul> */}
        </nav>
    );
};

export default NavBar;
