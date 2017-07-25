import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'

import Navigation from './Navigation'

it('renders correctly', () => {
  expect(toJson(shallow(
    <Navigation>
      Content
    </Navigation>
  ))).toMatchSnapshot()
})
