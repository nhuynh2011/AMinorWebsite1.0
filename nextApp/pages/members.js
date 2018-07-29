import { Component, Fragment } from 'react'
import fetch from 'isomorphic-fetch'
import LightBox from '../components/lightBox'

const fadeTime = 1000

export default class extends Component {

	static async getInitialProps() {
		const response  = await fetch('https://0zw0wj7m2i.execute-api.us-east-1.amazonaws.com/TestGet/content?page=members')
		const data = await response.json()
		const members = data.message.content
		return { members }
	}

	render() {
		const { members } = this.props

		return (
			<section>

				<h3>Eboard Members</h3>
				<ul>
					{members.current.exec.map(exec => {
						const name = Object.keys(exec)[0]
						const execData = exec[name]

						return (
							<li key={name}>
								<LightBox timeout={fadeTime} zIndexExpanded={99}>
									{expandedState => (
										<Fragment>
											<img alt="" className={`img-${expandedState}`} src={execData.cardpic}/>
											<div className={`content-${expandedState}`}>
												<h1>{name}</h1>
												<h4>{execData.position}</h4>
												<div className={`fade-${expandedState}`}>
													<p>{execData.part}</p>
													<p>{execData.major}</p>
													<p className="bio">{execData.bio}</p>
												</div>
											</div>
										</Fragment>
									)}
								</LightBox>
							</li>
						)
					})}
				</ul>

				<h3>Members</h3>
				<ul>
					{members.current.generalmembers.map(exec => {
						const name = Object.keys(exec)[0]
						const execData = exec[name]

						return (
							<li key={name}>
								<LightBox timeout={fadeTime} zIndexExpanded={99}>
									{expandedState => (
										<Fragment>
											<img alt="" className={`img-${expandedState}`} src={execData.cardpic}/>
											<div className={`content-${expandedState}`}>
												<h1>{name}</h1>
												<h4>{execData.position}</h4>
												<div className={`fade-${expandedState}`}>
													<p>{execData.part}</p>
													<p>{execData.major}</p>
													<p className="bio">{execData.bio}</p>
												</div>
											</div>
										</Fragment>
									)}
								</LightBox>
							</li>
						)
					})}
				</ul>

				<style jsx>
					{
						`
							h3 {
								text-align: center;
							}

							ul {
								display flex;
								flex-wrap: wrap;
								list-style-type: none;
								justify-content: center;
								-webkit-padding-start: 0;
								margin: 0 auto;
								-webkit-margin-before: 0;
					      -webkit-margin-after: 0;
					      max-width: 53.819rem;
							}

							li {
								margin: 1rem;
							}

							.content-entering, .content-entered, .content-exiting, .content-exited {
								transform-origin: center top;
							}

							.content-entering, .content-entered {
								transform: translateY(-8rem) scale(0.5);
							}

							.content-entering, .content-exiting {
								transition: transform ${fadeTime}ms;
							}

							.content-exiting, .content-exited {}

							img {
								display: block;
								margin: 0 auto;
								height: 13.455rem;
								width: 13.455rem;
								will-change: transform;
							}

							.img-entering, .img-entered {
								border-radius: 50%;
								transform: translateY(-4rem) scale(0.3);
							}

							.img-entering, .img-exiting {
								transition: border-radius ${fadeTime}ms,
														transform ${fadeTime}ms;
							}

							.img-exiting, .img-exited {
								border-top-left-radius: .5rem;
								border-top-right-radius: .5rem;
							}

							.fade-entering, .fade-entered {
								opacity: 1;
							}

							.fade-entering {
								transition: opacity ${fadeTime - 150}ms 150ms;
							}

							.fade-exiting {
								transition: opacity ${fadeTime / 2}ms;
							}

							.fade-exiting, .fade-exited {
								opacity: 0;
							}

							h1, h4, p {
								text-align: center;
								-webkit-margin-before: 0;
					      -webkit-margin-after: 0;
							}

							p {
								transform: translateX(-22%);
								width: 175%;
							}

							.bio {
								font-size: .707rem;
							}
						`
					}
				</style>
			</section>
		)
	}
}