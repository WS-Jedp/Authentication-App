import React from 'react'

import { HeaderWrapper } from './styles'

import { User } from '../User'

export const Header:React.FC = () => {

  return (
    <HeaderWrapper>
        <h1>
          Authentication App
        </h1>

        <User />
    </HeaderWrapper>
  )
}