import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'

import About from './About'

it('renders correctly', () => {
  expect(toJson(shallow(
    <About />
  ))).toMatchSnapshot()
})
