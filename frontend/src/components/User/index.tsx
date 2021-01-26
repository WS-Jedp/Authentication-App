import React, { useState } from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import { UserWrapper, UserMenuWrapper } from './styles'

import { MenuButton } from '../Buttons/MenuButton'

export const User:React.FC = () => {

  const [isOpen, setIsOpen] = useState<Boolean>(false)

  return (
    <UserWrapper onClick={() => setIsOpen(!isOpen)}>
      <image />
      <h3>Name of User</h3>
      <MdArrowDropDown />
      {
        isOpen && (
          <UserMenuWrapper>
            <MenuButton />
          </UserMenuWrapper>
        )
      }
    </UserWrapper>
  )
} 