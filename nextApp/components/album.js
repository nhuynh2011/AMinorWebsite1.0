import { Component } from 'react';

import SongList from './song-list';

import AlbumDetails from './album-details';

export default class Album extends Component {
  printLinks(links) {
    if (links.length > 1) {
      return links.map((key, index) => {
        if (index < links.length - 2)
          return (
            <span key={index}><a href={this.props.content.links[key]} key={key}>{key}</a>, </span>
          );
        else if (index < links.length - 1)
          return (
            <span key={index}><a href={this.props.content.links[key]} key={key}>{key}</a> </span>
          );
        else return <span key={index}>and <a href={this.props.content.links[key]} key={key}>{key}</a></span>;
      })
    } else if (links.length === 1) {
      const key = links[0];
      return <span><a href={this.props.content.links[key]} key={key}>{key}</a></span>;
    } else {
      return <span>ERROR</span>;
    }
  }

  render() {
    return (
      <section className="album-section grid">
        <div className="album-header left-side">
          <h2>{ this.props.name + ' (' + this.props.content.year + ')' }</h2>
          <p>Available now on { this.printLinks(Object.keys(this.props.content.links)) }</p>
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
            .album-section {
              background: #fff;
              color: #333;
              padding: 0 2rem;
              margin-top: 2rem;
            }

            h2 {
              font-size: 1.2rem;
              padding: 0 0 0 2rem;
              margin-bottom: 0.5rem;
              text-align: center;
            }

            p {
              font-size: 0.8rem;
              padding: 0 0 0 2rem;
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
