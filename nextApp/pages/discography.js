import { Component, Fragment } from 'react'
import fetch from 'isomorphic-fetch'
import SongList from '../components/SongList'
import Album from '../components/Album'

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

  // generateAlbum = (content, name) => {
  //   console.log('\n' + name + '\n');
  //   console.log(content);
  //   return (
  //     <section className="albumSection grid">
  //       <div className="content-wrap left-side">
  //         <h2 className="content-title">{ name + ' (' + content.year + ')' }</h2>
  //         <p>Available now on <a href='#'>{Object.keys(content.links)}</a></p>
  //         <SongList songList={content.songs} />
  //       </div>
  //       <div className="content-wrap right-side album">
  //         <img src={content.logo} alt={content.logo} /><br />
  //         <p className='albumtitle'>{name} Details:</p>
  //         <p><b className='albuminfotitle'>Release</b> : {content.release}</p>
  //         <p><b className='albuminfotitle'>Album Art & Design</b> : {content.design}</p>
  //         <p><b className='albuminfotitle'>Recording & Mixing</b> : {content.recording}</p>
  //         <p><b className='albuminfotitle'>Mastering</b> : {content.mastering}</p>
  //         { content.text.map((paragraph, index) => <p>{paragraph}</p>) }
  //       </div>
  //     </section>
  //   )
  // }

	render() {
    const { discography } = this.props

		return (
      <div className="discography">
        <section className="section-a">
          <div className="content-wrap">
            <h1 className="content-title">Our Discography</h1>
            <p>{ this.generateHeader(discography) }</p>
          </div>
        </section>
        <Album
          content={discography.content.Ignite}
          name='Ignite' />
        <section className='section-a break' />
        <Album
          content={discography.content.Incognito}
          name='Incognito' />

        <style jsx>
          {
            `
              .section-a {
              	background: #eaeaea;
                text-align: center;
              	color: #333;
              	padding: 1rem 2rem 2rem 2rem;
              }

              .break {
                height: 2px;
              	background: #eaeaea;
                padding: 0;
              }

              .content-title {
                font-size: 1.5rem;
                font-weight: 550;
                color: black;
              }

              p {
                font-weight: 500;
                font-size: 1rem;
              }
            `
          }
        </style>
      </div>
		)
	}

}
