import React, { Component } from 'react';
import Card from '../Card'

class Members extends Component {
	render () {
		return (
			<div id="section-b">
				<Card
					name="Jayson Gilbert"
					position="President"
					bio="Nulla dictum faucibus mauris, iaculis ullamcorper est elementum nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris mauris diam, condimentum ut tempus non, maximus et felis."
					img="http://uconnaminor.weebly.com/uploads/3/2/7/8/3278517/img-1583-nick_1.jpg" />
				<Card
					name="Nick Huynh"
					position="Vice President"
					bio="Nulla dictum faucibus mauris, iaculis ullamcorper est elementum nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris mauris diam, condimentum ut tempus non, maximus et felis."
					img="http://uconnaminor.weebly.com/uploads/3/2/7/8/3278517/img-1583-nick_1.jpg" />
				<Card
					name="Andrea Benvenuto"
					position="Secretary"
					bio="Nulla dictum faucibus mauris, iaculis ullamcorper est elementum nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris mauris diam, condimentum ut tempus non, maximus et felis."
					img="http://uconnaminor.weebly.com/uploads/3/2/7/8/3278517/img-1583-nick_1.jpg" />
				<Card
					name="Laura Calandra"
					position="Treasurer"
					bio="Nulla dictum faucibus mauris, iaculis ullamcorper est elementum nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris mauris diam, condimentum ut tempus non, maximus et felis."
					img="http://uconnaminor.weebly.com/uploads/3/2/7/8/3278517/img-1583-nick_1.jpg" />
			</div>
		)
	}
}
export default Members
