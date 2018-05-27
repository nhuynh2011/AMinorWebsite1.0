import React, { Component } from 'react'

class SectionD extends Component {
  constructor(props) {
    super(props)

    this.state = {
      heading: props.heading,
      tag: props.tag,
      email: props.email
    }
  }

  render() {
    return (
      <section id="section-d" className="grid">
        <div className="box">
          <h2 className="content-title">{this.state.heading}</h2>
          <p>{this.state.tag}</p>
          <p>{this.state.email}</p>
        </div>
      </section>
    )
  }
}

export default SectionD
