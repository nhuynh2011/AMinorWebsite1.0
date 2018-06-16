import { Component } from 'react'
import Link from 'next/link'
import NavSlider from './navSlider'
import Router from 'next/router'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navSliderOffsetLeft: 0,
      navSliderWidth: 0
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
    this.setActiveLink(document.getElementById(Router.asPath).firstChild)
  }

  setActiveLink = (activeLink) => {
    if (activeLink.tagName === "A") {
      this.setState({
        navSliderOffsetLeft: activeLink.offsetLeft,
        navSliderWidth: activeLink.offsetWidth
      })
    }
  }

  render() {
    return (
      <header>
        <nav>
          <ul>
            {this.links.map(link =>
              <li id={link.href} key={link.title} onClick={(e) => this.setActiveLink(e.target)}>
                <Link href={link.href} prefetch><a>{link.title}</a></Link>
              </li>
            )}
          </ul>

          <NavSlider
            xOffset={this.state.navSliderOffsetLeft}
            width={this.state.navSliderWidth}>
          </NavSlider>
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

            li {
              margin: 0 5px;
              z-index: 3;
            }

            a {
              color: white;
              font-size: 25px;
              padding: 0 10px;
              text-decoration: none;
            }
          `}
        </style>
      </header>
    )
  }
}