import Modal from './modal';

export default ({ serviceTitle, service, imageLink }) => (
	<section>
		<Modal zIndexWhenExpanded={100}>
			{{
				unexpanded: (
					<div className="content content-unexpanded">
						<h1>{serviceTitle}</h1>
						<img alt="" src={imageLink}/>
					</div>
				),
				expanded: (
					<div className="content content-expanded">
						<h1>{serviceTitle}</h1>

						<h3>What to Expect</h3>
						<p>{service['what_to_expect']}</p>

						<h3>Pricing</h3>
						<ul>
							{service.pricing.map((price, index) => <li key={index}>{price}</li>)}
						</ul>
					</div>
				)
			}}
		</Modal>

		<style jsx>
			{
				`
					.content {
						background: #eaeaea;
						border-radius: 0.25rem;
						box-shadow: 0 0.25rem 1rem 0 rgba(0,0,0,0.75);
						position: relative;
						margin: 1rem;
						text-align: center;
					}

					.content-unexpanded {
						max-height: 25rem;
						max-width: 64rem;
						overflow: hidden;
					}
					
					.content-unexpanded:active {
						transform: scale(0.99);
					}

					.content-unexpanded img {
						height: 100%;
						width:100%;
					}

					.content-expanded {
						box-sizing: border-box;
						padding: 1rem 2rem 2rem;
						max-width: 32rem;
					}

					.content-expanded ul {
						list-style-type: none;
						padding: 0;
					}
				`
			}
		</style>
	</section>
);