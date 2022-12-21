import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 3;
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.palette.background.level1};
`

export const InnerWrapper = styled.header`
  display: flex;
  padding: 12px 24px;
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
  flex: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const InnerActions = styled.ul`
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 20px;
`

export const ActionItem = styled.li<LinkProps>`
  text-transform: uppercase;
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-top: ${(props) => props.selected && '3px'};
  border-bottom: ${(props) => props.selected && '3px solid'};
  border-color: ${(props) =>
    props.selected && props.theme.palette.primary.main};
`

export const Link = styled.a<LinkProps>`
  cursor: pointer;
  text-decoration: ${(props) => props.selected && 'underline'};
  color: ${(props) => props.selected && props.theme.palette.primary.main};
`

interface LinkProps {
  selected?: boolean
}
