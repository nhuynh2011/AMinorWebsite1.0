import { Component, Fragment } from 'react'
import MemberLightBox from '../components/membersLightBox'
import fetch from 'isomorphic-fetch'
import LightBox from '../components/lightBox'

export default class extends Component {

	static async getInitialProps() {
		const response  = await fetch('https://0zw0wj7m2i.execute-api.us-east-1.amazonaws.com/TestGet/content?page=members')
		const data = await response.json()
		const members = data.message.content
		return { members }
	}

	render() {
		const { members } = this.props

		return (
			<section>

				<h3>Eboard Members</h3>
				<MemberLightBox members={members.current.exec} transitionTime={1000}></MemberLightBox>

				<h3>Members</h3>
				<MemberLightBox members={members.current.generalmembers} transitionTime={1000}></MemberLightBox>

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
		)
	}
}
