import { Component } from 'react'
import NavLink from './navLink'
import NavSlider from './navSlider'
import Router from 'next/router'

export default class extends Component {
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
    this.setState({ activeLink: document.getElementById(Router.asPath) })
  }

  setActiveLink = (newActiveLink) => {
    this.setState({ activeLink: newActiveLink })
  }

  render() {
    return (
      <header>
        <nav>
          <ul>
            {this.links.map(link =>
              <NavLink
                href={link.href}
                key={link.title}
                prefetch
                title={link.title}
                updateActiveLink={this.setActiveLink}>
              </NavLink>
            )}
          </ul>
          <NavSlider
            xOffset={this.state.activeLink ? this.state.activeLink.offsetLeft - 10 : 0}
            width={this.state.activeLink ? this.state.activeLink.offsetWidth + 20 : 0}
          />
        </nav>

        <style jsx>
          {`
            header {
              background: black;
              padding: 15px;
            }

            ul {
              align-items: center;
              display: flex;
              list-style-type: none;
              justify-content: center;
              margin: 0;
            }
          `}
        </style>
      </header>
    )
  }
}