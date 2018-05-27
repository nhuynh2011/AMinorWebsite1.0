import React, { Component } from 'react'

class MemberCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: props.name,
      position: props.position,
      bio: props.bio,
      img: props.img
    }
  }

  render() {
    return (
      <li className="membercard card-4">
        this will be the card to overlay on screen
      </li>
    )
  }
}

export default MemberCard
