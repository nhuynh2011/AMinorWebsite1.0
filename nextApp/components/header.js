import { Component } from 'react';

import Link from 'next/link';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.links = [
	    {title: 'Home', href: '/'},
	    {title: 'News', href: '/news'},
	    {title: 'Members', href: '/members'},
	    {title: 'Discography', href: '/discography'},
	    {title: 'Repertoire', href: '/repertoire'},
	    {title: 'Services', href: '/services'},
	    {title: 'History', href: '/history'}
    ];
  }

  render() {
	  const { currentRoute } = this.props;

    return (
      <header>
	      <Link href="/" prefetch>
					<a>
						<img alt="Aminor Logo" src="/static/images/AMinorLogoWhite.png"/>
					</a>
	      </Link>
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
              align-items: center;
              background: #304eaa;
              display: flex;
              height: 4rem;
              justify-content: space-between;
              padding: 1rem 1rem 1rem 2rem;
            }

            img {
	            height: 4rem;
	          }

            nav {
              display: inline-block;
            }

            ul {
              display: flex;
              list-style-type: none;
              justify-content: center;
              margin: 0;
              padding: 0;
            }

            li {
              margin: 0 0.707rem;
            }

            a {
              color: white;
              font-size: 1.682rem;
              position: relative;
              text-decoration: none;
            }

            .link-underline {
              border-radius: 1px;
              border-top: 3px solid white;
              position: relative;
                top: 3px;
              transition: transform var(--page-transition) ease-out;
            }

            .unactive-link .link-underline {
              transform: scaleX(0);
            }

            .unactive-link:hover .link-underline {
							transform: scaleX(0.5);
            }

            @media screen and (max-width: 1300px) {
              header, img {
                height: 2.828rem;
              }
              
              a {
                font-size: 1.198rem;
              }
            }
          `}
        </style>
      </header>
    );
  }
}