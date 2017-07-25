import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'

import NavigationLink from './NavigationLink'

it('renders correctly', () => {
  const props = {
    to: 'link'
  }
  expect(toJson(shallow(
    <NavigationLink {...props}>
      Content
    </NavigationLink>
  ))).toMatchSnapshot()
})
