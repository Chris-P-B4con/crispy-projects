import React from 'react'
import ReactDOM from 'react-dom'
import BlogCardHeader from './BlogCardHeader'

it('BlogCardHeader should mount', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BlogCardHeader />, div)
  ReactDOM.unmountComponentAtNode(div)
})
