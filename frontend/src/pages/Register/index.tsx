import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'

import { Layout } from '../../layout'

import { AuthRegister } from '../../components/AuthRegister'

import { useFetch } from '../../hooks/useFetch'


export const Register = (props:RouteComponentProps) => {

  interface PersonLogin {
    email: string;
    password: string;
  }

  const URL = '/authenticate/login';
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
        loading ? 'Loading...' : (
          <AuthRegister onSubmit={usePost} setData={setData} />
        )
      }
    </Layout>
  )
}