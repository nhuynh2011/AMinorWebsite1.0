import { Component } from 'react';

import { Carousel } from 'react-responsive-carousel';

import DescriptionBox from '../components/description-box';

export default class extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			carouselWidth: null
		}
	}
	
	componentDidMount() {
		this.resizeCarousel();
		window.addEventListener('resize', this.resizeCarousel);
	}
	
	resizeCarousel = () => {
		const screenWidth = window.innerWidth;
		const maxWidth = 1500;
		this.setState({carouselWidth: `${screenWidth > (maxWidth + 72) ? `${maxWidth}` : screenWidth - 72}px`});
	}
	
	render() {
		const { carouselWidth } = this.state;
		
		return (
			<section>
				<div className="carousel">
					<Carousel
						autoPlay
						
						infiniteLoop
						interval={4000}
						showArrows={false}
						showIndicators={false}
						showStatus={false}
						showThumbs={false}
						transitionTime={600}
						width={carouselWidth}
					>
						<div>
							<img src="/static/images/group.jpg"/>
						</div>
						
						<div>
							<img src="/static/images/group2.jpeg"/>
						</div>
						
						<div>
							<img src="/static/images/singing.png"/>
						</div>
						
						<div>
							<img src="/static/images/singing2.png"/>
						</div>
					</Carousel>
				</div>
				
				<DescriptionBox bgColor="#eaeaea">
					<h1>About Us</h1>
					<p>Donec sed nisi nisi. Nam ultrices, leo et hendrerit consequat, mi elit pretium felis, varius venenatis justo mauris sit amet lectus. Etiam dolor dolor, iaculis in ornare ut, vestibulum sit amet nibh. Nullam gravida pellentesque ex id semper. Duis eu fringilla ante. Nulla facilisi. Phasellus sed nibh vitae quam viverra gravida. Aenean volutpat ultricies nunc, quis porttitor mi porta eu. Praesent sollicitudin pellentesque pretium. Aenean non sapien vulputate, pretium eros in, consectetur nisi. Proin non pretium tortor, ac vestibulum neque. Aenean nec lorem erat. Morbi eleifend mattis lacinia. Nulla in urna fermentum, sagittis diam sit amet, auctor nulla. Aenean a mauris sem.</p>
				</DescriptionBox>
				
				<DescriptionBox bgColor="#eaeaea">
					<h1>Services</h1>
					<p>Donec sed nisi nisi. Nam ultrices, leo et hendrerit consequat, mi elit pretium felis, varius venenatis justo mauris sit amet lectus. Etiam dolor dolor, iaculis in ornare ut, vestibulum sit amet nibh. Nullam gravida pellentesque ex id semper. Duis eu fringilla ante. Nulla facilisi. Phasellus sed nibh vitae quam viverra gravida. Aenean volutpat ultricies nunc, quis porttitor mi porta eu. Praesent sollicitudin pellentesque pretium. Aenean non sapien vulputate, pretium eros in, consectetur nisi. Proin non pretium tortor, ac vestibulum neque. Aenean nec lorem erat. Morbi eleifend mattis lacinia. Nulla in urna fermentum, sagittis diam sit amet, auctor nulla. Aenean a mauris sem.</p>
				</DescriptionBox>
				
				<DescriptionBox bgColor="#eaeaea">
					<h1>Contact Us</h1>
					<p>Donec sed nisi nisi. Nam ultrices, leo et hendrerit consequat, mi elit pretium felis, varius venenatis justo mauris sit amet lectus. Etiam dolor dolor, iaculis in ornare ut, vestibulum sit amet nibh. Nullam gravida pellentesque ex id semper. Duis eu fringilla ante. Nulla facilisi. Phasellus sed nibh vitae quam viverra gravida. Aenean volutpat ultricies nunc, quis porttitor mi porta eu. Praesent sollicitudin pellentesque pretium. Aenean non sapien vulputate, pretium eros in, consectetur nisi. Proin non pretium tortor, ac vestibulum neque. Aenean nec lorem erat. Morbi eleifend mattis lacinia. Nulla in urna fermentum, sagittis diam sit amet, auctor nulla. Aenean a mauris sem.</p>
				</DescriptionBox>
				
				<style>
					{
						`
							.carousel {
								margin: auto;
								width: fit-content;
							}
						`
					}
				</style>
			</section>
		);
	}
}
