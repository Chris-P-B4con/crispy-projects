import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 0px 24px;
  margin-left: auto;
  margin-right: auto;
  ${(props) => props.theme.breakpoints?.down('md')} {
    padding: 20px;
  }
  overflow: auto;
  width: 100%;
  margin-bottom: 25px;
  max-width: 1050px;
`

export const ProjectGrid = styled.div`
  display: grid;
  column-gap: 32px;
  row-gap: 32px;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-flow: row;
  padding-top: 64px;
  padding-bottom: 64px;
`

export const ProjectItem = styled.div``
