import { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import DescriptionBox from '../components/DescriptionBox';

export default class extends Component {
  static async getInitialProps () {
    return {}
  }

  render () {
    return (
      <section>
	      <Carousel
		      autoPlay
		      infiniteLoop
		      interval={4000}
		      showArrows={false}
	        showStatus={false}
	        showThumbs={false}
		      transitionTime={600}
	      >
		      <div>
			      <img src="/static/images/group.jpg"/>
			      <p className="legend legend-show">Group 1</p>
		      </div>

		      <div>
			      <img src="/static/images/group2.jpeg"/>
			      <p className="legend legend-show">Group 2</p>
		      </div>

		      <div>
			      <img src="/static/images/singing.png"/>
			      <p className="legend legend-show">Group 3</p>
		      </div>

		      <div>
			      <img src="/static/images/singing2.png"/>
			      <p className="legend legend-show">Group 4</p>
		      </div>
	      </Carousel>

	      <div className="about-us">
		      <DescriptionBox
			      heading="About Us"
			      subtext="Donec sed nisi nisi. Nam ultrices, leo et hendrerit consequat, mi elit pretium felis, varius venenatis justo mauris sit amet lectus. Etiam dolor dolor, iaculis in ornare ut, vestibulum sit amet nibh. Nullam gravida pellentesque ex id semper. Duis eu fringilla ante. Nulla facilisi. Phasellus sed nibh vitae quam viverra gravida. Aenean volutpat ultricies nunc, quis porttitor mi porta eu. Praesent sollicitudin pellentesque pretium. Aenean non sapien vulputate, pretium eros in, consectetur nisi. Proin non pretium tortor, ac vestibulum neque. Aenean nec lorem erat. Morbi eleifend mattis lacinia. Nulla in urna fermentum, sagittis diam sit amet, auctor nulla. Aenean a mauris sem."
		      >
		      </DescriptionBox>
	      </div>

	      <style jsx>
		      {
		      	`
		      	  section {
		      	    background: black;
		      	  }

		      	  .carousel {
		      	    max-height: 80vh;
		      	  }

		      	  .about-us {
		      	    background: white;
		      	    padding: 1rem 0;
		      	  }
		      	`
		      }
	      </style>
      </section>
    );
  }
}
