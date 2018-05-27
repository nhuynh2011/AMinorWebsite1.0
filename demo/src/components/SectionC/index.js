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
      <section id="section-c" class="grid">
        <div class="content-wrap">
          <h2 class="content-title">{this.state.heading}</h2>
          <p>{this.state.tag}</p>
        </div>
      </section>
    )
  }
}

export default SectionC
