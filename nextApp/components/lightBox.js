import { Component, Fragment } from 'react';

import ReactDOM from 'react-dom';

import { Transition } from 'react-transition-group';

export default class extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isLightBoxExpanded: false,
			transitionState: 'exited',
			transformX: 0,
			transformY: 0
		};
	}

	componentDidMount() {
		document.addEventListener('resize', this.repositionLightBox);
	}

	componentWillUnmount() {
		document.removeEventListener('resize', this.repositionLightBox);
	}

	repositionLightBox = () => {
		if (this.state.isLightBoxExpanded) {
			this.resizeLightBox(this.state.isLightBoxExpanded);
		}
	}

	resizeLightBox = (isLightBoxExpanded) => {
		const lightBox = ReactDOM.findDOMNode(this);
		const centerOfPageX = window.innerWidth / 2;
		const centerOfPageY = (window.innerHeight / 2) + window.scrollY;
		const centerOfLightBoxX = lightBox.offsetLeft + (lightBox.offsetWidth / 2);
		const centerOfLightBoxY = lightBox.offsetTop + (lightBox.offsetHeight / 2);

		this.setState({
			isLightBoxExpanded: isLightBoxExpanded,
			transformX: centerOfPageX - centerOfLightBoxX,
			transformY: centerOfPageY - centerOfLightBoxY
		});
	}

	onEntering = () => setTimeout(() => this.setState({ transitionState: 'entering' }), this.props.delay);

	onEntered = () => this.setState({ transitionState: 'entered' });

	onExiting = () => this.setState({ transitionState: 'exiting' });

	onExited = () => this.setState({ transitionState: 'exited' });



	render() {
		const { isLightBoxExpanded, transitionState, transformX, transformY } = this.state;
		const { delay, timeout, zIndexExpanded } = this.props;

		return (
			<div>
				<Transition
					in={isLightBoxExpanded}
					onEntering={this.onEntering}
					onEntered={this.onEntered}
					onExiting={this.onExiting}
					onExited={this.onExited}
				  timeout={timeout}
				>
					{(state) =>	(
						<Fragment>
							<div className={`lightbox center-${state} expand-${transitionState}`} onClick={() => this.resizeLightBox(!isLightBoxExpanded)}>
								{this.props.children(transitionState)}
							</div>
							<div className={`overlay overlay-${state}`} onClick={() => isLightBoxExpanded && this.resizeLightBox(false)}></div>
						</Fragment>
					)}
				</Transition>

				<style jsx>
					{`
						.lightbox {
							background: lightgray;
							border-radius: .5rem;
							box-shadow: 0 .5rem 2rem 0 rgba(0,0,0,0.5);
							height: 19.028rem;
							overflow: hidden;
							position: relative;
							transform: rotate(0.0001deg);
							transform-oigin: center center;
							width: 13.455rem;
							will-change: transform;
						}

						.center-entering, .center-entered {
							transform: translate(${transformX}px, ${transformY}px);
							z-index: ${zIndexExpanded};
						}

						.center-entering {
							transition: transform ${timeout}ms,
													z-index ${timeout}ms;
						}

						.center-exiting {
							transition: transform ${timeout}ms ${timeout}ms,
													z-index ${timeout}ms ${timeout}ms;
						}

						.center-exiting, .center-exited {
							z-index: 0;
						}

						.expand-entering, .expand-entered {
							transform: scale(2.5, 2);
						}

						.expand-entering, .expand-exiting {
							transition: transform ${timeout}ms;
						}

						.overlay {
							background: rgba(0, 0, 0, .5);
							position: fixed;
								top: 0;
								right: 0;
								bottom: 0;
								left: 0;
							will-change: opacity;
						}

						.overlay-entering, .overlay-entered {
							opacity: 1;
							z-index: ${zIndexExpanded - 1};
						}

						.overlay-entering, .overlay-exiting {
							transition: opacity ${timeout}ms,
													z-index ${timeout}ms;
						}

						.overlay-entering {
							transition: opacity ${timeout}ms,
													z-index ${timeout}ms;
						}

						.overlay-exiting {
							transition: opacity ${timeout}ms ${timeout}ms,
													z-index ${timeout}ms ${timeout}ms;
						}

						.overlay-exiting, .overlay-exited {
							opacity: 0;
							z-index: -1;
						}
					`}
				</style >
			</div>
		);
	}
}
