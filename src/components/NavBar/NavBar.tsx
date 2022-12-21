import React from 'react'
import { useNavBar } from './NavBar.logic'
import {
  ActionItem,
  Actions,
  InnerActions,
  InnerWrapper,
  Link,
  Title,
  Wrapper,
} from './NavBar.style'

const NavBar = (props: NavBarProps) => {
  const { selected } = props
  return (
    <Wrapper data-testid='NavBar'>
      <InnerWrapper>
        <Title>CRISPY PROJECTS</Title>
        <Actions>
          <InnerActions>
            <ActionItem selected={selected === 'projects'}>
              <Link>Projects</Link>
            </ActionItem>
            <ActionItem selected={selected === 'profile'}>
              <Link>Profile</Link>
            </ActionItem>
            <ActionItem selected={selected === 'about'}>
              <Link>About</Link>
            </ActionItem>
          </InnerActions>
        </Actions>
      </InnerWrapper>
    </Wrapper>
  )
}

export default NavBar

export interface NavBarProps {
  selected?: 'projects' | 'about' | 'profile'
}
