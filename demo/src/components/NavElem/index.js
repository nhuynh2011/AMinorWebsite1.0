import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavElem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: props.name,
      link: props.link
    }
  }

  render() {
    return (
      <li>
        <Link to={this.state.link}>{this.state.name}</Link>
      </li>
    )
  }
}

export default NavElem
