import { Component } from 'react';
import MemberModals from '../components/member-modals';
import fetch from 'isomorphic-fetch';

export default class extends Component {

	static async getInitialProps() {
		const response  = await fetch('https://0zw0wj7m2i.execute-api.us-east-1.amazonaws.com/TestGet/content?page=members');
		const data = await response.json();
		const members = data.message.content;
		return { members };
	}

	render() {
		const { members } = this.props;

		return (
			<section>

				<h3>Eboard Members</h3>

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
	}
}
