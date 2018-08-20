import {Fragment} from "react";
import LightBox from "./lightBox";

export default ({ members, transitionTime }) => (
	<ul>
		{members.map(member => {
			const name = Object.keys(member)[0]
			const data = member[name]

			return (
				<li key={name}>
					<LightBox delay={500} timeout={transitionTime} zIndexExpanded={99}>
						{expandedState => (
							<Fragment>
								<img alt="" className={`img-${expandedState}`} src={data.cardpic}/>
								<div className={`content-${expandedState}`}>
									<h1>{name}</h1>
									<h4>{data.position}</h4>
									<div className={`fade-${expandedState}`}>
										<p>{data.part}</p>
										<p>Major: {data.major}</p>
										{data.minor !== 'None' && <p>Minor: {data.minor}</p>}
										<br />
										<p className="bio">{data.bio}</p>
									</div>
								</div>
							</Fragment>
						)}
					</LightBox>
				</li>
			)
		})}

		<style jsx>
			{
				`
					ul {
						display: flex;
						flex-wrap: wrap;
						list-style-type: none;
						justify-content: center;
						-webkit-padding-start: 0;
						margin: 0 auto;
						-webkit-margin-before: 0;
			      -webkit-margin-after: 0;
			      max-width: 53.819rem;
					}

					li {
						margin: 1rem;
					}

					.img-container {
						position: relative;
					}

					img {
						display: block;
						margin: 0 auto;
						height: 13.455rem;
						width: 13.455rem;
						will-change: transform;
					}

					.img-entering, .img-entered {
						border-radius: 0.5rem;
						transform: translateY(-4rem) scale(0.3);
					}

					.img-entering, .img-exiting {
						transition: border-radius ${transitionTime}ms,
												transform ${transitionTime}ms;
					}

					.img-exiting, .img-exited {
						border-top-left-radius: 0.5rem;
						border-top-right-radius: 0.5rem;
					}

					.content-entering, .content-entered, .content-exiting, .content-exited {
						transform-origin: center top;
					}

					.content-entering, .content-entered {
						transform: translateY(-8rem) scale(0.5);
					}

					.content-entering, .content-exiting {
						transition: transform ${transitionTime}ms;
					}

					.content-exiting, .content-exited {}

					.fade-entering, .fade-entered {
						opacity: 1;
					}

					.fade-entering {
						transition: opacity ${transitionTime - 150}ms 150ms;
					}

					.fade-exiting {
						transition: opacity ${transitionTime / 2}ms;
					}

					.fade-exiting, .fade-exited {
						opacity: 0;
					}

					h1, h4, p {
						text-align: center;
						-webkit-margin-before: 0;
			      -webkit-margin-after: 0;
					}

					p {
						transform: translateX(-22%);
						width: 175%;
					}

					.bio {
						font-size: .707rem;
					}
				`
			}
		</style>
	</ul>
)