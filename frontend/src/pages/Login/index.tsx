import React, { useState, useContext } from 'react'
import { useNavigate } from '@reach/router'
import { RouteComponentProps } from '@reach/router'

import { Context } from '../../context'

import { AuthLogin } from '../../components/Auth'

import { Layout } from '../../layout'

import { useFetch } from '../../hooks/useFetch'

interface PersonLogin {
  email?: string;
  password?: string;
}

export const Login = (props:RouteComponentProps) => {

  const { addError, setId, setAuth } = useContext(Context)

  const navigate = useNavigate()

  const URL = '/authentication/login';
  const EXPIRE_TIME = new Date
  
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const data:PersonLogin = {
    email,
    password
  }

  const [ loading, response, usePost ] = useFetch('POST', URL, data)

  const onLogin = async () => {
    const resp = await usePost()
    if(resp.data.token) {
      document.cookie = `token=${resp.data.token}; Path=/; Domain=localhost; Expires=Sat, 26 Feb 2022 23:08:51 GMT;`
      setId(resp.data.user.id)
      setAuth(true)
      navigate('/home')
    }

    if(resp.status != 200) {
      addError(resp.message)
    }
    
  }


  return (
    <Layout>
      {
        loading ? 'Loading ...' : (
          <AuthLogin setEmail={setEmail} setPassword={setPassword} data={data} onSubmit={onLogin} />
        )
      }
    </Layout>
  )
}