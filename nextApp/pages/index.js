import { Component } from 'react';

import { Carousel } from 'react-responsive-carousel';

import DescriptionBox from '../components/description-box';
import Modal from '../components/modal';

export default class extends Component {
	constructor(props) {
		super(props);

		this.state = {
			carouselWidth: undefined
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
		this.setState({carouselWidth: `${screenWidth > (maxWidth + 72) ? `${maxWidth}` : screenWidth - 72 - 18}px`});
	}

	render() {
		const { carouselWidth } = this.state;

		return (
			<section>
				<div className="carousel">
					<Carousel
						autoPlay
						infiniteLoop
						interval={3000}
						showArrows={true}
						stopOnHover={false}
						showIndicators={false}
						showStatus={false}
						showThumbs={false}
						transitionTime={600}
						width={carouselWidth}
					>
						<div className="carousel-image-div">
							<img className="carousel-image" src="/static/images/group.jpg"/>
						</div>

						<div className="carousel-image-div">
							<img className="carousel-image" src="/static/images/group2.jpeg"/>
						</div>

						<div className="carousel-image-div">
							<img className="carousel-image" src="/static/images/singing.png"/>
						</div>

						<div className="carousel-image-div">
							<img className="carousel-image" src="/static/images/singing2.png"/>
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
					<h1>Recent Gigs</h1>
					<ul className="recent-gigs">
						<li>
							<Modal>
								{{
									unexpanded: (
										<div className="recent-gig-unexpanded">
											<h1>Lorem Ipsum</h1>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
										</div>
									),
									expanded: (
										<div className="recent-gig-expanded">
											<h1>Lorem Ipsum</h1>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
										</div>
									)
								}}
							</Modal>
						</li>
						<li>
							<Modal>
								{{
									unexpanded: (
										<div className="recent-gig-unexpanded">
											<h1>Lorem Ipsum</h1>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
										</div>
									),
									expanded: (
										<div className="recent-gig-expanded">
											<h1>Lorem Ipsum</h1>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
										</div>
									)
								}}
							</Modal>
						</li>
						<li>
							<Modal>
								{{
									unexpanded: (
										<div className="recent-gig-unexpanded">
											<h1>Lorem Ipsum</h1>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
										</div>
									),
									expanded: (
										<div className="recent-gig-expanded">
											<h1>Lorem Ipsum</h1>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
										</div>
									)
								}}
							</Modal>
						</li>
					</ul>
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
								width: -moz-fit-content;
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

						.recent-gigs {
								display: flex;
								flex-wrap: wrap;
								justify-content: space-around;
								list-style-type: none;
								padding: 0;
							}

							.recent-gig-unexpanded {
								background: #304eaa;
								border-radius: 1rem;
								box-shadow: 0 0.25rem 1rem 0 rgba(0,0,0,0.8);
								color: white;
								padding: 0.5rem 2rem;
								margin: 1rem;
								width: 9.514rem;
							}

							.recent-gig-unexpanded:active {
								transform: scale(0.99);
							}

							.recent-gig-expanded {
								background: #eaeaea;
								border-radius: 1rem;
								box-shadow: 0 0.25rem 1rem 0 rgba(0,0,0,0.6);
								box-sizing: border-box;
								max-height: 90vh;
								padding: 1rem 2rem 2rem;
								overflow-y: auto;
								width: 70vw;
							}

							.carousel-image-div .parent {
								height: 100%;
							}

							.carousel-image-div {
								height: 100%;
							}

							.carousel-image {
								height: 100%;
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
