import React from 'react'

import { ButtonSocialWrapper } from './styles'

export const ButtonSocial:React.FC = ({ children }) => {

  return (
    <ButtonSocialWrapper>
      {
        children
      }
    </ButtonSocialWrapper>
  )
}