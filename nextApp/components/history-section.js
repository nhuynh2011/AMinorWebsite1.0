import { Component } from 'react';

export default class HistorySection extends Component {
  generateSection = (people) => {
  	return people.map((person, index) => (
      <section key={index} className="section-f">
        <div className="grid">
          <div className="left-side">
            <h3><b>{person.name}</b></h3>
            <h4>{person.dates}</h4>
            { person.text.map((paragraph, index) => <p key={index}>{paragraph}</p>) }
          </div>
          <div className="right-side">
            <img src={person.image} alt={person.alt} />
          </div>
        </div>

        <style jsx>
          {
            `
              .section-f {
                background: #fff;
                color: #333;
                padding: 1rem 3rem;
              }

              .left-side {
                padding-top: .5rem;
                padding-bottom: .5rem;
                border-top: 1px solid #ccc;
                color: #333;
              }

              .right-side {
                padding-top: 2rem;
                padding-bottom: .5rem;
                margin-left: auto;
                margin-right: auto;
              }

              img {
                width: 80%;
                display: block;
                margin-left: auto;
                margin-right: auto;
                height: cover;
                box-shadow: 0 0 5px 2px rgba(0, 0, 0, .3);
              }

              @media(min-width: 700px) {
                .grid {
                  display: grid;
                  grid-template-columns: 1fr 2fr 1fr 1fr;
                }

                .left-side {
                  grid-column: 1/3;
                  border-left: 1px solid #ccc;
                  border-top: none;
                  padding-left: 5%;
                  padding-right: 10%;
                  float: left;
                }

                .right-side {
                  grid-column: 3/5;
                  padding-top: 0;
                  padding-left: 5%;
                  float: right;
                }
              }
            `
          }
        </style>
      </section>
  		));
  }

  render() {
    return (
      <div>
        { this.generateSection(this.props.people) }
      </div>
    );
  }
}