import fetch from 'isomorphic-fetch';

import DescriptionBox from '../components/description-box';
import Modal from '../components/modal'

const REPERTOIRE_PAGE = ({ repertoire }) => (
	<section>
		<DescriptionBox bgColor="#eaeaea">
			<h1>Repertoire</h1>
			<p>The following list of songs are songs that we can sing at a gig or teach at a master class.</p>
			
			<div className="modals-container">
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
			</div>
		</DescriptionBox>

		<style jsx>
			{
				`
					section {
						text-align: center;
					}
					
					.modals-container {
						display: flex;
						flex-wrap: wrap;
						justify-content: space-around;
					}

					h3 {
						background: #304eaa;
						border-radius: 0.5rem;
						box-shadow: 0 0.25rem 1rem 0 rgba(0,0,0,0.8);
						color: white;
						padding: 1rem 2rem;
						margin: 2rem auto 0;
						width: fit-content;
					}

					h3:active {
						transform: scale(0.99);
					}

					.modal-container {
						background: white;
						border-radius: 0.25rem;
						display: flex;
						flex-direction: column;
						max-height: 80vh;
						padding: 1rem;
						overflow: hidden;
						overflow-y: auto;
						text-align: center;
						width: 80vw;
					}

					hr {
						display: block;
						margin: 0.5rem auto;
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
