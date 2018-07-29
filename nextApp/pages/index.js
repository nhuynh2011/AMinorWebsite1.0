import { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'

export default class extends Component {
  static async getInitialProps () {
    return {}
  }

  render () {
    return (
      <section>
	      <Carousel
		      autoPlay={false}
		      infiniteLoop={true}
		      interval={5000}
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
			      <img src="/static/images/group.jpg"/>
			      <p className="legend legend-show">Group 3</p>
		      </div>

		      <div>
			      <img src="/static/images/group2.jpeg"/>
			      <p className="legend legend-show">Group 4</p>
		      </div>
	      </Carousel>

	      <style jsx>
		      {
		      	`
		      	  section {
		      	    background: black;
		      	  }
		      	`
		      }
	      </style>
      </section>
    )
  }
}
