import React from 'react'
import { RouteComponentProps } from '@reach/router'

import { AuthLogin } from '../../components/Auth'

import { Layout } from '../../layout'


export const Login = (props:RouteComponentProps) => {



  return (
    <Layout>
      <AuthLogin />
    </Layout>
  )
}