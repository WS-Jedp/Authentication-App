import React, { useState } from 'react'
import { Link } from '@reach/router'
import { MdLock, MdMail } from 'react-icons/md'

import { AuthWrapper, OptionsWrapper } from '../Auth/styles'
import { AuthContainer } from '../../containers/AuthContainer'

import { InputText } from '../Inputs/InputText'
import { Button } from '../Buttons'
import { ButtonSocial } from '../Buttons/SocialButton'

interface PropsAuthRegister {
  children?: React.ReactNode;
  onSubmit: any;
  setData: any;
}

export const AuthRegister = (props:PropsAuthRegister) => {

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
        <h1>
          Join thousands of learners from around the world
        </h1>
        <p>
          Master web development by making real-life projects. There is multiple paths for you to choose.
        </p>

        <InputText id="email" name="email" handleInput={onEmail} type="email" placeholder="Email" Icon={MdMail} />
        <InputText type="password" placeholder="Password" Icon={MdLock} id="password" name="password" handleInput={onPassword} />

        <Button content="Start coding now" primary onAction={onLogin} />

        <OptionsWrapper>
          <span>
            Or continue with these social profile  
          </span>
            <ButtonSocial>
              FB
            </ButtonSocial>
          <span>
            Already a member? <Link to="/login">Login</Link>
          </span>
        </OptionsWrapper>

      </AuthWrapper>
    </AuthContainer>
  )

}