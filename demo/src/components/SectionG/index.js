import React, { Component } from 'react'
import SongDetail from '../SongDetail'

class SectionG extends Component {
  constructor(props) {
    super(props)

    this.state = {
      heading: props.heading,
      tag: props.tag,
      songs: props.songs,
      image: props.image,
      title: props.title,
      release: props.release,
      art: props.art,
      mixing: props.mixing,
      mastering: props.mastering,
      details: props.details
    }
  }

  generateSongs() {
    return this.state.songs.map(song => {
      return <SongDetail song={ song } />
    })
  }

  generateDetails() {
    return this.state.details.map(paragraph => {
      return (
        <div>
          <p>{paragraph}</p>
          <br />
        </div>
      )
    })
  }

  render() {
    return (
      <section id="section-g" className="grid">
        <div className="content-wrap left-side">
          <h2 className="content-title">{ this.state.heading }</h2>
          <p>{ this.state.tag }</p>
          <ol>
            { this.generateSongs() }
          </ol>
        </div>
        <div className="content-wrap right-side album">
  				<img src={ this.state.image } alt="Ignite Album Pic" /><br />
  				<p className="albumtitle">{ this.state.title } Details:</p>
  				<p><b className="albuminfotitle">Release</b>: { this.state.release }</p>
  				<p><b className="albuminfotitle">Album Art & Design</b>: { this.state.art }</p>
  				<p><b className="albuminfotitle">Recorded & Mixing</b>: { this.state.mixing }</p>
  				<p><b className="albuminfotitle">Mastering</b>: { this.state.mastering }</p><br />
  				{ this.generateDetails() }
  			</div>
      </section>
    )
  }
}

export default SectionG
