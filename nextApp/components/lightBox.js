import { Component } from 'react'
import ReactDOM from 'react-dom'

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

	resizeLightBox = () => {
		let mainEl = document.querySelector('[role="main"]'),
			positionOfMainRect = mainEl.getBoundingClientRect(),
			positionOfRect = ReactDOM.findDOMNode(this).getBoundingClientRect()

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
				<div className={`lightbox${isLightBoxExpanded ? ' lightbox-expand' : ''}`} onClick={() => this.resizeLightBox()}>
					<div className="lightbox-content">
						{this.props.children(this.state.isLightBoxExpanded)}
					</div>
				</div>

				<style jsx>
					{`
						section {
							height: 16rem;
							width: 8rem;
						}

						.lightbox {
							background: rgba(0,0,0,0.5);
							border-radius: 1rem;
							box-shadow: 0 .5rem 2rem 0 rgba(0,0,0,0.5);
							height: 100%;
							position: relative;
							transition: border-radius 1s,
													height 1s,
													transform 1s,
													width 1s;
							width: 100%;
						}

						.lightbox-content {
							background: lightgray;
							border-radius: 1rem;
							height: 100%;
							margin: 0 auto;
							max-height: 22.626rem;
							max-width: 13.453rem;
							transition: transform .75s;
							width: 100%;
						}

						.lightbox-expand {
							border-radius: 0;
							height: ${lightBoxExpandedHeight};
							transform: translate(${lightBoxExpandedX}, ${lightBoxExpandedY});
							width: ${lightBoxExpandedWidth};
							z-index: 10;
						}

						.lightbox-expand .lightbox-content {
              transform: translateY(50%);
              transition: transform 1s;
						}
					`}
				</style >
			</section>
		)
	}

}