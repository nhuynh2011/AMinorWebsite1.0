import { Component } from 'react';

import fetch from 'isomorphic-fetch';

import Album from '../components/album';
import DescriptionBox from '../components/description-box';


export default class extends Component {
	
  static async getInitialProps() {
    const response = await fetch('https://0zw0wj7m2i.execute-api.us-east-1.amazonaws.com/TestGet/content?page=discography');
    const data = await response.json();
    const discography = data.message;
    return { discography };
  }

	render() {
    const { discography } = this.props;

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
              	background: #eaeaea;
                height: 2px;
                margin: auto;
                padding: 0;
                width: 90%;
              }
            `
          }
        </style>
      </div>
		);
	}
}
