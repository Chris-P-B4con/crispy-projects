import React from 'react'
import ReactDOM from 'react-dom'
import BlogCardFooter from './BlogCardFooter'

it('BlogCardFooter should mount', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BlogCardFooter />, div)
  ReactDOM.unmountComponentAtNode(div)
})
