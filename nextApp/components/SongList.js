import React, { Component } from 'react'
import Song from './Song'

class SongList extends Component {
  constructor(props) {
    super(props)
  }

  generateSongs = () => {
    return Object.keys(this.props.songList).map((name) => {
      return (
        <li className='song'>
          <p><b className='songtitle'>{ name } ({this.props.songList[name].time})</b></p>
          <p className='songinfo'>o.p.b {this.props.songList[name].opb}</p>
          <p className='songinfo'><b className='songinfotitle'>Soloists: </b>{this.props.songList[name].soloists}</p>
          <p className='songinfo'><b className='songinfotitle'>Arranger: </b>{this.props.songList[name].arranger}</p>
        </li>
      )
    })
  }

  render() {
    return (
      <ol>
        { this.generateSongs() }
      </ol>
    )
  }
}

export default SongList
