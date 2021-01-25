import React from 'react'
import { Link } from '@reach/router'
import { MdLock, MdMail } from 'react-icons/md'

import { AuthWrapper, OptionsWrapper } from '../Auth/styles'
import { AuthContainer } from '../../containers/AuthContainer'

import { InputText } from '../Inputs/InputText'
import { Button } from '../Buttons'
import { ButtonSocial } from '../Buttons/SocialButton'

export const AuthRegister:React.FC = () => {

  return (
    <AuthContainer>
      <AuthWrapper>
        <h1>
          Join thousands of learners from around the world
        </h1>
        <p>
          Master web development by making real-life projects. There is multiple paths for you to choose.
        </p>

        <InputText type="email" placeholder="Email" Icon={MdMail} />
        <InputText type="password" placeholder="Password" Icon={MdLock} />

        <Button content="Start coding now" primary />

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