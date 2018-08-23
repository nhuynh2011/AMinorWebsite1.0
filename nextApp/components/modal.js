import { Component } from 'react';

export default class Modal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isModalExpanded: false
		};
	}

	showModal = (shouldModalBeExpanded) => {
		this.setState({isModalExpanded: shouldModalBeExpanded});
	}

	render() {
		const { isModalExpanded } = this.state;

		const { zIndexWhenExpanded } = this.props;

		return (
			<div className="modal-container">
				<div
					className={`unexpanded-modal`}
					onClick={() => !isModalExpanded && this.showModal(true)}
				>
					{this.props.children.unexpanded}
				</div>

				<div
					className={`modal-overlay ${isModalExpanded ? '' : 'fade-out'}`}
					onClick={() => isModalExpanded && this.showModal(false)}
				>
					<div className="expanded-modal">
						{this.props.children.expanded}
					</div>
				</div>

				<style jsx>
					{
						`
							.modal-container {
								cursor: pointer;
							}

							.expanded-modal {
								position: absolute;
									top: 50%;
									left: 50%;
								transform: translate(-50%, -50%);
							}

							.fade-out {
								opacity: 0;
								pointer-events: none;
							}

							.modal-overlay {
								background: rgba(0, 0, 0, .5);
								position: fixed;
									top: 0;
									right: 0;
									bottom: 0;
									left: 0;
								transition: opacity 1s ease-out;
								will-change: opacity;
								z-index: ${zIndexWhenExpanded};
							}
						`
					}
				</style>
			</div>
		);
	}
}