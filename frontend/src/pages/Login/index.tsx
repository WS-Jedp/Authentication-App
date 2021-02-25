import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'

import { AuthLogin } from '../../components/Auth'

import { Layout } from '../../layout'

import { useFetch } from '../../hooks/useFetch'

export const Login = (props:RouteComponentProps) => {

  
  interface PersonLogin {
    email: string;
    password: string;
  }

  const URL = '/authentication/login';
  const [data, setData] = useState<PersonLogin>({email: '', password: ''})

  const [loading, response, usePost] = useFetch('POST', URL, data)

  useEffect(() => {
    if(response) {
      console.log(response)
    }
  }, [loading, response])


  return (
    <Layout>
      {
        loading ? 'Loading ...' : (
          <AuthLogin setData={setData} onSubmit={usePost} />
        )
      }
    </Layout>
  )
}