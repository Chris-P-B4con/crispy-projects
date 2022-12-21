import React from 'react'
import { useNavBar } from './NavBar.logic'
import { Wrapper } from './NavBar.style'

const NavBar = (props: NavBarProps) => {
  return (
    <Wrapper data-testid='NavBar'>
      <h1>NavBar component</h1>
    </Wrapper>
  )
}

export default NavBar

export interface NavBarProps {}
