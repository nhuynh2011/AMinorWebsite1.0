import fetch from 'isomorphic-fetch';
import DescriptionBox from "../components/description-box";

import MemberModals from '../components/member-modals';

const MEMBERS_PAGE = ({ members }) => (
	<section>

		<DescriptionBox bgColor="#eaeaea">
			<h1>Members</h1>
			<p>Donec sed nisi nisi. Nam ultrices, leo et hendrerit consequat, mi elit pretium felis, varius venenatis justo mauris sit amet lectus. Etiam dolor dolor, iaculis in ornare ut, vestibulum sit amet nibh. Nullam gravida pellentesque ex id semper. Duis eu fringilla ante. Nulla facilisi. Phasellus sed nibh vitae quam viverra gravida. Aenean volutpat ultricies nunc, quis porttitor mi porta eu. Praesent sollicitudin pellentesque pretium. Aenean non sapien vulputate, pretium eros in, consectetur nisi. Proin non pretium tortor, ac vestibulum neque. Aenean nec lorem erat. Morbi eleifend mattis lacinia. Nulla in urna fermentum, sagittis diam sit amet, auctor nulla. Aenean a mauris sem.</p>
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
