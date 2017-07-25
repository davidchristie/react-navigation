import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'

import Contact from './Contact'

it('renders correctly', () => {
  expect(toJson(shallow(
    <Contact />
  ))).toMatchSnapshot()
})
