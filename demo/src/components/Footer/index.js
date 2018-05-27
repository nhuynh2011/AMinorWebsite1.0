import React, { Component } from 'react';

class Footer extends Component {
	constructor(props) {
		super(props)

		this.state = { title: props.title }
	}

	shouldComponentUpdate = () => false

	render = () =>
		<footer id="main-footer" className="grid">
			<div>{this.state.title}</div>
			<br></br>
			<div>Project By <a>Nick Huynh</a></div>
		</footer>
}
export default Footer
