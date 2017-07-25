import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'

import NavigationToggle from '../NavigationToggle'
import Navigation from './Navigation'

it('renders collapsed state', () => {
  expect(toJson(shallow(
    <Navigation>
      Content
    </Navigation>
  ))).toMatchSnapshot()
})

it('renders open state', () => {
  const wrapper = shallow(
    <Navigation>
      Content
    </Navigation>
  )
  wrapper.find(NavigationToggle).simulate('click')
  expect(toJson(wrapper)).toMatchSnapshot()
})
