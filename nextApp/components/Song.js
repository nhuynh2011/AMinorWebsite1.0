import React, { Component } from 'react'

class Song extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li className='song'>
        <p><b className='songtitle'>{ name + ' (' + time + ') '}</b></p>
        <p className='songinfo'>o.p.b { opb }</p>
        <p className='songinfo'><b className='songinfotitle'>Soloists: </b>{soloists}</p>
        <p className='songinfo'><b className='songinfotitle'>Arranger: </b>{arranger}</p>
      </li>
    )
  }
}

export default Song
