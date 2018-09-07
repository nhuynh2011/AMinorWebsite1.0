import React, { Component } from 'react';

export default class SongList extends Component {
  generateSongs = () => {
    return Object.keys(this.props.songList).map((album, index) => {
      return (
        <li key={index} className='song'>
          <p><b className='song-title'>{this.props.songList[album].name} ({this.props.songList[album].time})</b></p>
          <p className='song-info'>o.p.b {this.props.songList[album].opb}</p>
          <p className='song-info'><b className='song-info-title'>Soloists: </b>{this.props.songList[album].soloists}</p>
          <p className='song-info'><b className='song-info-title'>Arranged by: </b>{this.props.songList[album].arranger}</p>
          <style jsx>
            {
              `
                .song {
                  font-size: .8rem;
                  color: #666;
                }

                .song-title {
                  font-weight: 700;
                  font-size: 1rem;
                  color: black;
                }

                .song-info-title {
                  font-weight: 600;
                  font-size: .8rem;
                  color: black;
                }

                .song-info; {
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
      );
    })
  }

  render() {
    return (
      <ol>
        { this.generateSongs() }
      </ol>
    );
  }
}
