import fetch from 'isomorphic-fetch';
import DescriptionBox from "../components/description-box";

import MemberModals from '../components/member-modals';
import Modal from '../components/modal'

const MEMBERS_PAGE = ({ members }) => (
	<section>

		<DescriptionBox bgColor="#eaeaea">
			<h1>Here's our current batch of A Minorians!</h1>
			<p>To learn more about each member, click on their photo!  For a list of Alumni, please check out the "See Alumni A Minorians" at the bottom of this page.</p>
		</DescriptionBox>

		<h3>Executive Board Members</h3>

		<MemberModals members={members.current.exec}></MemberModals>

		<h3>Members</h3>
		<MemberModals members={members.current.generalmembers}></MemberModals>
		<div className="modal-container">
			<Modal zIndexWhenExpanded={100}>
				{{
					unexpanded: (
						<h3 className="content-unexpanded">See Alumni A Minorians</h3>
					),
					expanded: (
						<div className="modal-container">
							<h2>List of All Past Members</h2>
							<hr />
							<ul className="background">{members.past.map((member, index) => <li key={index}>{member}</li>)}</ul>
						</div>
					)
				}}
			</Modal>
		</div>
		<style jsx>
			{
				`
					h3 {
						text-align: center;
					}

					h2 {
						padding: 0;
						margin: 0;
					}

					.modal-container {
						display: flex;
						background: white;
						border-radius: 0.25rem;
						flex-direction: column;
						max-height: 80vh;
						padding: 1rem;
						margin: 0 auto;
						overflow: hidden;
						overflow-y: auto;
						text-align: center;
						width: 80vw;
					}

					.modal-container ul {
						list-style-type: none;
						padding: 0;
					}

					.modal-container li {
						margin-bottom: .5rem;
					}

					.modal-container h3 {
						background: #304eaa;
						border-radius: 0.5rem;
						box-shadow: 0 0.25rem 1rem 0 rgba(0,0,0,0.8);
						color: white;
						padding: 1rem 2rem;
						margin: 2rem auto;
						width: fit-content;
					}

					hr {
						display: block;
						margin: 0.5rem auto 0rem auto;
						height: 1px;
						width: 10rem;
						border-style: insert;
						border-width: 1px;
						border-color: white;
					}
				`
			}
		</style>
	</section>
);

MEMBERS_PAGE.getInitialProps = async ()  => {
	const response  = await fetch('https://0zw0wj7m2i.execute-api.us-east-1.amazonaws.com/TestGet/content?page=members');
	const data = await response.json();
	const members = data.message.content;
	return { members };
}

export default MEMBERS_PAGE;
