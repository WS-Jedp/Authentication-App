import React from 'react'
import { Link } from '@reach/router'
import { MdMail, MdLock } from 'react-icons/md'
import { FcCdLogo } from 'react-icons/fc'

import { AuthContainer } from '../../containers/AuthContainer'
import { AuthWrapper, OptionsWrapper } from './styles'

import { InputText } from '../Inputs/InputText'
import { Button } from '../Buttons'
import { ButtonSocial } from '../Buttons/SocialButton'

export const AuthLogin:React.FC = () => {

  return (
    <AuthContainer>
      <AuthWrapper>
          <h1>Authentication App</h1>
          <h1>
            Login
          </h1>
          <InputText type="text" placeholder="Email" Icon={MdMail} />
          <InputText type="password" placeholder="Password" Icon={MdLock} />
          <Button primary={true} content="Login" />


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