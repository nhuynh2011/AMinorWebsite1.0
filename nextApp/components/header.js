import { Component } from 'react'
import NavLink from './navLink'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeLink: 'Home'
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
              isActive={link.title === this.state.activeLink}
              key={link.title}
              title={link.title}/>
            )}
          </ul>
        </nav>

        <style jsx>
          {`
            ul {
              align-items: center;
              display: flex;
              list-style-type: none;
              justify-content: center;
            }
          `}
        </style>
      </header>
    )
  }

}