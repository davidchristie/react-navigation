import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NavigationLink extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired
  }

  render () {
    return (
      <li className='NavigationLink'>
        <NavLink exact to={this.props.to}>
          {this.props.children}
        </NavLink>
      </li>
    )
  }
}
