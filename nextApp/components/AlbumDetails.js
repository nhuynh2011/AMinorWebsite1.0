import React, { Component } from 'react'

class AlbumDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={this.props.content.logo} alt={this.props.content.logo} /><br />
        <p className='albumtitle'>{this.props.name} Details:</p>
        <p><b className='albuminfotitle'>Release</b> : {this.props.content.release}</p>
        <p><b className='albuminfotitle'>Album Art & Design</b> : {this.props.content.design}</p>
        <p><b className='albuminfotitle'>Recording & Mixing</b> : {this.props.content.recording}</p>
        <p><b className='albuminfotitle'>Mastering</b> : {this.props.content.mastering}</p>
        { this.props.content.text.map((paragraph, index) => <p>{paragraph}</p>) }

        <style jsx>
        {
          `
            img {
              box-shadow: 0 0 5px 2px rgba(0, 0, 0, .3);
              display: block;
              width: 80%;
              margin-left: auto;
              margin-right: auto;
            }

            .albumtitle {
              font-size: 1.2rem;
              font-weight: 550;
              color: black;
            }

            .albuminfotitle {
              color: black;
              font-weight: 550;
            }

            p {
              padding: 0 0 0 5%;
              font-size: .8rem;
            }
          `
        }
        </style>
      </div>
    )
  }
}

export default AlbumDetails
