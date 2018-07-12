import {Component, Fragment} from 'react'
import { Transition } from 'react-transition-group'

export default class extends Component {

	constructor(props) {
		super(props)

		this.state = { isLightBoxExpanded: false	}
	}

	resizeLightBox = () => {
		this.setState(prevState => ({	isLightBoxExpanded: !prevState.isLightBoxExpanded 	}))
	}

	render() {
		const { isLightBoxExpanded } = this.state
		const { timeout } = this.props

		return (
			<div>
				<Transition
					in={isLightBoxExpanded}
				  timeout={timeout}
				>
					{(state) =>	(
						<Fragment>
							<div className={`lightbox expand-${state}`} onClick={() => this.resizeLightBox()}>
								<div className="content">
									{this.props.children(state)}
								</div>
							</div>
							<div className={`overlay overlay-${state}`} onClick={() => isLightBoxExpanded && this.resizeLightBox()}></div>
						</Fragment>
					)}
				</Transition>


				<style jsx>
					{`
						.lightbox {
							background: lightgray;
							border-radius: 1rem;
							box-shadow: 0 .5rem 2rem 0 rgba(0,0,0,0.5);
							height: 19.028rem;
							overflow: hidden;
							position: relative;
							width: 13.455rem;
						}

						.content {
							position: fixed;
						}

						.expand-entering, .expand-entered {
							transform: scale(1.6, 1.4);
							z-index: 99;
						}

						.expand-entering, .expand-exiting, .expand-entering .content, .expand-exiting .content {
							transition: transform ${timeout}ms,
													z-index ${timeout}ms;
						}

						.expand-exiting, .expand-exited, .expand-exited .content {
							transform: scale(1);
						}

						.expand-entering .content, .expand-entered .content {
							transform: scale(0.8);
						}

						.overlay {
							background: rgba(0, 0, 0, .5);
							position: fixed;
								top: 0;
								right: 0;
								bottom: 0;
								left: 0;
						}

						.overlay-entering, .overlay-entered {
							opacity: 1;
							z-index: 98;
						}

						.overlay-entering, .overlay-exiting {
							transition: opacity ${timeout}ms,
													z-index ${timeout}ms;
						}

						.overlay-exiting, .overlay-exited {
							opacity: 0;
							z-index: -1;
						}
					`}
				</style >
			</div>
		)
	}

}