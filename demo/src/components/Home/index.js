import React, { Component } from 'react';

import Showcase from '../Showcase'
import SectionA from '../SectionA'
//import SectionB from '../SectionB'
import SectionC from '../SectionC'
import SectionD from '../SectionD'
import SectionE from '../SectionE'

class Home extends Component {
	render () {
		return (
			<div>
				<Showcase
					image="shark.png"
					heading="What's New with A Minor?"
					tag="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus non magna sed laoreet. Morbi non metus sit amet ante pharetra rhoncus. Mauris volutpat leo odio, vitae mollis justo luctus nec. In et dignissim sem, ut viverra dui. Phasellus eget aliquam quam. Donec commodo vitae metus vitae congue. Sed pellentesque tortor quis suscipit sagittis. Suspendisse scelerisque, lacus varius tempor congue, arcu elit rutrum massa, sed mollis velit risus sollicitudin ex. Donec sollicitudin luctus ex, id dignissim eros gravida eget. Donec eu vehicula leo, vel vestibulum dolor. Mauris tempus condimentum est vitae varius. Vivamus elit tellus, molestie sit amet tristique eget, fringilla at tortor. Cras est lorem, fringilla vitae egestas eget, scelerisque et ex."
					button="Read More"
					url="/news" />
				<main id="main">
					<SectionA
						heading="About Us"
						tag="Maecenas pretium, lorem a tincidunt tincidunt, tortor risus tristique ipsum, vel porttitor metus dui non nisi. Integer ac velit faucibus, mattis neque in, aliquam odio. Pellentesque velit nisi, ullamcorper vel nisl hendrerit, efficitur ullamcorper dui. Donec a lacinia ante. Phasellus fringilla vel leo sed pretium. Vivamus in quam eget tellus tempus porttitor. Aenean id dolor vel ipsum gravida malesuada id eu felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque at facilisis erat. Quisque ut sapien ut justo mattis pulvinar. Etiam quis malesuada justo. Fusce bibendum tortor nec eros vestibulum, et lobortis quam fermentum. Curabitur orci risus, varius eu ultrices nec, euismod non massa." />
					<SectionC
						heading="Book Us Today!"
						tag="Donec sed nisi nisi. Nam ultrices, leo et hendrerit consequat, mi elit pretium felis, varius venenatis justo mauris sit amet lectus. Etiam dolor dolor, iaculis in ornare ut, vestibulum sit amet nibh. Nullam gravida pellentesque ex id semper. Duis eu fringilla ante. Nulla facilisi. Phasellus sed nibh vitae quam viverra gravida. Aenean volutpat ultricies nunc, quis porttitor mi porta eu. Praesent sollicitudin pellentesque pretium. Aenean non sapien vulputate, pretium eros in, consectetur nisi. Proin non pretium tortor, ac vestibulum neque. Aenean nec lorem erat. Morbi eleifend mattis lacinia. Nulla in urna fermentum, sagittis diam sit amet, auctor nulla. Aenean a mauris sem." />
					<SectionD
						heading="Contact Us"
						tag="Donec sed nisi nisi. Nam ultrices, leo et hendrerit consequat, mi elit pretium felis, varius venenatis justo mauris sit amet lectus. Etiam dolor dolor, iaculis in ornare ut, vestibulum sit amet nibh. Nullam gravida pellentesque ex id semper. Duis eu fringilla ante. Nulla facilisi. Phasellus sed nibh vitae quam viverra gravida. Aenean volutpat ultricies nunc, quis porttitor mi porta eu. Praesent sollicitudin pellentesque pretium. Aenean non sapien vulputate, pretium eros in, consectetur nisi. Proin non pretium tortor, ac vestibulum neque. Aenean nec lorem erat. Morbi eleifend mattis lacinia. Nulla in urna fermentum, sagittis diam sit amet, auctor nulla. Aenean a mauris sem."
						email="uconnaminor@gmail.com" />
					<SectionE
						heading="Follow us on Social Media!"
						tag="Donec sed nisi nisi. Nam ultrices, leo et hendrerit consequat, mi elit pretium felis, varius venenatis justo mauris sit amet lectus. Etiam dolor dolor, iaculis in ornare ut, vestibulum sit amet nibh. Nullam gravida pellentesque ex id semper. Duis eu fringilla ante. Nulla facilisi. Phasellus sed nibh vitae quam viverra gravida. Aenean volutpat ultricies nunc, quis porttitor mi porta eu. Praesent sollicitudin pellentesque pretium. Aenean non sapien vulputate, pretium eros in, consectetur nisi. Proin non pretium tortor, ac vestibulum neque. Aenean nec lorem erat. Morbi eleifend mattis lacinia. Nulla in urna fermentum, sagittis diam sit amet, auctor nulla. Aenean a mauris sem."/>
				</main>
			</div>
		)
	}
}
export default Home
