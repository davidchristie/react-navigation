import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'

import Layout from './Layout'

it('renders correctly', () => {
  expect(toJson(shallow(
    <Layout>
      Content
    </Layout>
  ))).toMatchSnapshot()
})
