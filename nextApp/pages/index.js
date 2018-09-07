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
								A Minor A Cappella
							</h1>
							<h2>Premium A Cappella Group</h2>
					</div>
				</div>

				<DescriptionBox bgColor="#eaeaea">
					<h1>Who are we?</h1>
					<p>A Minor, UConn's oldest co-ed a cappella group, was founded in 2004 by members of the Asian American Cultural Center (AsACC) following their performance during the 2003 Annual Alma Mater Homecoming Competition. Since then, A Minor has become a family of more than 40 alumni and current members who remain passionate about a cappella music and sharing their gift with the community!
					A Minor's repertoire has included everything from Beyoncé to Disney music, with plenty of tunes in between. We perform on- and off-campus at charity events, competitions, college invitationals, showcases and more!</p>
				</DescriptionBox>

				<DescriptionBox bgColor="#eaeaea">
					<h1>Upcoming Gigs</h1>
					<ul className="upcoming-gigs">
						<li>
							<Modal>
								{{
									unexpanded: (
										<div className="upcoming-gig-unexpanded">
											<h1>Fall 2018 Rush Concert</h1>
											<h4>Date: 9/8/18</h4>
											<p>We will be performing at the Fall '18 Rush Concert at Jorgenson Theater.  Click to find more details!</p>
										</div>
									),
									expanded: (
										<div className="upcoming-gig-expanded">
											<h1>Fall 2018 Rush Concert</h1>
											<h4>Date: 9/8/18</h4>
											<p>We will be performing at the Fall '18 Rush Concert at Jorgensen Theater on Saturday, September 8th.  This will be our first gig of the semester and we cannot begin to express how excited we are.  Please come out to see us and the other a cappella groups!</p>
											<p>Doors open at 7:00 PM and the show starts at 7:30 PM.</p>
											<p>Tickets are $3 for students if you buy them online and $5 at the door for everyone.  Please visit <a target="_blank" href="https://jorgensen.uconn.edu/Online/default.asp">Jorgensen's site</a> for more details!</p>
										</div>
									)
								}}
							</Modal>
						</li>

						<li>
							<Modal>
								{{
									unexpanded: (
										<div className="upcoming-gig-unexpanded">
											<h1>SoE Scholarship Dinner</h1>
											<h4>Date: 10/10/18</h4>
											<p>We will perform for UConn School of Engineering Scholarship dinner.  Click to find more details!</p>
										</div>
									),
									expanded: (
										<div className="upcoming-gig-expanded">
											<h1>SoE Scholarship Dinner</h1>
											<h4>Date: 10/10/18</h4>
											<p>We felt honored when UConn's School of Engineering reached out to us to perform at their scholarship banquet on October 10th, 2018.</p>
											<p>Congratulations to all of the scholarship recipients!</p>
										</div>
									)
								}}
							</Modal>
						</li>
					</ul>
				</DescriptionBox>

				<DescriptionBox bgColor="#eaeaea">
					<h1>Contact Us and Follow Us!</h1>
					<p>Do you want to have A Minor perform at your next event?  Do you have any questions for us?  Feel free to get in contact with us by emailing <span className="email">bookings.aminor@gmail.com</span>.</p>
					<p>If you want to keep up with what A Minor is up to, please check out the News section of the site and follow us on our social media accounts!</p>
					<p><a target="_blank" href="https://www.facebook.com/uconnaminor">Facebook</a> | <a target="_blank" href="https://instagram.com/uconnaminor">Instagram</a> | <a target="_blank" href="https://twitter.com/UConnAMinor">Twitter</a> | <a target="_blank" href="https://open.spotify.com/artist/2JJfz2n3LRJYrPTlAinaay?si=TEVZZOPhToi0rgwc7ktGBA">Spotify</a></p>
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
								margin: 0;
							}

							.carousel-overlay h2 {
								font-weight: 400;
							}

							.thin-font {
								font-weight: 200;
							}

							.upcoming-gigs {
								display: flex;
								flex-wrap: wrap;
								justify-content: space-around;
								list-style-type: none;
								padding: 0;
							}

							.upcoming-gig-unexpanded {
								background: #304ebb;
								border-radius: 1rem;
								box-shadow: 0 0.25rem 1rem 0 rgba(0,0,0,0.8);
								color: white;
								padding: 0.5rem 1.5rem;
								margin: 1rem .5rem;
								max-width: 15rem;
								max-height: 15rem;
								overflow: hidden;
							}

							.upcoming-gig-unexpanded h1 {
								margin-bottom: 0;
							}

							.upcoming-gig-unexpanded h4 {
								margin-top: 0;
								margin-bottom: 0;
								padding-bottom: .5rem;
								font-weight: 550;
								border-bottom: 1px solid white;
							}

							.upcoming-gigs-unexpanded p {
								margin-top 0;
							}

							.upcoming-gig-unexpanded:active {
								transform: scale(0.99);
							}

							.upcoming-gig-expanded {
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

								.upcoming-gig-unexpanded {
									max-width: 15rem;
								}
							}

							@media screen and (max-width: 500px) {
								.carousel-overlay h1 {
									font-size: 1.414rem;
								}

								.carousel-overlay h2 {
									font-size: 0.707rem;
								}

								.upcoming-gig-unexpanded {
									max-width: 9.514rem;
									max-height: 30rem;
								}
							}
						`
					}
				</style>
			</section>
		);
	}
}
