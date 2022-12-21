import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 24px 24px 0 24px;
  overflow: auto;
  width: 100%;
`

export const ProjectGrid = styled.div`
  display: grid;
  column-gap: 32px;
  row-gap: 32px;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-flow: row;
  margin: 0;
`

export const ProjectItem = styled.div``
