import React from 'react'
import { RouteComponentProps } from '@reach/router'

import { Layout } from '../../layout'

import { AuthRegister } from '../../components/AuthRegister'

export const Register = (props:RouteComponentProps) => {

  return (
    <Layout>
      <AuthRegister />
    </Layout>
  )
}