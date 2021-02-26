import React, { useContext } from 'react'
import { Router } from '@reach/router'

import { Context } from '../context'

import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { Home } from '../pages/Home'

export const App = () => {

  const { auth } = useContext(Context)
  
  return (
    <Router>
        <Login path="/" default />

        {
          auth && (
            <>
              <Register path="/register" />
              <Home path="/home" />
            </>
          )
        }
    </Router>
  )
}
