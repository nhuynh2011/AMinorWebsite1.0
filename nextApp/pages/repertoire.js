import fetch from "isomorphic-fetch";

const REPERTOIRE_PAGE = ({ repertoire }) => (
	<p>{repertoire.message}</p>
)

REPERTOIRE_PAGE.getInitialProps = async () => {
	const response  = await fetch('https://0zw0wj7m2i.execute-api.us-east-1.amazonaws.com/TestGet/content?page=repertoire')
	const repertoire = await response.json()
	return { repertoire }
}

export default REPERTOIRE_PAGE