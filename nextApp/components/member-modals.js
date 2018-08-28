import Modal from './modal';

export default ({ members }) => (
	<ul>
		{members.map(member => {
			const name = Object.keys(member)[0]
			const data = member[name]

			return (
				<li key={name}>
					<Modal zIndexWhenExpanded={100}>
						{{
							unexpanded: (
								<div className="content content-unexpanded">
									<img alt="" src={data.cardpic}/>
									<h1>{name}</h1>
									<h4>{data.position}</h4>
								</div>
							),
							expanded: (
								<div className="content content-expanded">
									<h1>{name}</h1>
									<img alt="" src={data.cardpic}/>
									<h4>{data.position}</h4>
									<p>{data.part}</p>
									<p>Major: {data.major}</p>
									{ data.minor !== 'None' && <p>Minor: {data.minor}</p> }
									<p className="bio">{data.bio}</p>
								</div>
							)
						}}
					</Modal>
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

					.content {
						background: #eaeaea;
						border-radius: 0.25rem;
						box-shadow: 0 0.25rem 1rem 0 rgba(0,0,0,0.6);
					}

					.content-unexpanded {
						height: 19.028rem;
						overflow: hidden;
						width: 13.455rem;
					}
					
					.content-unexpanded:active {
						transform: scale(0.99);
					}

					.content-expanded {
						box-sizing: border-box;
						width: 26.908rem;
						padding: 1rem 2rem 2rem;
					}

					.content-expanded img {
						border-radius: 50%;
						height: 9.514rem;
						margin: 1rem auto;
						width: 9.514rem;
					}

					img {
						display: block;
						height: 13.454rem;
						margin: 0 auto;
						width: 13.454rem;
					}

					h1, h4, p {
						text-align: center;
						-webkit-margin-before: 0;
			      -webkit-margin-after: 0;
					}

					p {
						margin 0.5rem 0;
					}

					.bio {
						font-size: .707rem;
					}

					@media screen and (max-width: 38rem) {
						.content-expanded {
							width: calc(100vw - 2rem);
							margin: 0 1rem;
							padding: 1rem;
						}

						.content-expanded img {
							height: 6.727rem;
							width: 6.727rem;
						}
					}
				`
			}
		</style>
	</ul>
);