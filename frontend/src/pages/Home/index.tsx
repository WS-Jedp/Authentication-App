import React, { useState, useEffect, useContext } from 'react'
import { RouteComponentProps } from '@reach/router'

import { Context } from '../../context'
import { useFetch } from '../../hooks/useFetch'

import { HomeHeaderWrapper } from './styles'
import { Layout } from '../../layout'

import { Personal } from '../../components/Personal'
import { ErrorReport } from '../../components/Modals/ErrorReport'

interface User {
  name?: string;
  email?: string;
  username?: string;
  description?: string;
}

export const Home = (props:RouteComponentProps ) => {

  const { addError, id, user, setUser } = useContext(Context)
  const [ loading, response, useGet ] = useFetch('GET', `/api/user/${id}`)


  useEffect(() => {

    const getUser = async () => {
      const resp = await useGet()
      console.log(resp)
      // setUser(resp.data.user)
    }

    getUser()
    
  }, [user])

  if(loading) {
    return (
      <h3>
        Loading...
      </h3>
    )
  }

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