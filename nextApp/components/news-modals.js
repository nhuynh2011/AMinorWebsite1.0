import Modal from './modal';

export default ({ news }) => {
	const newsTitles = Object.keys(news);

	return (
		<section>
			<ul className="news-articles">
				{newsTitles.map((article, index) => {
					const { text, heading, subheading, author, image } = news[article];

					return (
						<li key={index}>
							<Modal zIndexWhenExpanded={100}>
								{{
									unexpanded: (
										<div className="content content-unexpanded">
											<img src={image} />
											<h1>{heading}</h1>
											<h3>By {author}</h3>
											<p className="sub-heading">{subheading}</p>
										</div>
									),
									expanded: (
										<div className="content content-expanded">
											<img src={image} />
											<h1>{heading}</h1>
											<h3>{subheading}</h3>
											<p>By {author}</p>
											{text.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
										</div>
									)
								}}
							</Modal>
						</li>
					);
				})}
			</ul>

			<style jsx>
				{
					`
						.news-articles {
							display: flex;
							justify-content: center;
							list-style-type: none;
							padding: 0;
							margin-top: 2rem;
						}

						.content {
							background: #eaeaea;
							border-radius: 0.25rem;
							box-shadow: 0 0.25rem 1rem 0 rgba(0,0,0,0.6);
							text-align: center;
						}

						.content img {
							height: 100px;
							width: 100%;
						}

						.content-unexpanded {
							overflow: hidden;
							width: 80vw;
						}

						.content-unexpanded:active {
							transform: scale(0.99);
						}

						.content-expanded {
							box-sizing: border-box;
							max-height: 90vh;
							padding: 1rem 2rem 2rem;
							overflow-y: scroll;
							width: 90vw;
						}

						.sub-heading {
							margin: 1rem;
						}
					`
				}
			</style>
		</section>
	);
}
