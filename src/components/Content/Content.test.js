import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'

import Content from './Content'

it('renders correctly', () => {
  expect(toJson(shallow(
    <Content />
  ))).toMatchSnapshot()
})
