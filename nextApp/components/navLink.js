import { Component } from 'react'
import Link from 'next/link'

export default class extends Component {
  handleClick = () => {
    this.props.updateActiveLink(this.props.title)
  }

  render () {
    return (
      <li onClick={this.handleClick}>
        <Link href={this.props.href}>
          <a className={this.props.isActive ? "active" : ""}>{this.props.title}</a>
        </Link>

        <style jsx>
          {`
            li {
              margin: 15px;
            }

            a {
              transition: color 1s ease-in-out;
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