import React from 'react'
import { MdClose } from 'react-icons/md'
import { IconType } from 'react-icons'
import { MenuButtonWrapper } from './styles'

type PropsMenuButton = {
  content?: string;
  Icon?: IconType;
  onClick?: React.MouseEvent;
}

export const MenuButton= ({ content, Icon, onClick }:PropsMenuButton) => {



  return (
    <MenuButtonWrapper>

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