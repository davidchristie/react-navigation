import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import Content from './components/Content'
import Layout from './components/Layout'
import Navigation from './components/Navigation'
import NavigationLink from './components/NavigationLink'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

export default class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Layout>
          <Navigation>
            <NavigationLink to='/'>
              Home
            </NavigationLink>
            <NavigationLink to='/about'>
              About
            </NavigationLink>
            <NavigationLink to='/contact'>
              Contact
            </NavigationLink>
          </Navigation>
          <Content>
            <Switch>
              <Route component={Home} exact path='/' />
              <Route component={About} exact path='/about' />
              <Route component={Contact} exact path='/contact' />
              <Route component={NotFound} path='*' />
            </Switch>
          </Content>
        </Layout>
      </BrowserRouter>
    )
  }
}
