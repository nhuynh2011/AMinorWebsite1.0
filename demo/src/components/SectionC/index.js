import React, { Component } from 'react'

class SectionC extends Component {
  constructor(props) {
    super(props)

    this.state = {
      heading: props.heading,
      tag: props.tag
    }
  }

  render() {
    return (
      <section id="section-c" className="grid">
        <div className="content-wrap">
          <h2 className="content-title">{this.state.heading}</h2>
          <p>{this.state.tag}</p>
        </div>
      </section>
    )
  }
}

export default SectionC
