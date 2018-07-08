import { Fragment } from 'react'
import LightBox from '../components/lightBox'

export default () =>
	<ul>
		<li>
			<LightBox>
				{ isLightBoxExpanded => (
					<Fragment>
						<h1>Nick</h1>
						<img alt="" src="/static/images/member.jpg"/>
						<h2>President</h2>
						{isLightBoxExpanded && (
							<p>Bio...</p>
						)}
					</Fragment>
				)}
			</LightBox>
		</li>

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
					border-radius: 50%;
					height: 5.657rem;
					margin: 0 auto;
					width: 5.657rem;
				}
			`}
		</style>
	</ul>