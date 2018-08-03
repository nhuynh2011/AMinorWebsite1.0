import { Component, Fragment } from 'react'
import fetch from 'isomorphic-fetch'
import SongList from '../components/SongList'

const fadeTime = 1000

export default class extends Component {
  static async getInitialProps() {
    const response = await fetch(
      'https://0zw0wj7m2i.execute-api.us-east-1.amazonaws.com/TestGet/content?page=discography',
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      }
    )
    const data = await response.json()
    const discography = data.message
    return { discography }
  }

  generateHeader = (discography) => {
    return Object.entries(discography.content.summary).map((paragraph, index) => {
      return (
        <p className="content-text" key={index}>{ paragraph[1] }</p>
      )
    })
  }

  generateAlbum = (content, name) => {
    console.log('\n' + name + '\n');
    console.log(content);
    return (
      <section className="albumSection grid">
        <div className="content-wrap left-side">
          <h2 className="content-title">{ name + ' (' + content.year + ')' }</h2>
          <p>Available now on <a href='#'>{Object.keys(content.links)}</a></p>
          <SongList songList={content.songs} />
        </div>
        <div className="content-wrap right-side album">
          <img src={content.logo} alt={content.logo} /><br />
          <p className='albumtitle'>{name} Details:</p>
          <p><b className='albuminfotitle'>Release</b> : {content.release}</p>
          <p><b className='albuminfotitle'>Album Art & Design</b> : {content.design}</p>
          <p><b className='albuminfotitle'>Recording & Mixing</b> : {content.recording}</p>
          <p><b className='albuminfotitle'>Mastering</b> : {content.mastering}</p>
          { content.text.map((paragraph, index) => <p>{paragraph}</p>) }
        </div>
      </section>
    )
  }

	render() {
    const { discography } = this.props

		return (
      <div id="discography">
        <section className="section-a">
          <div className="content-wrap">
            <h1 className="content-title">Our Discography</h1>
            { this.generateHeader(discography) }
          </div>
        </section>
        { this.generateAlbum(discography.content.Ignite, 'Ignite') }
        <section className='section-a break' />
        { this.generateAlbum(discography.content.Incognito, 'Incognito') }

        <style jsx>
          {
            `
              #discography {
              	padding-top: 55px;
              	margin: 0;
              	font-size: 16px;
              	line-height: 1.5;
              	text-align: center;
              }

              img {
                display: block;
                width: 100%;
                height: cover;
              }

              .section-a {
              	background: #eaeaea;
              	color: #333;
              	padding-bottom: 2rem;
              }

              .section-a .break {
                height: 2px;
                padding: 0;
              }

              .albumSection {
              	background: #fff;
              	color: #333;
              	padding: 2rem;
              	text-display: center;
              }

              .albumSection ol li {
              	padding: .75rem;
              }

              .albumSection ol li p {
              	padding: 0rem;
              }

              .albumSection ol .song {
              	font-size: .8rem;
              	color: #666;
              }

              .albumSection ol .songtitle {
              	font-weight: 700;
              	font-size: 1.2rem;
              	color: black;
              }

              .albumSection ol .songinfotitle {
              	font-weight: 600;
              	color: black;
              }

              .albumSection ol .songinfo; {
              	color: #666;
              	font-weight: 200;
              	font-size: .5rem;
              }

              .albumSection .album {
              	text-align: left;
              	color: #666;
              }

              .albumSection .albumtitle {
              	font-size: 1.2rem;
              	font-weight: 550;
              	color: black;
              }

              .albumSection .albuminfotitle {
              	color: black;
              	font-weight: 550;
              }

              .albumSection .album p {
              	padding: 0 0 0 5%;
              }

              .albumSection .right-side img {
              	box-shadow: 0 0 5px 2px rgba(0, 0, 0, .3);
              	display: block;
              	width: 80%;
              	margin-left: auto;
              	margin-right: auto;
              }

              .albumSection .left-side li {
              	text-align: left;
              }

              @media(min-width: 700px) {
              	.grid {
              		display: grid;
              		grid-template-columns: 1fr repeat(2, minmax(auto, 45rem)) 1fr;
              	}

              	.section-a .content-text {
              		columns: 1;
              		column-gap: 2rem;
              	}

              	.section-a .content-text p {
              		padding-top: 0;
              	}

              	.albumSection .left-side {
              		grid-column: 1/3;
              	}

              	.albumSection .right-side {
              		grid-column: 3/5;
              		padding-left: 5%;
              	}
            `
          }
        </style>
      </div>
		)
	}

}
