import { Component } from 'react'
import fetch from 'isomorphic-unfetch'

export default class extends Component {
  static async getInitialProps () {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_page=2')
    const postList = await response.json()
    return { postList }
  }

  render () {
    return (
      <div>
        <h1>Home</h1>

        <ul>
          {this.props.postList.map(post =>
            <li key={post.id}>{post.body}</li>
          )}
        </ul>
      </div>
    )
  }
}
