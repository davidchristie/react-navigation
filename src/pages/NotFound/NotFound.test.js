import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'

import NotFound from './NotFound'

it('renders correctly', () => {
  expect(toJson(shallow(
    <NotFound />
  ))).toMatchSnapshot()
})
