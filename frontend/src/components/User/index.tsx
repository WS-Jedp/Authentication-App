import React, { useState, useContext } from 'react'
import { useNavigate } from '@reach/router'
import { MdArrowDropDown } from 'react-icons/md'
import { UserWrapper, UserMenuWrapper } from './styles'

import { Context } from '../../context'

import { MenuButton } from '../Buttons/MenuButton'

export const User:React.FC = () => {

  const { setAuth } = useContext(Context) 
  const navigate = useNavigate()

  const [isOpen, setIsOpen] = useState<Boolean>(false)

  const onLogOut = () => {
    document.cookie = ''
    setAuth(false)
    navigate('/')
  } 

  return (
    <UserWrapper onClick={() => setIsOpen(!isOpen)}>
      <img />
      <h3>Name of User</h3>
      <MdArrowDropDown />
      {
        isOpen && (
          <UserMenuWrapper>
            <MenuButton content="Log out" onClick={onLogOut} />
          </UserMenuWrapper>
        )
      }
    </UserWrapper>
  )
} 