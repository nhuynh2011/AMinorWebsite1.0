import { Component } from 'react';

import { Carousel } from 'react-responsive-carousel';

import DescriptionBox from '../components/description-box';

export default class extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			carouselWidth: null
		};
	}
	
	componentDidMount() {
		this.resizeCarousel();
		window.addEventListener('resize', this.resizeCarousel);
	}
	
	componentWillUnmount() {
		window.removeEventListener('resize', this.resizeCarousel);
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
					
					<div className="carousel-overlay">
							<h1>
								<span className="thin-font">A </span>
								Minor
								<span className="thin-font"> A </span>
								Cappella
							</h1>
							<h2>UConn's Oldest Co-ed A Cappella Group</h2>
					</div>
				</div>
				
				<DescriptionBox bgColor="#eaeaea">
					<h1>Who are we?</h1>
					<p>Donec sed nisi nisi. Nam ultrices, leo et hendrerit consequat, mi elit pretium felis, varius venenatis justo mauris sit amet lectus. Etiam dolor dolor, iaculis in ornare ut, vestibulum sit amet nibh. Nullam gravida pellentesque ex id semper. Duis eu fringilla ante. Nulla facilisi. Phasellus sed nibh vitae quam viverra gravida. Aenean volutpat ultricies nunc, quis porttitor mi porta eu. Praesent sollicitudin pellentesque pretium. Aenean non sapien vulputate, pretium eros in, consectetur nisi. Proin non pretium tortor, ac vestibulum neque. Aenean nec lorem erat. Morbi eleifend mattis lacinia. Nulla in urna fermentum, sagittis diam sit amet, auctor nulla. Aenean a mauris sem.</p>
				</DescriptionBox>
				
				<DescriptionBox bgColor="#eaeaea">
					<h1>Services</h1>
					<p>Donec sed nisi nisi. Nam ultrices, leo et hendrerit consequat, mi elit pretium felis, varius venenatis justo mauris sit amet lectus. Etiam dolor dolor, iaculis in ornare ut, vestibulum sit amet nibh. Nullam gravida pellentesque ex id semper. Duis eu fringilla ante. Nulla facilisi. Phasellus sed nibh vitae quam viverra gravida. Aenean volutpat ultricies nunc, quis porttitor mi porta eu. Praesent sollicitudin pellentesque pretium. Aenean non sapien vulputate, pretium eros in, consectetur nisi. Proin non pretium tortor, ac vestibulum neque. Aenean nec lorem erat. Morbi eleifend mattis lacinia. Nulla in urna fermentum, sagittis diam sit amet, auctor nulla. Aenean a mauris sem.</p>
				</DescriptionBox>
				
				<DescriptionBox bgColor="#eaeaea">
					<h1>Contact Us</h1>
					<p>Get in contact with us by emailing <span className="email">aminor@gmail.com</span> and follow us on social media (links below).</p>
				</DescriptionBox>
				
				<style>
					{
						`
							.carousel {
								border-radius: 0.5rem;
								margin: auto;
								position: relative;
								overflow: hidden;
								width: fit-content;
							}
							
							.carousel-overlay {
								align-items: center;
								background: rgba(0, 0, 0, 0.5);
								color: white;
								display: flex;
								flex-direction: column;
								justify-content: center;
								position: absolute;
									top: 0;
									right: 0;
									bottom: 0;
									left: 0;
							}
							
							.carousel-overlay h1 {
								font-size: 4rem;
								font-weight: 700;
							}
							
							.carousel-overlay h2 {
								font-weight: 400;
							}
							
							.thin-font {
								font-weight: 200;
							}
							
							.email {
								font-style: italic;
							}
							
							@media screen and (max-width: 800px) {
								.carousel-overlay h1 {
									font-size: 2rem;
								}
								
								.carousel-overlay h2 {
									font-size: 1rem;
								}
							}
							
							@media screen and (max-width: 500px) {
								.carousel-overlay h1 {
									font-size: 1.414rem;
								}
								
								.carousel-overlay h2 {
									font-size: 0.707rem;
								}
							}
						`
					}
				</style>
			</section>
		);
	}
}
