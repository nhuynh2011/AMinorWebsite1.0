import React, { Component } from 'react'

class SongList extends Component {
  constructor(props) {
    super(props);
  }

  generateSongs = () => {
    return Object.keys(this.props.songList).map((name, index) => {
      return (
        <li key={index} className='song'>
          <p><b className='songtitle'>{ name } ({this.props.songList[name].time})</b></p>
          <p className='songinfo'>o.p.b {this.props.songList[name].opb}</p>
          <p className='songinfo'><b className='songinfotitle'>Soloists: </b>{this.props.songList[name].soloists}</p>
          <p className='songinfo'><b className='songinfotitle'>Arranger: </b>{this.props.songList[name].arranger}</p>
          <style jsx>
            {
              `
                .song {
                  font-size: .8rem;
                  color: #666;
                }

                .songtitle {
                  font-weight: 700;
                  font-size: 1rem;
                  color: black;
                }

                .songinfotitle {
                  font-weight: 600;
                  font-size: .8rem;
                  color: black;
                }

                .songinfo; {
                  color: #666;
                  font-weight: 200;
                  font-size: .5rem;
                }

                p {
                  font-size: .8rem;
                  padding: 0 0 0 1rem;
                  margin: 0;
                }

                li {
                	text-align: left;
                  margin: .5rem;
                }
              `
            }
          </style>
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
