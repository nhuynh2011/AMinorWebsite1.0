import { Component } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeLink: undefined
    }
    this.links = [
      {title: 'Home', href: '/'},
      {title: 'History', href: '/history'},
      {title: 'Members', href: '/members'},
      {title: 'News', href: '/news'},
      {title: 'Repertoire', href: '/repertoire'},
      {title: 'Services', href: '/services'}
    ]
  }

  componentDidMount() {
    const route = this.props.router.pathname
    if (this.links.find(link => link.href === route)) {
	    this.setActiveLink(document.getElementById(route).firstChild)
    }
  }

	/**
   * Given the new active link, animate the navbar to reflect this update
	 * @param newActiveLink
	 */
	setActiveLink = (newActiveLink) => {
    if (this.state.activeLink) {
      this.state.activeLink.classList.remove('active-link')
    }

    this.setState({ activeLink: newActiveLink },
      () => this.state.activeLink.classList.add('active-link'))
  }


  render() {
    return (
      <header>
        <nav>
          <ul>
            {this.links.map(link =>
              <li id={link.href} key={link.title} onClick={(e) => this.setActiveLink(e.target)}>
                <Link href={link.href} prefetch>
                  <a data-hover={link.title}>{link.title}</a>
                </Link>
              </li>
            )}
          </ul>
        </nav>

        <style jsx>
          {`
            header {
              background: black;
              padding: 1rem;
            }

            ul {
              align-items: center;
              display: flex;
              list-style-type: none;
              justify-content: center;
              margin: 0;
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

            a::before {
              color: #4C7FB2;
              content: attr(data-hover);
              max-width: 0;
              overflow: hidden;
              position: absolute;
                left: 0;
              transition: max-width var(--page-transition) ease-in-out;
              will-change: width;
            }

            .active-link {
              color: #4C7FB2;
              transition: color var(--page-transition) cubic-bezier(0.9, 0, 0.9, 0);
            }

            .active-link::before {
              max-width: 100%;
            }
          `}
        </style>
      </header>
    )
  }
}

export default withRouter(Header)