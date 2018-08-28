import { Fragment } from 'react';

import fetch from 'isomorphic-fetch';

import DescriptionBox from '../components/description-box';
import Modal from "../components/modal";
import ServiceModal from '../components/service-modal';

const SERVICES_PAGE = ({ services }) => (
	<Fragment>
		<DescriptionBox bgColor="#eaeaea">
			<h1>Services</h1>
			<p>{services.summary}</p>
			
			<Modal zIndexWhenExpanded={100}>
				{{
					unexpanded: (
						<h3 className="content-unexpanded">Check out our Flier</h3>
					),
					expanded: (
						<img alt="Services Flier" className="content-expanded" src="/static/images/servicePoster.jpg"/>
					)
				}}
			</Modal>
		</DescriptionBox>

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
					.content-unexpanded {
						background: #304eaa;
						border-radius: 0.5rem;
						box-shadow: 0 0.25rem 1rem 0 rgba(0,0,0,0.8);
						color: white;
						padding: 1rem 2rem;
						margin: 2rem auto 0;
						width: fit-content;
					}
					
					.content-unexpanded:active {
						transform: scale(0.99);
					}
					
					.content-expanded {
						border-radius: 0.5rem;
						margin: 2rem 1rem;
						max-width: 692px;
						width: calc(100vw - 2rem);
					}
					
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