import fetch from 'isomorphic-fetch';

import DescriptionBox from '../components/description-box';
import Modal from '../components/modal'

const REPERTOIRE_PAGE = ({ repertoire }) => (
	<section>
		<DescriptionBox bgColor="#eaeaea">
			<h1>Repertoire</h1>
			<p>The following list of songs are songs that we can sing at a gig or teach at a master class.</p>

			<Modal zIndexWhenExpanded={100}>
				{{
					unexpanded: (
						<h3 className="content-unexpanded">See Current Songs</h3>
					),
					expanded: (
						<div className="modal-container">
							<h2>List of Current Songs</h2>
							<hr />
							<ul className="background">{repertoire.current.map((song, index) => <li key={index}>{song}</li>)}</ul>
						</div>
					)
				}}
			</Modal>

			<Modal zIndexWhenExpanded={100}>
				{{
					unexpanded: (
						<h3 className="content-unexpanded">See Past Songs</h3>
					),
					expanded: (
						<div className="modal-container">
							<h2>List of All Past Songs</h2>
							<hr />
							<ul className="background">{repertoire.past.map((song, index) => <li key={index}>{song}</li>)}</ul>
						</div>
					)
				}}
			</Modal>
		</DescriptionBox>

		<style jsx>
			{
				`
					section {
						text-align: center;
					}

					h3 {
						background-color: #444;
						color: white;
						margin: 1rem auto;
						padding: 1rem 1rem;
						width: 10rem;
						border-radius: 5px;
						border-width: 1px;
						border-color: white;
						box-shadow: 0 0 1rem 1rem rbga(0, 0, 0, .6);
					}

					h3:hover {
						background-color: #555;
						color: white;
						margin: 1rem auto;
						padding: 1rem 1rem;
						width: 10rem;
						border-radius: 5px;
						border-width: 1px;
						border-color: white;
						box-shadow: 0 0 1rem 1rem rbga(0, 0, 0, .6);
					}

					.modal-container {
						max-height: 80vh;
						width: 80vw;
						overflow-y: scroll;
						text-align: center;
						display: flex;
						padding: 1rem 0;
						flex-direction: column;
						background-color: white;
					}

					hr {
						display: block;
						margin: .5rem auto;
						height: 1px;
						width: 10rem;
						border-style: insert;
						border-width: 1px;
						border-color: white;
					}

					h2 {
						margin: 0;
						padding: 0;
					}

					ul {
						list-style-type: none;
						padding: 0;
					}

					li {
						margin-bottom: .5rem;
					}
				`
			}
		</style>
	</section>
);

REPERTOIRE_PAGE.getInitialProps = async () => {
	const response  = await fetch('https://0zw0wj7m2i.execute-api.us-east-1.amazonaws.com/TestGet/content?page=repertoire');
	const data = await response.json();
	const repertoire = data.message.content;
	return { repertoire };
}

export default REPERTOIRE_PAGE;
