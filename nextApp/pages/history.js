import fetch from "isomorphic-fetch";

const HISTORY_PAGE = ({ history }) => (
	<h1>History</h1>
)

HISTORY_PAGE.getInitialProps = async () => {
	const response  = await fetch('https://0zw0wj7m2i.execute-api.us-east-1.amazonaws.com/TestGet/content?page=history')
	const history = await response.json()
	return { history }
}

export default HISTORY_PAGE