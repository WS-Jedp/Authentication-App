import React, { useState } from 'react'
import { Link } from '@reach/router'
import { MdMail, MdLock } from 'react-icons/md'

import { AuthContainer } from '../../containers/AuthContainer'
import { AuthWrapper, OptionsWrapper } from './styles'

import { InputText } from '../Inputs/InputText'
import { Button } from '../Buttons'
import { ButtonSocial } from '../Buttons/SocialButton'

interface PropsAuth {
  children?: React.ReactNode;
  onSubmit: any;
  setData: any;
}

export const AuthLogin = (props: PropsAuth) => {

  const { onSubmit, setData } = props

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onEmail = (ev) => {
    setEmail(ev.currentTarget.value)
  }
  const onPassword = (ev) => {
    setPassword(ev.currentTarget.value)
  }

  const onLogin = async () => {
    setData({
      email,
      password
    })
    await onSubmit()
  }

  return (
    <AuthContainer>
      <AuthWrapper>
          <h1>Authentication App</h1>
          <h1>
            Login
          </h1>
          <InputText type="text" placeholder="Email" Icon={MdMail} id="email" name="email" handleInput={onEmail} value={email}/>
          <InputText type="password" placeholder="Password" id="password" name="password" Icon={MdLock} handleInput={onPassword} value={password} />
          <Button primary={true} content="Login" onAction={onLogin}/>


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