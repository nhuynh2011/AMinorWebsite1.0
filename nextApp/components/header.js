import { Component } from 'react';
import Link from 'next/link';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.links = [
      {title: 'Home', href: '/'},
      {title: 'History', href: '/history'},
      {title: 'Members', href: '/members'},
      {title: 'News', href: '/news'},
      {title: 'Repertoire', href: '/repertoire'},
      {title: 'Services', href: '/services'}
    ];
  }

  render() {
	  const { currentRoute } = this.props;

    return (
      <header>
	      <img alt="Aminor Logo" src="/static/images/AMinorLogo.png"/>
        <nav>
          <ul>
            {this.links.map(link => (
              <li className={currentRoute === link.href ? '' : 'unactive-link'} id={link.href} key={link.title}>
                <Link href={link.href} prefetch>
                  <a>{link.title}</a>
                </Link>
                <div className="link-underline"></div>
              </li>
            ))}
          </ul>
        </nav>

        <style jsx>
          {`
            header {
              background: black;
              display: flex;
              justify-content: space-between;
              padding: 1rem;
            }

            img {
              --logo-width: 170px;
	            height: calc(var(--logo-width) * 0.524);
	            width: var(--logo-width);
	          }

            nav {
              display: inline-block;
            }

            ul {
              align-items: center;
              display: flex;
              list-style-type: none;
              justify-content: center;
              margin: 0;
              padding: 0;
            }

            li {
              margin: 0 1.189rem;
            }

            a {
              color: white;
              font-size: 1.189rem;
              position: relative;
              text-decoration: none;
              transition: color var(--page-transition) cubic-bezier(0, 0.9, 0, 0.9);
            }

            .link-underline {
              border-top: 3px solid #304eaa;
              position: relative;
                top: 3px;
              transition: transform 0.5s ease-out;
            }

            .unactive-link .link-underline {
              transform: scaleX(0);
            }

            .unactive-link:hover .link-underline {
							transform: scaleX(0.5);
            }

            @media screen and (max-width: 1000px) {
              header {
                justify-content: center;
              }

              img {
	              display: none;
	            }
            }
          `}
        </style>
      </header>
    );
  }
}