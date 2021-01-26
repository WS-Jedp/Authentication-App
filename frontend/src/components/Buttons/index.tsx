import React from 'react'

import { ButtonWrapper } from './styles'

type PropsButton = {
  content: string;
  width?: string;
  onClick?: Function;
  primary?: Boolean;
}

export const Button = ({content, onClick, primary, width}:PropsButton) => {
  
  return (
    <ButtonWrapper primary={primary} width={width}>
        {
          content
        }
    </ButtonWrapper>
  )
} 