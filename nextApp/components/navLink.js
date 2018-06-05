import { Component } from 'react'
import Link from 'next/link'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = { isActive: undefined }
  }

  componentWillReceiveProps(newProps) {
    this.setState({ isActive: newProps.isActive })
  }

  handleClick = (e) => {
    console.log(e.target.innerHTML)
    this.setState({isActive: true}, () => {console.log(this.state.isActive)})
  }

  render () {
    return (
      <li onClick={this.handleClick}>
        <Link href={this.props.href}>
          <a onClick={this.handleClick}>{this.props.title}</a>
        </Link>

        <style jsx>
          {`
            li {
              margin: 15px;
            }
          `}
        </style>
      </li>

    )
  }
}