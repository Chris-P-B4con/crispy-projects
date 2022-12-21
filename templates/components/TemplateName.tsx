import React from 'react'
import { useTemplateName } from './TemplateName.logic'
import { Wrapper } from './TemplateName.style'

const TemplateName = (props: TemplateNameProps) => {
  return (
    <Wrapper data-testid='TemplateName'>
      <h1>TemplateName component</h1>
    </Wrapper>
  )
}

export default TemplateName

export interface TemplateNameProps {}
