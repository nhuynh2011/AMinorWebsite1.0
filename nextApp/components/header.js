import { Component } from 'react';

import Link from 'next/link';

import Menu from 'react-burger-menu/lib/menus/slide';

export default class Header extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
    	shouldDisplayHamburgerMenu: true
    }

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
  
  componentDidMount() {
  	this.displayHamnurgerMenu();
    window.addEventListener('resize', this.displayHamnurgerMenu);
  }
	
	componentWillUnmount() {
		window.removeEventListener('resize', this.displayHamnurgerMenu);
	}
  
  displayHamnurgerMenu = () => {
  	this.setState({ shouldDisplayHamburgerMenu: window.innerWidth <= 1000 });
  }
  

  render() {
	  const { currentRoute } = this.props;
	  
	  const { shouldDisplayHamburgerMenu } = this.state;

    return (
      <header>
	      <Link href="/" prefetch>
					<a>
						<img alt="Aminor Logo" src="/static/images/AMinorLogoWhite.png"/>
					</a>
	      </Link>
        <nav>
	        {shouldDisplayHamburgerMenu ? (
		        <Menu isOpen={false} right>
			        {this.links.map(link => (
				        <div className={currentRoute === link.href ? '' : 'unactive-link'} id={link.href} key={link.title}>
					        <Link href={link.href} prefetch>
						        <a>
							        {link.title}
							        <div className="link-underline"></div>
						        </a>
					        </Link>
				        </div>
			        ))}
		        </Menu>
	        ) : (
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
	        )}
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
              position: relative;
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
              outline: none;
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
              header {
                padding: 1rem 2rem;
              }
              
              header, img {
                height: 2.828rem;
              }
              
              a {
                font-size: 1.198rem;
              }
            }
          `}
        </style>
	      
	      <style jsx global>
		      {
		      	`
		      	  .bm-burger-button {
		      	    height: 1.682rem;
		      	    width: 1.682rem;
		      	  }
		      	  
		      	  .bm-burger-bars {
		      	    background: white;
		      	    border-radius: 3px;
		      	    max-height: 3px;
							}
							
							.bm-cross-button {
							  height: 24px;
							  width: 24px;
							}
							
							.bm-cross {
							  background: black;
							}
							
							.bm-menu-wrap {
								top: 0;
							}
							
							.bm-menu {
							  background: #eaeaea;
							  padding: 2.5em 1.5em 0;
							}
							
							.bm-item {
								margin-bottom: 1rem;
							}
							
							.bm-item a {
							  color: black;
							  font-size: 1.682rem;
                position: relative;
                text-decoration: none;
							}
							
							.bm-item .link-underline {
	              border-top: 3px solid black;
	              margin-bottom: 1rem;
	              position: absolute;
	                top: 100%;
	                left: 0;
	              transform-origin: left center;
	              width: 100%;
							}
							
							.bm-item.unactive-link:hover .link-underline {
								transform: scaleX(0.75);
	            }
							
							.bm-overlay {
								top: 0;
								left: 0;
								right: 0;
							  background: rgba(0, 0, 0, 0.5) !important;
							}
		      	`
		      }
	      </style>
      </header>
    );
  }
}