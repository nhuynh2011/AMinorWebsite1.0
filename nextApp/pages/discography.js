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
