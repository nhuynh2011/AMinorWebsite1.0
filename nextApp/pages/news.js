import fetch from 'isomorphic-fetch';
import NewModals from '../components/news-modals';
import DescriptionBox from '../components/DescriptionBox';
import { Fragment } from 'react';

const NEWS_PAGE = ({ news }) => (
	<Fragment>
		<DescriptionBox heading="News" subtext="Check out our lastest new."></DescriptionBox>

		<NewModals news={news}></NewModals>
	</Fragment>
)

NEWS_PAGE.getInitialProps = async () => {
	const response  = await fetch('https://0zw0wj7m2i.execute-api.us-east-1.amazonaws.com/TestGet/content?page=news')
	const data = await response.json()
	const news = data.message.content
	return { news }
}

export default NEWS_PAGE;