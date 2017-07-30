import PropTypes from 'prop-types'
import React, { Component } from 'react'

import './NavigationToggle.css'

export default class NavigationToggle extends Component {
  static propTypes = {
    onClick: PropTypes.func
  }

  render () {
    return (
      <button
        className='NavigationToggle'
        onClick={this.props.onClick}
      >
        <div />
        <div />
        <div />
      </button>
    )
  }
}
