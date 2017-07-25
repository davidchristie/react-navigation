import React, { Component } from 'react'

export default class Navigation extends Component {
  render () {
    return (
      <nav className='Navigation'>
        <ul>
          {this.props.children}
        </ul>
      </nav>
    )
  }
}
