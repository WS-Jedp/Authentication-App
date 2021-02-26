import React from 'react'
import { MdClose } from 'react-icons/md'
import { IconType } from 'react-icons'
import { MenuButtonWrapper } from './styles'

type PropsMenuButton = {
  content?: string;
  Icon?: IconType;
  onClick?: (ev:any) => void;
}

export const MenuButton= ({ content, Icon, onClick }:PropsMenuButton) => {



  return (
    <MenuButtonWrapper onClick={onClick}>

      {
        Icon ? <Icon /> : <MdClose /> 
      }

      <span>
        {
          content ? content : 'Option'
        }
      </span>

    </MenuButtonWrapper>
  )
}