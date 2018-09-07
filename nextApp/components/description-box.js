import React from 'react';

export default ({ bgColor, children }) => {
  return (
    <div className="description">
	    {children}

	    <style jsx>
        {
          `
            .description {
              background: ${bgColor};
              box-shadow: 0 2px 7px rgba(0, 0, 0, 0.5);
              color: #333;
              padding: 1rem 10% 2rem;
              margin: 1rem 0;
              text-align: center;
            }

            .pattern {
              position: absolute;
              margin: 0;
              padding: 0;
							background: url('./static/images/qbkls.png');
							background-position: center;
							background-repeat: repeat;
              opacity: 1;
            }
          `
        }
      </style>
    </div>
  );
}
