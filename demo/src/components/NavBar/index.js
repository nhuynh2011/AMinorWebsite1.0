import React, { Component } from 'react'
import NavElem from '../NavElem'

class NavBar extends Component {
  render() {
    return (
      <ul id="nav">
        <NavElem name="Home" link="/" />
        <NavElem name="News" link="/news" />
        <NavElem name="History" link="/history" />
        <NavElem name="Members" link="/members" />
        <NavElem name="Services" link="/services" />
        <NavElem name="Repertoire" link="/repertoire" />
        <NavElem name="Contact Us" link="/contact" />
      </ul>
    )
  }
}

export default NavBar
