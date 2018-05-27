import React, { Component } from 'react'

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name,
      position: props.position,
      bio: props.bio,
      img: props.img
    }
  }

  imageAlt(name) {
    return "Picture of " + name
  }

  render() {
    return (
      <li className="card-4">
        <div className="card">
          <img src={ this.state.img } alt={this.imageAlt(this.state.name)} />
          <div className="card-content">
            <h3 className="card-title">{ this.state.name }</h3>
            <h4 className="card-subtitle">{ this.state.position }</h4>
            <p>{ this.state.bio }</p>
          </div>
        </div>
      </li>
    )
  }
}

export default Card
