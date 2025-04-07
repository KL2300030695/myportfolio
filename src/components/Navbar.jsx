import React from "react"
import { Link as RouterLink } from "react-router-dom"
import "../styles/navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Subhash Vadaparthi</h1>
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
        <li><RouterLink to="/projects">Projects</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>
    </nav>
  )
}

export default Navbar