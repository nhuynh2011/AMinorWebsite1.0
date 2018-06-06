import { Component } from 'react'
import NavLink from './navLink'
import Router from 'next/router'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeLink: undefined
    }
    this.links = [
      {title: 'Home', href: '/'},
      {title: 'News', href: '/news'},
      {title: 'History', href: '/history'},
      {title: 'Members', href: '/members'},
      {title: 'Services', href: '/services'},
      {title: 'Repertoire', href: '/repertoire'}
    ]
  }

  componentDidMount() {
    this.setState({ activeLink: Router.pathname })
  }

  setActiveLink = (newActiveLink) => {
    this.setState({ activeLink: newActiveLink })
  }

  render() {
    return (
      <header>
        <nav>
          <ul>
            {this.links.map(link => <NavLink
              updateActiveLink={this.setActiveLink}
              href={link.href}
              isActive={link.href === this.state.activeLink}
              key={link.title}
              title={link.title}/>
            )}
          </ul>
        </nav>

        <style jsx>
          {`
            header {
              background: black;
              margin: 0;
            }

            ul {
              align-items: center;
              display: flex;
              list-style-type: none;
              justify-content: center;
              margin: 0;
              -webkit-padding-start: ;
            }
          `}
        </style>
      </header>
    )
  }

}