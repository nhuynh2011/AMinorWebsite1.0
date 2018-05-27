import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul id="nav">
          <li><NavLink to="/" activeClassName="active-tab" exact>Home</NavLink></li>
          <li><NavLink to="/news" activeClassName="active-tab">News</NavLink></li>
          <li><NavLink to="/history" activeClassName="active-tab">History</NavLink></li>
          <li><NavLink to="/members" activeClassName="active-tab">Members</NavLink></li>
          <li><NavLink to="/services" activeClassName="active-tab">Services</NavLink></li>
          <li><NavLink to="/repertoire" activeClassName="active-tab">Repertoire</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active-tab">Contact Us</NavLink></li>
        </ul>
      </nav>
    )
  }
}

export default NavBar
