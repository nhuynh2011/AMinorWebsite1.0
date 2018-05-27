import React, { Component } from 'react';

import SectionA from '../SectionA'
import Card from '../Card'

class Members extends Component {
	render () {
		return (
			<div>
				<SectionA
				  heading="About The Family"
					tag="Maecenas pretium, lorem a tincidunt tincidunt, tortor risus tristique ipsum, vel porttitor metus dui non nisi. Integer ac velit faucibus, mattis neque in, aliquam odio. Pellentesque velit nisi, ullamcorper vel nisl hendrerit, efficitur ullamcorper dui. Donec a lacinia ante. Phasellus fringilla vel leo sed pretium. Vivamus in quam eget tellus tempus porttitor. Aenean id dolor vel ipsum gravida malesuada id eu felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque at facilisis erat. Quisque ut sapien ut justo mattis pulvinar. Etiam quis malesuada justo. Fusce bibendum tortor nec eros vestibulum, et lobortis quam fermentum. Curabitur orci risus, varius eu ultrices nec, euismod non massa."
					button="See Past Members"
					link="/pastmembers"	/>
				<section id="section-b" className="grid">
					<ul>
						<Card
							name="Jayson Gilbert"
							position="President"
							bio="/members/JaysonGilbert"
							img="http://uconnaminor.weebly.com/uploads/3/2/7/8/3278517/img-1583-nick_1.jpg" />
						<Card
							name="Nick Huynh"
							position="Vice President"
							bio="/members/NickHuynh"
							img="http://uconnaminor.weebly.com/uploads/3/2/7/8/3278517/img-1583-nick_1.jpg" />
						<Card
							name="Andrea Benvenuto"
							position="Secretary"
							bio="/members/AndreaBenvenuto"
							img="http://uconnaminor.weebly.com/uploads/3/2/7/8/3278517/img-1583-nick_1.jpg" />
						<Card
							name="Laura Calandra"
							position="Treasurer"
							bio="/members/LauraCalandra"
							img="http://uconnaminor.weebly.com/uploads/3/2/7/8/3278517/img-1583-nick_1.jpg" />
						<Card
							name="Laura Calandra"
							position="Treasurer"
							bio="/members/LauraCalandra"
							img="http://uconnaminor.weebly.com/uploads/3/2/7/8/3278517/img-1583-nick_1.jpg" />
						<Card
							name="Laura Calandra"
							position="Treasurer"
							bio="/members/LauraCalandra"
							img="http://uconnaminor.weebly.com/uploads/3/2/7/8/3278517/img-1583-nick_1.jpg" />
						<Card
							name="Laura Calandra"
							position="Treasurer"
							bio="/members/LauraCalandra"
							img="http://uconnaminor.weebly.com/uploads/3/2/7/8/3278517/img-1583-nick_1.jpg" />
					</ul>
				</section>
			</div>
		)
	}
}
export default Members
