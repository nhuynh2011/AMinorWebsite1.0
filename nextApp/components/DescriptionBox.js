import React from 'react';

export default ({ heading, subtext }) => {
  const generateText = () => {
    return subtext.map((paragraph, index) => {
      return (
        <p className="content-text" key={index}>{paragraph}</p>
      );
    });
  }

  const processSubtext = () => {
    if (subtext) {
      if (Array.isArray(subtext)) {
      	return generateText();
      }
      return subtext;
    }
  }

  return (
    <section className="description">
      <div className="content-wrap">
        <h1 className="content-title">{heading}</h1>
        { processSubtext() }
      </div>
      <style jsx>
        {
          `
            .description {
              background: #eaeaea;
              box-shadow: 0 2px 7px rgba(0, 0, 0, 0.5);
              text-align: center;
              color: #333;
              padding: 1rem 2rem 2rem 2rem;
            }

            .break {
              height: 2px;
              background: #eaeaea;
              padding: 0;
            }

            .content-title {
              font-size: 1.5rem;
              font-weight: 550;
              color: black;
            }

            p {
              font-weight: 500;
              font-size: 1rem;
            }
          `
        }
      </style>
    </section>
  );
}
