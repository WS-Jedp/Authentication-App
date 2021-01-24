import React from 'react'

import { AuthWrapper } from './styles'

export const AuthContainer:React.FC = ({ children }) => {

  return (
    <AuthWrapper>
      {
        children
      }
    </AuthWrapper>
  )
}