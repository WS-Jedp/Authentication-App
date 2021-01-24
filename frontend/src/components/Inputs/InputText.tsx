import React from 'react'
import { MdMail } from 'react-icons/md'
import { IconType } from 'react-icons'
import { InputTextWrapper } from './styles'

type PropsInputs = {
  type: string;
  Icon?: IconType;
  handleInput?: Function;
  value?: string;
  placeholder: string;
}

export const InputText = (props:PropsInputs) => {

  const { type, Icon, handleInput, value, placeholder } = props

  return (
    <InputTextWrapper>
      {
        Icon ? <Icon size="21px" color="rgba(0,0,0,.3)"/> : <MdMail size="21px" color="rgba(0,0,0,.3)"/>
      }
      <input type={type} placeholder={placeholder} /> 
    </InputTextWrapper>
  )
}