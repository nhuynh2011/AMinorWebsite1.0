import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg bg-medium-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
            <img src="https://shift8-stardothostingin.netdna-ssl.com/wp-content/uploads/2016/01/menu-512.png"alt="hamburger menu"/>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" id="nav">
            <li className="NavItem"><NavLink to="/" className="nav-link" activeClassName="active-tab" exact>Home</NavLink></li>
            <li className="NavItem"><NavLink to="/news" className="nav-link" activeClassName="active-tab">News</NavLink></li>
            <li className="NavItem"><NavLink to="/history" className="nav-link" activeClassName="active-tab">History</NavLink></li>
            <li className="NavItem"><NavLink to="/members" className="nav-link" activeClassName="active-tab">Members</NavLink></li>
            <li className="NavItem"><NavLink to="/services" className="nav-link" activeClassName="active-tab">Services</NavLink></li>
            <li className="NavItem"><NavLink to="/repertoire" className="nav-link" activeClassName="active-tab">Repertoire</NavLink></li>
            <li className="NavItem"><NavLink to="/contact" className="nav-link" activeClassName="active-tab">Contact Us</NavLink></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar
