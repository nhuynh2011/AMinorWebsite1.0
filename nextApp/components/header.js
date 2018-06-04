import Link from 'next/link'
import { Component } from 'react'


export default class extends Component {
  constructor(props) {
    super(props)
    this.links = [
      {title: 'Home', href: '/'},
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
            {this.links.map(link =>
              <li key={link.href}><Link href={link.href}><a>{link.title}</a></Link></li>
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

            li {
              margin: 10px;
            }

            a {
              text-decoration: none;
            }
          `}
        </style>
      </header>
    )
  }

}