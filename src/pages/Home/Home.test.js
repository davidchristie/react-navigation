import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'

import Home from './Home'

it('renders correctly', () => {
  expect(toJson(shallow(
    <Home />
  ))).toMatchSnapshot()
})
