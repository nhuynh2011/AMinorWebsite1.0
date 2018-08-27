import { Fragment } from 'react';

import fetch from 'isomorphic-fetch';

import DescriptionBox from '../components/description-box';
import ServiceModal from '../components/service-modal';

const SERVICES_PAGE = ({ services }) => (
	<Fragment>
		<DescriptionBox heading="Services" subtext={services.summary}></DescriptionBox>

		<ul className="services">
			<li className="service">
				<ServiceModal
					imageLink="/static/images/singing.png"
					service={services.gigs}
					serviceTitle="Gigs"
				>
				</ServiceModal>
			</li>

			<li className="service">
				<ServiceModal
					imageLink="/static/images/singing2.png"
					service={services['master_classes']}
					serviceTitle="Master Classes"
				>
				</ServiceModal>
			</li>
		</ul>

		<style jsx>
			{
				`
					.services {
						display: flex;
						flex-wrap: wrap;
						justify-content: space-around;
						list-style-type: none;
						padding: 0;
					}
				`
			}
		</style>
	</Fragment>
);

SERVICES_PAGE.getInitialProps = async () => {
	const response  = await fetch('https://0zw0wj7m2i.execute-api.us-east-1.amazonaws.com/TestGet/content?page=services');
	const data = await response.json();
	const services = data.message.content;
	return { services };
}

export default SERVICES_PAGE;