/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './NavBar'

it('NavBar should mount', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NavBar />, div)
  ReactDOM.unmountComponentAtNode(div)
})
