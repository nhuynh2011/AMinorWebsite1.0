import LightBox from '../components/lightBox'

export default () =>
	<ul>
		<li><LightBox></LightBox></li>
		<li><LightBox></LightBox></li>

		<style jsx>
			{`
				ul {
					display flex;
					list-style-type: none;
					justify-content: center;
					-webkit-padding-start: 0;
					-webkit-margin-before: 0;
          -webkit-margin-after: 0;
				}

				li {
					margin: 1rem;
				}
			`}
		</style>
	</ul>