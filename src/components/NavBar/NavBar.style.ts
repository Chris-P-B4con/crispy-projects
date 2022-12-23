import styled, { css } from 'styled-components'
import Link from 'next/link'

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 3;
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.palette.background.level1};
  opacity: 95%;

  /* if backdrop support: very transparent and blurred */
  @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    opacity: 85%;
    -webkit-backdrop-filter: blur(5em);
    backdrop-filter: blur(5px);
  }
`

export const InnerWrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 8px 24px;
  height: 100%;
`
export const Title = styled.h4`
  min-width: 200px;
  color: ${(props) => props.theme.palette.secondary.main};
  flex: 1;
  font-size: 1.2rem;
  width: fit-content;
  margin: 0;
`

export const Actions = styled.nav`
  flex: 1.5;
  height: 100%;
  display: flex;
  flex-direction: row;
`

export const InnerActions = styled.ul`
  list-style-image: initial;
  list-style-type: none;
  display: flex;
  align-items: center;
  margin: 0;
  height: 100%;
  gap: 20px;
`

export const RightActions = styled.ul`
  list-style-image: initial;
  list-style-type: none;
  display: flex;
  align-items: center;
  align-self: flex-end;
  margin: 0;
  margin-left: auto;
  height: 100%;
  gap: 20px;
  ::after{
    content: hello;
  }
`

export const Button = styled.button`

`

export const ActionItem = styled.li<LinkProps>`
  font-size: 0.8rem;
  height: 100%;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
  display: list-item;
  text-align: match-parent;
  display: flex;
  align-items: center;
`

export const StyledLink = styled(Link)<LinkProps>`
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: ${(props) => props.theme.palette.text.primary};
  :visited {
    color: ${(props) => props.theme.palette.text.primary};
  }
  :active {
    color: ${(props) => props.theme.palette.text.primary};
  }
  transition: border 500ms ease-in-out;
  border-bottom: 2px solid transparent;
  padding-bottom: 3px;
  border-radius: 2.5px;

  ${(props) =>
    props.selected &&
    css`
      margin-top: 1px;
      border-color: ${(props) => props.theme.palette.primary.main};
    `}

  :hover {
    transition: border 500ms ease-in;
    border-color: ${(props) => props.theme.palette.primary.main};
  }
`

interface LinkProps {
  selected?: boolean
}
