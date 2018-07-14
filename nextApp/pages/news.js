import fetch from "isomorphic-fetch";

const NEWS_PAGE = ({ news }) => (
	<h1>News</h1>
)

NEWS_PAGE.getInitialProps = async () => {
	const response  = await fetch('https://0zw0wj7m2i.execute-api.us-east-1.amazonaws.com/TestGet/content?page=news')
	const news = await response.json()
	return { news }
}

export default NEWS_PAGE