import React from 'react'
import { MdMail } from 'react-icons/md'
import { IconType } from 'react-icons'
import { InputTextWrapper } from './styles'

type PropsInputs = {
  type: string;
  Icon?: IconType;
  handleInput?: (ev:any) => void;
  value?: string;
  placeholder: string;
  name: string;
  id: string;
}

export const InputText = (props:PropsInputs) => {

  const { type, Icon, handleInput, value, placeholder, name, id } = props

  return (
    <InputTextWrapper>
      {
        Icon ? <Icon size="21px" color="rgba(0,0,0,.3)"/> : <MdMail size="21px" color="rgba(0,0,0,.3)"/>
      }
      <input type={type} placeholder={placeholder} name={name} id={id} onChange={handleInput} value={value}/> 
    </InputTextWrapper>
  )
}