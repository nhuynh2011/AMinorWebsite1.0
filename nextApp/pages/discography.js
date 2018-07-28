import { Component, Fragment } from 'react'
import fetch from 'isomorphic-fetch'

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
    console.log(data)
    const discography = data.message.content.summary
    return { discography }
  }

  generateParagraphs = () => {
    return Object.entries(discography).map((paragraph) => {
      return (
        <p>paragraph</p>
      )
    })
  }

	render() {
		return (
      <section> { this.discography }
      </section>
		)
	}
}
			// <section>
			// 	<ul>
			// 		{Object.entries(discography.summary).map(member => (
			// 			<li key={member[0]}>
			// 				<div timeout={fadeTime} zIndexExpanded={99}>
			// 					{expandedState => (
			// 						<Fragment>
			// 							<img alt="" className={`img-${expandedState}`} src="/static/images/member.jpg"/>
			// 							<h1>{member[0]}</h1>
			// 							<h4>{member[1].positions[0]}</h4>
			// 							<div className={`fade-${expandedState}`}>
			// 								<p>{member[1].bio[0]}</p>
			// 							</div>
			// 						</Fragment>
			// 					)}
			// 				</div>
			// 			</li>
			// 		))}
			// 	</ul>
      //
			// 	<style jsx>
			// 		{`
			// 	ul {
			// 		display flex;
			// 		flex-wrap: wrap;
			// 		list-style-type: none;
			// 		justify-content: center;
			// 		-webkit-padding-start: 0;
			// 		-webkit-margin-before: 0;
		  //     -webkit-margin-after: 0;
			// 	}
      //
			// 	li {
			// 		margin: 1rem;
			// 	}
      //
			// 	h1, h4, p {
			// 		text-align: center;
			// 		-webkit-margin-before: 0;
		  //     -webkit-margin-after: 0;
			// 	}
      //
			// 	img {
			// 		display: block;
			// 		margin: 0 auto;
			// 	}
      //
			// 	.img-entering, .img-entered {
			// 		border-radius: 50%;
			// 		height: 5.657rem;
			// 		width: 5.657rem;
      //
			// 	}
      //
			// 	.img-entering, .img-exiting {
			// 		transition: border-radius ${fadeTime}ms,
			// 								height ${fadeTime}ms,
			// 								width ${fadeTime}ms;
			// 	}
      //
			// 	.img-exiting, .img-exited {
			// 		border-radius: 0;
			// 		border-top-left-radius: .5rem;
			// 		border-top-right-radius: .5rem;
			// 		height: 13.455rem;
			// 		width: 13.455rem;
			// 	}
      //
			// 	.fade-entering, .fade-entered {
			// 		opacity: 1;
			// 	}
      //
			// 	.fade-entering {
			// 		transition: opacity ${fadeTime - 150}ms 150ms;
			// 	}
      //
			// 	.fade-exiting {
			// 		transition: opacity ${fadeTime / 2}ms ;
			// 	}
      //
			// 	.fade-exiting, .fade-exited {
			// 		opacity: 0;
			// 	}
      //
			// `}
			// 	</style>
      // </section>
