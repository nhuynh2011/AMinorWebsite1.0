import { Fragment } from 'react'
import LightBox from '../components/lightBox'

const fadeTime = 1000

export default () =>
	<section>
		<ul>
			<li>
				<LightBox timeout={fadeTime}>
					{ expandedState => (
						<Fragment>
							<h1>Nick</h1>
							<img alt="" className={`img-${expandedState}`} src="/static/images/member.jpg"/>
							<h2>President</h2>
							<div className={`fade-${expandedState}`}>
								<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tellus metus, rutrum ultricies sem vel, tempor sollicitudin enim.</p>
							</div>
						</Fragment>
					)}
				</LightBox>
			</li>
			<li>
				<LightBox timeout={fadeTime}>
					{ expandedState => (
						<Fragment>
							<h1>Nick</h1>
							<img alt="" className={`img-${expandedState}`} src="/static/images/member.jpg"/>
							<h2>President</h2>
							<div className={`fade-${expandedState}`}>
								<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tellus metus, rutrum ultricies sem vel, tempor sollicitudin enim.</p>
							</div>
						</Fragment>
					)}
				</LightBox>
			</li>
		</ul>

		<style jsx>
			{`
				ul {
					display flex;
					flex-wrap: wrap;
					list-style-type: none;
					justify-content: center;
					-webkit-padding-start: 0;
					-webkit-margin-before: 0;
          -webkit-margin-after: 0;
				}

				li {
					margin: 1rem;
				}

				h1, h2, p {
							text-align: center;
							-webkit-margin-before: 0;
              -webkit-margin-after: 0;
						}

				img {
					display: block;
					margin: 0 auto;
				}

				.img-entering, .img-entered {
					border-radius: 50%;
					height: 5.657rem;
					width: 5.657rem;

				}

				.img-entering, .img-exiting {
					transition: border-radius ${fadeTime}ms,
											height ${fadeTime}ms,
											width ${fadeTime}ms;
				}

				.img-exiting, .img-exited {
					border-radius: 0;
					height: 13.455rem;
					width: 13.455rem;
				}

				.fade-entering, .fade-entered {
					opacity: 1;
				}

				.fade-entering {
					transition: opacity ${fadeTime - 150}ms 150ms;
				}

				.fade-exiting {
					transition: opacity ${fadeTime / 2}ms ;
				}

				.fade-exiting, .fade-exited {
					opacity: 0;
				}

			`}
		</style>
	</section>