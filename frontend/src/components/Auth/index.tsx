import React, { useState } from 'react'
import { Link } from '@reach/router'
import { MdMail, MdLock } from 'react-icons/md'

import { AuthContainer } from '../../containers/AuthContainer'
import { AuthWrapper, OptionsWrapper } from './styles'

import { InputText } from '../Inputs/InputText'
import { Button } from '../Buttons'
import { ButtonSocial } from '../Buttons/SocialButton'

interface PersonLogin {
  email?: string;
  password?: string;
}

interface PropsAuth {
  children?: React.ReactNode;
  onSubmit: any;
  setEmail: (prev:any) => void;
  setPassword: (prev:any) => void;
  data: PersonLogin
}

export const AuthLogin = (props: PropsAuth) => {

  const { onSubmit, setEmail, setPassword, data } = props


  const onEmail = (ev) => {
    setEmail(ev.currentTarget.value)
  }
  const onPassword = (ev) => {
    setPassword(ev.currentTarget.value)
  }

  return (
    <AuthContainer>
      <AuthWrapper>
          <h1>Authentication App</h1>
          <h1>
            Login
          </h1>
          <InputText type="text" placeholder="Email" Icon={MdMail} id="email" name="email" handleInput={onEmail} value={data.email}/>
          <InputText type="password" placeholder="Password" id="password" name="password" Icon={MdLock} handleInput={onPassword} value={data.password} />
          <Button primary={true} content="Login" onAction={onSubmit}/>


        <OptionsWrapper>
            <span>
              or continue with this social media
            </span>

            <div className="social-media-options">
              <ButtonSocial>
                FB
              </ButtonSocial>
              <ButtonSocial>
                GO
              </ButtonSocial>
              <ButtonSocial>
                TW
              </ButtonSocial>
            </div>

            <span>
              Don't have an account yet? <Link to="/register">Register</Link>
            </span>
        </OptionsWrapper>
      </AuthWrapper>
    </AuthContainer>
  )
}