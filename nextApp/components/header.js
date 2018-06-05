import { Component } from 'react'
import NavLink from './navLink'


export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeLink: 'Home'
    }
    this.links = [
      {title: 'Home', href: '/', isActive: true},
      {title: 'News', href: '/news'},
      {title: 'History', href: '/history'},
      {title: 'Members', href: '/members'},
      {title: 'Services', href: '/services'},
      {title: 'Repertoire', href: '/repertoire'}
    ]
  }

  render() {
    return (
      <header>
        <nav>
          <ul>
            {this.links.map(link => <NavLink
              isActive={link.isActive}
              href={link.href}
              key={link.title}
              title={link.title}
              />
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