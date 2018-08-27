import { Component } from 'react';

export default class AlbumDetails extends Component {
  render() {
    return (
      <div>
        <img src={this.props.content.logo} alt={this.props.content.logo} /><br />
        <p className='album-title'>{this.props.name} Details:</p>
        <p><b className='album-info-title'>Release</b> : {this.props.content.release}</p>
        <p><b className='album-info-title'>Album Art & Design</b> : {this.props.content.design}</p>
        <p><b className='album-info-title'>Recording & Mixing</b> : {this.props.content.recording}</p>
        <p><b className='album-info-title'>Mastering</b> : {this.props.content.mastering}</p>
        { this.props.content.text.map((paragraph, index) => <p key={index}>{paragraph}</p>) }

        <style jsx>
        {
          `
            img {
              box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
              display: block;
              margin: auto;
              width: 80%;
            }

            .album-title {
              color: black;
              font-size: 1.2rem;
              font-weight: 550;
            }

            .album-info-title {
              color: black;
              font-weight: 550;
            }

            p {
              font-size: 0.8rem;
              padding: 0 0 0 5%;
            }
          `
        }
        </style>
      </div>
    );
  }
}