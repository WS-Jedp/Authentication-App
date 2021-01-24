import React from 'react'

import { ButtonWrapper } from './styles'

type PropsButton = {
  content: string;
  onClick?: Function;
  primary: Boolean;
}

export const Button = ({content, onClick, primary}:PropsButton) => {
  
  return (
    <ButtonWrapper primary={primary}>
        {
          content
        }
    </ButtonWrapper>
  )
} 