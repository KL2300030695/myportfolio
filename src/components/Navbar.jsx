import React from "react"
import { NavLink } from "react-router-dom"
import "../styles/navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <span className="navbar-title accent-text">Subhash Vadaparthi</span>
          <span className="navbar-subtitle">AI Systems · Computer Vision · Full Stack</span>
          <span className="navbar-tagline">Building innovative AI solutions</span>
        </div>
        <ul className="navbar-links-new">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `navbar-link-new${isActive ? " active-new" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `navbar-link${isActive ? " active" : ""}`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `navbar-link${isActive ? " active" : ""}`
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `navbar-link${isActive ? " active" : ""}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar