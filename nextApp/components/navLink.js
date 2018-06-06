import { Component } from 'react'
import Link from 'next/link'

export default class extends Component {
  handleClick = (e) => {
    e.preventDefault()
    this.props.updateActiveLink(this.props.href)
  }

  render () {
    return (
      <li onClick={this.handleClick}>
        <Link href={this.props.href} prefetch>
          <a className={this.props.isActive ? "active" : ""}>{this.props.title}</a>
        </Link>

        <style jsx>
          {`
            li {
              background: ;
              margin: 15px;
            }

            a {
              color: white;
              font-size: 25px;
              text-decoration: none;
              transition: color 1s ease-in-out
            }

            .active {
              color: green;
            }
          `}
        </style>
      </li>

    )
  }
}