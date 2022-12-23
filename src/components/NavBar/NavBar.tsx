import React from 'react'
import { useRouter } from 'next/router'
import {
  ActionItem,
  Actions,
  InnerActions,
  InnerWrapper,
  StyledLink,
  Title,
  Wrapper,
} from './NavBar.style'

const NavBar = (props: NavBarProps) => {
  const router = useRouter()
  return (
    <Wrapper data-testid='NavBar'>
      <InnerWrapper>
        <Title>
          <StyledLink href={'/'}>CRISPY PROJECTS</StyledLink>
        </Title>
        <Actions>
          <InnerActions>
            <ActionItem>
              <StyledLink href={'/'} selected={router.pathname === '/'}>
                Projects
              </StyledLink>
            </ActionItem>
            <ActionItem>
              <StyledLink href={'/'} selected={router.pathname === 'about'}>
                About
              </StyledLink>
            </ActionItem>
          </InnerActions>
        </Actions>
      </InnerWrapper>
    </Wrapper>
  )
}

export default NavBar

export interface NavBarProps {}
