import fetch from "isomorphic-fetch";

const SERVICES_PAGE = ({ services }) => (
	<p>{services.message}</p>
)

SERVICES_PAGE.getInitialProps = async () => {
	const response  = await fetch('https://0zw0wj7m2i.execute-api.us-east-1.amazonaws.com/TestGet/content?page=services')
	const services = await response.json()
	return { services }
}

export default SERVICES_PAGE