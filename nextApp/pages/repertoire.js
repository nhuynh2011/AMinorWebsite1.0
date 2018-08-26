import fetch from 'isomorphic-fetch';

const REPERTOIRE_PAGE = ({ repertoire }) => (
	<p>Rep</p>
)

REPERTOIRE_PAGE.getInitialProps = async () => {
	const response  = await fetch('https://0zw0wj7m2i.execute-api.us-east-1.amazonaws.com/TestGet/content?page=repertoire')
	const data = await response.json()
	const repertoire = data.message.content
	return { repertoire }
}

export default REPERTOIRE_PAGE;
