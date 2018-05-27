import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SectionA extends Component {
  constructor(props) {
    super(props)

    this.state = {
      heading: props.heading,
      tag: props.tag,
      attachment: props.attachment,
      button: props.button,
      link: props.link
    }
  }

  generateTag() {
    return this.state.tag.map(paragraph => {
      return <p>{ paragraph }</p>
    })
  }

  render() {
    if (this.state.attachment)
      return (
        <section id="section-a" className="grid">
          <div className="content-wrap">
            <h2 className="content-title">{this.state.heading}</h2>
            <div className="content-text">
              <p>{this.state.tag}</p><br />
              <img className="center" id="flyer" src={this.state.attachment} alt={this.state.attachment} />
            </div>
          </div>
        </section>
      )
    else if (this.state.button)
      return (
          <section id="section-a" classNameName="grid">
            <div className="content-wrap">
              <h2 className="content-title">{this.state.heading}</h2>
              <div className="content-text">
                <p>{this.state.tag}</p><br />
                <Link to={this.state.link} className="btn">{this.state.button}</Link>
              </div>
            </div>
          </section>
      )
    else if (this.state.tag instanceof Array)
      return (
        <section id="section-a" className="grid">
          <div className="content-wrap">
            <h2 className="content-title">{this.state.heading}</h2>
            <div className="content-text">
              <p>{this.generateTag()}</p>
            </div>
          </div>
        </section>
      )
    else
      return (
        <section id="section-a" className="grid">
          <div className="content-wrap">
            <h2 className="content-title">{this.state.heading}</h2>
            <div className="content-text">
              <p>{this.state.tag}</p>
            </div>
          </div>
        </section>
      )
  }
}

export default SectionA
