import React from 'react'

import { ButtonWrapper } from './styles'

type PropsButton = {
  content: string;
  width?: string;
  onAction?: () => {};
  primary?: Boolean;
}

export const Button = (props:PropsButton) => {

  const { content, primary, width, onAction } = props
  
  return (
    <ButtonWrapper primary={primary} width={width} onClick={onAction}>
        {
          content
        }
    </ButtonWrapper>
  )
} 