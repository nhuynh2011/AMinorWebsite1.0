import React, { Component } from 'react'

class SectionF extends Component {
  constructor(props) {
    super(props)

    this.state = {
      heading: props.heading,
      name: props.name,
      date: props.date,
      paragraphs: props.paragraphs,
      image: props.image
    }
  }

  generateParagraphs() {
    if (!this.state.paragraphs) {
      return
    }
    return this.state.paragraphs.map(paragraph => {
      console.log(paragraph)
      return (
        <p>{paragraph}</p>
      )
    })
  }

  imageAlt(name) {
    return "Image of " + name
  }

  render() {
    if (this.state.heading) {
      return (
        <section id="section-f" className="grid">
          <div className="content-wrap">
            <h3 className="content-subtitle">{ this.state.heading }</h3>
            <p>{ this.state.paragraphs }</p><br />
            <h4>"Fix You" o.p.b. Coldplay ​in loving memory of...</h4>
          </div>
        </section>
      )
    }

    return (
      <section id="section-f" className="grid">
  			<div className="content-wrap">
  				<div className="left-side">
  					<h5><b>{ this.state.name }</b></h5>
  					<h6>{ this.state.date }</h6>
  					{ this.generateParagraphs() }
  				</div>
  				<div className="right-side">
  					<img src={this.state.image} alt={ this.imageAlt(this.state.name) } />
  				</div>
  			</div>
  		</section>
    )
  }
}

export default SectionF
