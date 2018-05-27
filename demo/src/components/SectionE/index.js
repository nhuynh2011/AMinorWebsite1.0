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
      <section id="section-e" class="grid">
        <div class="box">
          <h2 class="content-title">{this.state.heading}</h2>
          <p>{this.state.tag}</p>
        </div>
      </section>
    )
  }
}

export default SectionE
