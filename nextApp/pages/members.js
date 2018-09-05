import fetch from 'isomorphic-fetch';
import DescriptionBox from "../components/description-box";

import MemberModals from '../components/member-modals';

const MEMBERS_PAGE = ({ members }) => (
	<section>

		<DescriptionBox bgColor="#eaeaea">
			<h1>Here's our current batch of A Minorians!</h1>
			<p>To learn more about each member, click on their photo!  For a list of Alumni, please check out the History tab.</p>
		</DescriptionBox>

		<h3>Executive Board Members</h3>

		<MemberModals members={members.current.exec}></MemberModals>

		<h3>Members</h3>
		<MemberModals members={members.current.generalmembers}></MemberModals>

		<style jsx>
			{
				`
					h3 {
						text-align: center;
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
