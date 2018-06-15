import { Component } from 'react'
import Link from 'next/link'

export default class extends Component {
  handleClick = (e) => {
    e.preventDefault()
    this.props.updateActiveLink(e.target)
  }

  render() {
    return (
      <li onClick={this.handleClick} id={this.props.href}>
        <Link href={this.props.href} prefetch><a>{this.props.title}</a></Link>

        <style jsx>
          {`
            li {
              margin: 0 15px;
              z-index: 3;
            }

            a {

              color: white;
              font-size: 25px;
              text-decoration: none;
            }
          `}
        </style>
      </li>

    )
  }
}