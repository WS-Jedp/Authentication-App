import React from 'react'
import { MdMail, MdLock } from 'react-icons/md'
import { FcCdLogo } from 'react-icons/fc'

import { AuthContainer } from '../../containers/AuthContainer'
import { AuthLoginWrapper } from './styles'

import { InputText } from '../Inputs/InputText'
import { Button } from '../Buttons'
import { ButtonSocial } from '../Buttons/SocialButton'

export const AuthLogin:React.FC = () => {

  return (
    <AuthContainer>
      <AuthLoginWrapper>
          <div className="header">
            <h1>Authentication App</h1>
          </div>
          <h1>
            Login
          </h1>
          <InputText type="text" placeholder="Email" Icon={MdMail} />
          <InputText type="password" placeholder="Password" Icon={MdLock} />
          <Button primary={true} content="Login" />

          <span>
            or continue with this social media
          </span>

          <span>
            Don't have an account yet? Register
          </span>
      </AuthLoginWrapper>
    </AuthContainer>
  )
}