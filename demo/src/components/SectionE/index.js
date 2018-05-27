import React, { Component } from 'react'

class SectionE extends Component {
  constructor(props) {
    super(props)

    this.state = {
      heading: props.heading,
      tag: props.tag
    }
  }

  render() {
    return (
      <section id="section-e" className="grid">
        <div className="box">
          <h2 className="content-title">{this.state.heading}</h2>
          <p>{this.state.tag}</p>
        </div>
      </section>
    )
  }
}

export default SectionE
