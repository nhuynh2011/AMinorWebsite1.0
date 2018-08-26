import fetch from 'isomorphic-fetch';
import DescriptionBox from '../components/DescriptionBox';

const REPERTOIRE_PAGE = ({ repertoire }) => (
	<section>
		<DescriptionBox
			heading="Current Repertoire"
			subtext="The following list of songs is the songs that we can sing at a gig or teach at a master class."
		>
		</DescriptionBox>

		<ul>
			{repertoire.past.map((song, index) => <li key={index}>{song}</li>)}
		</ul>

		<style jsx>
			{
				`
					ul {
						align-items: center;
						display: flex;
						flex-direction: column;
						list-style-type: none;
					}

					li {
						margin: 0.707rem;
					}
				`
			}
		</style>
	</section>
)

REPERTOIRE_PAGE.getInitialProps = async () => {
	const response  = await fetch('https://0zw0wj7m2i.execute-api.us-east-1.amazonaws.com/TestGet/content?page=repertoire');
	const data = await response.json();
	const repertoire = data.message.content;
	return { repertoire };
}

export default REPERTOIRE_PAGE;
