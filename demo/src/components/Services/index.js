import React, { Component } from 'react';
import SectionA from '../SectionA'

class Services extends Component {
	render () {
		return (
			<main id="main">
				<SectionA
					heading="Services"
					tag="Maecenas pretium, lorem a tincidunt tincidunt, tortor risus tristique ipsum, vel porttitor metus dui non nisi. Integer ac velit faucibus, mattis neque in, aliquam odio. Pellentesque velit nisi, ullamcorper vel nisl hendrerit, efficitur ullamcorper dui. Donec a lacinia ante. Phasellus fringilla vel leo sed pretium. Vivamus in quam eget tellus tempus porttitor. Aenean id dolor vel ipsum gravida malesuada id eu felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque at facilisis erat. Quisque ut sapien ut justo mattis pulvinar. Etiam quis malesuada justo. Fusce bibendum tortor nec eros vestibulum, et lobortis quam fermentum. Curabitur orci risus, varius eu ultrices nec, euismod non massa."
					attachment="serviceposter.jpg" />
			</main>
		)
	}
}
export default Services
