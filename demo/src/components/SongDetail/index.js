import React, { Component } from 'react'

class SongDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: props.song[0],
      publisher: props.song[1],
      soloists: props.song[2],
      arranger: props.song[3]
    }
  }

  render() {
    return (
      <li className="song">
        <p><b className="songtitle">{ this.state.title }</b></p>
        <p className="songinfo">o.p.b. { this.state.publisher }</p>
        <p className="songinfo"><b className="songinfotitle">Soloists:</b> { this.state.soloists }</p>
        <p className="songinfo"><b className="songinfotitle">Arranger:</b> { this.state.arranger }</p>
      </li>
    )
  }
}

export default SongDetail
