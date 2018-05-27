import React, { Component } from 'react'

class PastMemberElem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name
    }
  }

  render() {
    return (
      <li>{ this.state.name }</li>
    )
  }
}

export default PastMemberElem
