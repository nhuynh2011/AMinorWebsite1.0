import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Showcase extends Component {
  constructor(props) {
    super(props)

    this.state = {
      image: props.image,
      heading: props.heading,
      tag: props.tag,
      button: props.button,
      url: props.url
    }
  }


  render() {
    return (
      <header id="showcase" className="grid">
        <img className="bg-image" src={ this.state.image }>
        </img>
        <div className="content-wrap">
          <h1>{this.state.heading}</h1>
          <p>{this.state.tag}</p>
          <Link to={this.state.url} className="btn">{this.state.button}</Link>
        </div>
      </header>
    )
  }
}

export default Showcase
