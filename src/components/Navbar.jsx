import React from "react"
import { Link as RouterLink } from "react-router-dom"
import "../styles/navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Subhash Vadaparthi</h1>
      <ul>
        <li><RouterLink to="/myportfolio/home">Home</RouterLink></li>
        <li><RouterLink to="/myportfolio/about">About</RouterLink></li>
        <li><RouterLink to="/myportfolio/projects">Projects</RouterLink></li>
        <li><RouterLink to="/myportfolio/contact">Contact</RouterLink></li>
      </ul>
    </nav>
  )
}

export default Navbar