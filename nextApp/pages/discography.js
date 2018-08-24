import { Component, Fragment } from 'react'
import fetch from 'isomorphic-fetch'
import SongList from '../components/SongList'
import Album from '../components/Album'
import DescriptionBox from '../components/DescriptionBox'

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

	render() {
    const { discography } = this.props

		return (
      <div className="discography">
        <DescriptionBox
          heading="Our Discography"
          subtext={discography.content.summary} />
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
              .break {
                height: 2px;
              	background: #eaeaea;
                width: 90%;
                margin-left: auto;
                margin-right: auto;
                padding: 0;
              }
            `
          }
        </style>
      </div>
		)
	}

}
