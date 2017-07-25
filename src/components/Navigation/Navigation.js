import React, { Component } from 'react'

import NavigationToggle from '../NavigationToggle'
import './Navigation.css'

export default class Navigation extends Component {
  constructor (props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }

  render () {
    const className = this.state.isOpen
      ? 'Navigation'
      : 'Navigation collapsed'
    return (
      <nav className={className}>
        <NavigationToggle onClick={this.toggle} />
        <ul>
          {this.props.children}
        </ul>
      </nav>
    )
  }

  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}
