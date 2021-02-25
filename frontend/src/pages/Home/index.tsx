import React, { useState } from 'react'
import { RouteComponentProps } from '@reach/router'

import { HomeHeaderWrapper } from './styles'
import { Layout } from '../../layout'

import { Personal } from '../../components/Personal'
import { ErrorReport } from '../../components/Modals/ErrorReport'

export const Home = (props:RouteComponentProps ) => {
  return (
    <Layout header={true}>
      <HomeHeaderWrapper>
        <h2>
          Personal Info
        </h2>
        <p>
          Basic info, liked your name and photo
        </p>
      </HomeHeaderWrapper>
      <Personal />
      <ErrorReport>
        Hello error!
      </ErrorReport>
    </Layout>
  )
}