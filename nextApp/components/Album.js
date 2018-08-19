import React, { Component } from 'react'
import SongList from './SongList'
import AlbumDetails from './AlbumDetails'

class Album extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="albumSection grid">
        <div className="albumHeader left-side">
          <h2>{ this.props.name + ' (' + this.props.content.year + ')' }</h2>
          <p>Available now on <a href='#'>{Object.keys(this.props.content.links)}</a></p>
          <SongList songList={this.props.content.songs} />
        </div>
        <div className="right-side">
          <AlbumDetails
            content={this.props.content}
            name={this.props.name} />
        </div>

        <style jsx>
        {
          `
            .albumSection {
              background: #fff;
              color: #333;
              padding-top: 2rem;
            }

            h2 {
              padding: 0 0 0 2rem;
              font-size: 1.2rem;
              margin-bottom: .5rem;
              text-align: center;
            }

            p {
              padding: 0 0 0 2rem;
              font-size: .8rem;
              margin-top: 0;
              margin-bottom: 1rem;
              text-align: center;
            }

            @media(min-width: 700px) {
              .grid {
                display: grid;
                grid-template-columns: 1fr repeat(2, minmax(auto, 45rem)) 1fr;
              }

              .left-side {
                grid-column: 1/3;
              }

              .right-side {
                grid-column: 3/5:
                padding-left: 10%;
              }
            }
          `
        }
        </style>
      </section>
    );
  }
}

export default Album
