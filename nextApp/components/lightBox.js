import { Component } from 'react'
import { Transition } from 'react-transition-group'

export default class extends Component {

	constructor(props) {
		super(props)

		this.state = {
			lightBoxExpandedX: undefined,
			lightBoxExpandedY: undefined,
			lightBoxExpandedHeight: undefined,
			lightBoxExpandedWidth: undefined,
			isLightBoxExpanded: false
		}
	}

	resizeLightBox = (el) => {
		let mainEl = document.querySelector('[role="main"]'),
			positionOfMainRect = mainEl.getBoundingClientRect(),
			positionOfRect = el.getBoundingClientRect()

		this.setState(prevState => ({
			lightBoxExpandedX: `${positionOfMainRect.left - positionOfRect.left}px`,
			lightBoxExpandedY: `${positionOfMainRect.top - positionOfRect.top}px`,
			lightBoxExpandedHeight: `${positionOfMainRect.bottom - positionOfMainRect.top}px`,
			lightBoxExpandedWidth: `${positionOfMainRect.right - positionOfMainRect.left}px`,
			isLightBoxExpanded: !prevState.isLightBoxExpanded
		}))
	}

	render() {
		const { lightBoxExpandedX, lightBoxExpandedY, lightBoxExpandedHeight, lightBoxExpandedWidth, isLightBoxExpanded } = this.state

		return (
			<section>
				<div className={`lightbox${isLightBoxExpanded ? ' lightbox-expand' : ''}`} onClick={(e) => this.resizeLightBox(e.target)}>
					<div className="lightbox-content">
						<h1>Nick</h1>
						<img alt="" src="/static/images/member.jpg"/>
						<h2>President</h2>
						<p>Bio...</p>
					</div>
				</div>

				<style jsx>
					{`
						section {
							height: 16rem;
							width: 8rem;
						}

						.lightbox {
							border-radius: 1rem;
							box-shadow: 0 .5rem 2rem 0 rgba(0,0,0,0.5);
							height: 100%;
							position: relative;
							transition: background 1s,
													border-radius 1s,
													height 1s,
													transform 1s,
													width 1s;
							width: 100%;
						}

						.lightbox-content {
							background: lightgray;
							border-radius: 1rem;
							height: 100%;
							max-height: 22.626rem;
							max-width: 13.453rem;
							transition: margin 1s;
							width: 100%;
						}

						.lightbox h1, .lightbox h2, .lightbox p {
							text-align: center;
							-webkit-margin-before: 0;
              -webkit-margin-after: 0;
						}

						.lightbox img {
							display: block;
							border-radius: 50%;
							height: 4rem;
							margin: 0 auto;
							width: 4rem;
						}

						.lightbox-expand {
							background: rgba(0,0,0,0.5);
							border-radius: 0;
							height: ${lightBoxExpandedHeight};
							transform: translate(${lightBoxExpandedX}, ${lightBoxExpandedY});
							width: ${lightBoxExpandedWidth};
							z-index: 10;
						}

						.lightbox-expand .lightbox-content{
							margin: 0 auto;
						}
					`}
				</style >
			</section>
		)
	}

}