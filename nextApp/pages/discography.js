import { Component } from 'react';

import fetch from 'isomorphic-fetch';

import Album from '../components/album';
import DescriptionBox from '../components/description-box';


export default class extends Component {
	
  static async getInitialProps() {
    const response = await fetch('https://0zw0wj7m2i.execute-api.us-east-1.amazonaws.com/TestGet/content?page=discography');
    const data = await response.json();
    const discography = data.message.content;
    return { discography };
  }

	render() {
    const { discography } = this.props;

		return (
      <section>
        <DescriptionBox bgColor="#eaeaea">
	        <h1>Our Discography</h1>
	        {discography.summary.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </DescriptionBox>
        
	      <Album
          content={discography.Ignite}
          name='Ignite' />
        
	      <hr className="break"/>
	      
        <Album
          content={discography.Incognito}
          name='Incognito' />

        <style jsx>
          {
            `
              .break {
              	border-top: solid 2px #eaeaea;
              	width: 90%;
              }
            `
          }
        </style>
      </section>
		);
	}
}
